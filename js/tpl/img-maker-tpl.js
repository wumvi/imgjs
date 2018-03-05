import ImageObject from '../jsonld/image-object'
import ImgJsonInfo from './img-info'

/**
 * @export
 */
export default class ImgMakerTpl {
  /**
   *
   * @param {string} cdnUrl
   */
  constructor (cdnUrl) {
    /**
     *
     * @type {string}
     * @private
     */
    this.cdnUrl = cdnUrl
  }

  /**
   *
   * @param {string} imgFullId
   * @param {boolean} isMetadata
   * @param {boolean} isRepresentativeOfPage
   *
   * @return {string}
   *
   * @export
   */
  getTpl (imgFullId, isMetadata, isRepresentativeOfPage) {
    const pad = '000000'
    const [bucketType, bucketName, imgId] = imgFullId.split('-')
    const chunkImgIdRaw = pad.substring(0, pad.length - imgId.length) + imgId
    const chunkImgId = chunkImgIdRaw.match(/.{1,2}/g).join('/')

    const partCdnUrl = this.cdnUrl + bucketType + '/' + bucketName + '/' + chunkImgId + '/'

    const infoJsonUrl = partCdnUrl + 'info.json'
    const xhr = new XMLHttpRequest()
    xhr.open('GET', infoJsonUrl, false)
    xhr.send()
    if (xhr.status !== 200) {
      throw new Error('Error load ' + infoJsonUrl)
    }

    const imgInfo = /** @type {Object} */ (JSON.parse(xhr.responseText))
    const imgJsonInfo = new ImgJsonInfo(imgInfo)

    const sizesObject = []

    const mediaToImgList = imgJsonInfo.getSizes()
    const mediaNames = Object.keys(mediaToImgList)
    mediaNames.map((media) => {
      const obj = {}
      obj[media] = mediaToImgList[media]
      sizesObject.push(obj)
    })

    let tpl = `<div class="imj-wrap js--imj-wrap" 
                    data-size='${JSON.stringify(sizesObject)}' 
                    data-trsp="${imgJsonInfo.isTransparent().toString()}"
                    style="--ratio: ${imgJsonInfo.getRatio() * 100}%; --max-width: ${imgJsonInfo.getMaxSize()}px;" 
                    data-url="${partCdnUrl + imgJsonInfo.getName()}">
                      <figure class="imj-figure">
                          <img class="imj-img js--imj-img"
                               src="${partCdnUrl}preview.svg" 
                               alt="${imgJsonInfo.getCaption()}"
                               title="${imgJsonInfo.getCaption()}">`
    tpl += imgJsonInfo.getCaption() ? `<figcaption class="imj-caption">${imgJsonInfo.getCaption()}</figcaption>` : ''
    tpl += '</figure></div>'

    if (isMetadata) {
      const metaData = new ImageObject()
      metaData.setCaption(imgJsonInfo.getCaption())
      metaData.setName(imgJsonInfo.getCaption())
      metaData.setRepresentativeOfPage(isRepresentativeOfPage)
      const metaFileExt = imgJsonInfo.isTransparent() ? 'png' : 'jpg'
      metaData.setContentUrl(partCdnUrl + imgJsonInfo.getName() + '-' + imgJsonInfo.getMaxSize() + '-3.' + metaFileExt)
      const imgModified = new Date(imgJsonInfo.getModified() * 1000)
      metaData.setDatePublished(imgModified.toISOString())
      tpl += '<script type="application/ld+json">' + metaData.getJSON() + '</script>'
    }

    return tpl
  }
}

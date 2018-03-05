import MediaObject from './media-object.js'

export default class ImageObject extends MediaObject {
  /**
   *
   */
  constructor () {
    super()

    /**
     *
     * @type {string}
     * @private
     */
    this.caption = ''

    /**
     *
     * @type {boolean}
     * @private
     */
    this.representativeOfPage = false

    /**
     *
     * @type {?ImageObject}
     * @private
     */
    this.thumbnail = null
  }

  /**
   *
   * @param {string} caption
   */
  setCaption (caption) {
    this.caption = caption
  }

  /**
   *
   * @return {boolean}
   */
  isRepresentativeOfPage () {
    return this.representativeOfPage
  }

  /**
   *
   * @param {boolean} flag
   */
  setRepresentativeOfPage (flag) {
    this.representativeOfPage = flag
  }

  /**
   *
   * @param {ImageObject} thumbnail
   */
  setThumbnail (thumbnail) {
    this.thumbnail = thumbnail
  }

  /**
   *
   * @return {Object}
   */
  getProperties () {
    const data = {}
    if (this.caption) {
      data['caption'] = this.caption
    }
    if (this.representativeOfPage) {
      data['representativeOfPage'] = this.representativeOfPage
    }
    if (this.thumbnail) {
      data['thumbnail'] = this.thumbnail
    }

    return Object.assign({}, data, super.getProperties())
  }

  /**
   *
   * @return {Object}
   */
  getModel () {
    const data = this.getProperties()
    data['@type'] = 'ImageObject'

    return data
  }
}

import Size from './size.js'

export default class ImgItem {
  /**
   *
   * @param {HTMLElement} box
   * @param {boolean} isCssVarSupport
   * @param {number} pixelRatio
   * @param {boolean} isWebPSupport
   */
  constructor (box, isCssVarSupport, pixelRatio, isWebPSupport) {
    /**
     *
     * @type {HTMLElement}
     * @private
     */
    this.box = box

    /**
     *
     * @type {boolean}
     * @private
     */
    this.isCssVarSupport = isCssVarSupport

    /**
     *
     * @type {Array<Size>}
     * @private
     */
    this.sizes = []

    /**
     *
     * @type {boolean}
     * @private
     */
    this.isTransparent = this.box.getAttribute('data-trsp') === 'true'

    /**
     *
     * @type {boolean}
     * @private
     */
    this.isTransparent = this.box.getAttribute('data-mod') === 'true'

    /**
     *
     * @type {string}
     * @private
     */
    this.urlPart = this.box.getAttribute('data-url')

    /**
     *
     * @type {boolean}
     * @private
     */
    this.isWebPSupport = isWebPSupport

    /**
     *
     * @type {number}
     * @private
     */
    this.pixelRatio = pixelRatio

    /**
     *
     * @type {HTMLImageElement}
     * @private
     */
    this.img = /** @type {HTMLImageElement} */ (this.box.getElementsByClassName('js--imj-img')[0])

    this.init()
  }

  /**
   * @private
   */
  init () {
    if (!this.isCssVarSupport) {
      this.box.style.maxWidth = getComputedStyle(this.box).getPropertyValue('--max-width')
    }

    const sizeRaws = /** @type {!Object} */ (JSON.parse(this.box.getAttribute('data-size')))
    const keys = /** @type {Array.<string>} */ (Object.keys(sizeRaws));
    keys.map(size => {
      const obj = {};
      obj[size] = sizeRaws[size];
      this.sizes.push(new Size(obj))
    })

    const imgWidth = ImgItem.getSize(this.sizes)
    if (imgWidth === 0) {
      this.box.classList.add('imj-wrap--hide')
      return
    }

    const imgExt = this.isTransparent ? (this.isWebPSupport ? 'webp' : 'png') : 'jpg'

    const img = new Image()
    img.addEventListener('load', () => {
      this.img.src = img.src
    })
    img.addEventListener('load', this.onImageSuccessLoaded.bind(this))
    img.onerror = this.onImageErrorLoaded.bind(this)
    img.src = `${this.urlPart}-${imgWidth}-${this.pixelRatio}.${imgExt}?v=` + this.

    this.initEvent()
  }

  /**
   * @private
   */
  initEvent () {

  }

  /**
   * @private
   */
  onImageSuccessLoaded () {
    this.box.classList.add('imj-wrap--success-loaded')
  }

  /**
   * @private
   */
  onImageErrorLoaded () {
    this.box.classList.add('imj-wrap--error-loaded')
  }

  /**
   * Возвращает наиболее близкий размер по разрешению экрана
   *
   * @param {Array<Size>} sizes
   *
   * @return {number} Размер изображения
   */
  static getSize (sizes) {
    const screenWidth = Math.max(window.screen.availWidth, window.screen.availHeight)

    let width = 0
    sizes.map((size) => {
      if (size.getMedia() < screenWidth) {
        width = Math.max(size.getImg(), width)
      }
    })

    return width
  }
}

// @externs common

import ImgItem from './item.js'

/**
 * @export
 */
export default class ResponsiveImg {
  /**
   *
   */
  constructor () {
    const isCssVarSupport = window.CSS && window.CSS.supports && window.CSS.supports('--fake-var', '0')
    /**
     *
     * @type {boolean}
     * @private
     */
    this.isCssVarSupport = /** @type {boolean} */ (isCssVarSupport)

    /**
     *
     * @type {number}
     * @private
     */
    this.pixelRatio = ResponsiveImg.getDevicePixelRatio()

    /**
     *
     * @type {boolean}
     * @private
     */
    this.isWebPSupport = ResponsiveImg.isWebPSupport()

    /**
     *
     * @type {?IntersectionObserver}
     * @private
     */
    this.observer = null

    /**
     *
     * @type {Array<!HTMLElement>}
     * @private
     */
    this.wraps = Array.from(document.getElementsByClassName('js--imj-wrap'))
    if (this.wraps.length !== 0) {
      this.init()
    }
  }

  /**
   * @private
   */
  init () {
    this.lazyloadInit()
  }

  /**
   * @private
   */
  lazyloadInit () {
    if (!('IntersectionObserver' in window)) {
      this.wraps.map((item) => {
        new ImgItem(
          item,
          this.isCssVarSupport,
          this.pixelRatio,
          this.isWebPSupport
        )
      })

      return
    }

    const config = {
      'rootMargin': '50px 0px',
      'threshold': 0.01
    }

    this.observer = new IntersectionObserver(this.onIntersection.bind(this), config)
    this.wraps.map(item => {
      this.observer.observe(item)
    })
  }

  /**
   *
   * @param {Array} entries
   *
   * @private
   */
  onIntersection (entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio <= 0) {
        return
      }
      this.observer.unobserve(entry.target)
      const imgItem = /** @type {HTMLElement} */ (entry.target)
      new ImgItem(
        imgItem,
        this.isCssVarSupport,
        this.pixelRatio,
        this.isWebPSupport
      )
    })
  }

  /**
   *
   * @return {number}
   */
  static getDevicePixelRatio () {
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    if (window['screen']['systemXDPI'] !== undefined &&
      window['screen']['logicalXDPI'] !== undefined &&
      window['screen']['systemXDPI'] > window['screen']['logicalXDPI']) {
      // Only allow for values > 1
      return window['screen']['systemXDPI'] / window['screen']['logicalXDPI']
    } else if (window['devicePixelRatio'] !== undefined) {
      return window['devicePixelRatio']
    }

    return 1
  }

  /**
   *
   * @return {boolean}
   */
  static isWebPSupport () {
    return document.getElementsByTagName('body')[0].getAttribute('webp-support') === 'yes'
  }
}

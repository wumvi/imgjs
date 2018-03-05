export default class ImgJsonInfo {
  /**
   *
   * @param {Object} raw
   */
  constructor (raw) {
    /**
     * @type {string}
     * @private
     */
    this.bucket = raw['bucket']

    /**
     * @type {string}
     * @private
     */
    this.caption = raw['caption']

    /**
     * @type {string}
     * @private
     */
    this.cdn = raw['cdn']

    /**
     * @type {number}
     * @private
     */
    this.id = raw['id']

    /**
     * @type {number}
     * @private
     */
    this.modified = raw['modified']

    /**
     * @type {string}
     * @private
     */
    this.name = raw['name']

    /**
     * @type {string}
     * @private
     */
    this.path = raw['path']

    /**
     * @type {boolean}
     * @private
     */
    this.preview = raw['preview']

    /**
     * @type {number}
     * @private
     */
    this.ratio = raw['ratio']

    /**
     * @type {Object}
     * @private
     */
    this.sizes = raw['sizes']

    /**
     * @type {boolean}
     * @private
     */
    this.transparent = raw['transparent']
  }

  /**
   *
   * @return {string}
   */
  getBucket () {
    return this.bucket
  }

  /**
   *
   * @return {string}
   */
  getCaption () {
    return this.caption
  }

  /**
   *
   * @return {string}
   */
  getCdn () {
    return this.cdn
  }

  /**
   *
   * @return {number}
   */
  getId () {
    return this.id
  }

  /**
   *
   * @return {number}
   */
  getModified () {
    return this.modified
  }

  /**
   *
   * @return {string}
   */
  getName () {
    return this.name
  }

  /**
   *
   * @return {string}
   */
  getPath () {
    return this.path
  }

  /**
   *
   * @return {boolean}
   */
  isPreview () {
    return this.preview
  }

  /**
   *
   * @return {number}
   */
  getRatio () {
    return this.ratio
  }

  /**
   *
   * @return {Object}
   */
  getSizes () {
    return this.sizes
  }

  /**
   *
   * @return {number}
   */
  getMaxSize() {
    const sizes = /** @type {Array.<number>} */ (Object.values(this.sizes))

    return Math.max(...sizes)
  }

  /**
   *
   * @return {boolean}
   */
  isTransparent () {
    return this.transparent
  }
}

export default class Size {
  /**
   *
   * @param {Object} size
   */
  constructor (size) {

    const media = /** @type {string} */ (Object.keys(size)[0])

    /**
     *
     * @type {number}
     * @private
     */
    this.media = parseInt(media, 10)

    /**
     * @type {number}
     * @private
     */
    this.img = size[media]
  }

  /**
   *
   * @return {number}
   */
  getMedia () {
    return this.media
  }

  /**
   *
   * @return {number}
   */
  getImg () {
    return this.img
  }
}

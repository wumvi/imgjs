import CreativeWork from './creative-work.js'

export default class MediaObject extends CreativeWork {
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
    this.contentUrl = ''

    /**
     *
     * @type {string}
     * @private
     */
    this.width = ''

    /**
     *
     * @type {string}
     * @private
     */
    this.height = ''
  }

  /**
   *
   * @param {string} url
   */
  setContentUrl (url) {
    this.contentUrl = url
  }

  /**
   *
   * @param {string} width
   */
  setWidth (width) {
    this.width = width
  }

  /**
   *
   * @param {string} height
   */
  setHeight (height) {
    this.height = height
  }

  /**
   *
   * @return {Object}
   */
  getProperties () {
    const data = {}
    if (this.contentUrl) {
      data['contentUrl'] = this.contentUrl
    }
    if (this.width) {
      data['width'] = this.width
    }
    if (this.height) {
      data['height'] = this.height
    }

    return Object.assign({}, data, super.getProperties())
  }

  /**
   *
   * @return {Object}
   */
  getModel () {
    const data = this.getProperties()
    data['@type'] = 'MediaObject'

    return data
  }
}

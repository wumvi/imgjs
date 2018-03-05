import Thing from './thing.js'

export default class CreativeWork extends Thing {
  constructor () {
    super()

    /**
     *
     * @type {string}
     * @private
     */
    this.author = ''

    /**
     *
     * @type {string}
     * @private
     */
    this.datePublished = ''
  }

  /**
   *
   * @param {string} date
   */
  setDatePublished (date) {
    this.datePublished = date
  }

  /**
   *
   * @param {string} author
   */
  setAuthor (author) {
    this.author = author
  }

  /**
   *
   * @return {Object}
   */
  getProperties () {
    const data = {}
    if (this.author) {
      data['author'] = this.author
    }
    if (this.datePublished) {
      data['datePublished'] = this.datePublished
    }

    return Object.assign({}, data, super.getProperties())
  }

  /**
   *
   * @return {Object}
   */
  getModel () {
    const data = this.getProperties()
    data['@type'] = 'CreativeWork'

    return data
  }
}

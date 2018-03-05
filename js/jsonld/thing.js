import Model from './model.js'

export default class Thing extends Model {
  constructor () {
    super()

    /**
     *
     * @type {string}
     * @private
     */
    this.name = ''

    /**
     *
     * @type {string}
     * @private
     */
    this.url = ''

    /**
     *
     * @type {string}
     * @private
     */
    this.id = ''

    /**
     *
     * @type {string}
     * @private
     */
    this.description = ''
  }

  /**
   *
   * @param {string} name
   */
  setName (name) {
    this.name = name
  }

  /**
   *
   * @param {string} url
   */
  setUrl (url) {
    this.url = url
  }

  /**
   *
   * @param {string} id
   */
  setId (id) {
    this.id = id
  }

  /**
   *
   * @param {string} description
   */
  setDescription (description) {
    this.description = description
  }

  /**
   *
   * @return {Object}
   */
  getProperties () {
    const data = {}
    if (this.name) {
      data['name'] = this.name
    }
    if (this.url) {
      data['url'] = this.url
    }
    if (this.id) {
      data['id'] = this.id
    }
    if (this.description) {
      data['description'] = this.description
    }

    return Object.assign({}, data, super.getProperties())
  }

  /**
   *
   * @return {Object}
   */
  getModel () {
    const data = this.getProperties()
    data['@type'] = 'Thing'

    return data
  }
}

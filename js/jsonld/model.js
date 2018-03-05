/**
 * @abstract
 */
export default class Model {
  /**
   * @return {Object}
   *
   * @abstract
   */
  getProperties () {
  }

  /**
   * @return {Object}
   *
   * @abstract
   */
  getModel () {
  }

  /**
   *
   * @return {Object}
   */
  toJSON () {
    return this.getModel()
  }

  getJSON () {
    const data = this.getModel()
    data['@context'] = 'http://schema.org/'

    return JSON.stringify(data)
  }
}

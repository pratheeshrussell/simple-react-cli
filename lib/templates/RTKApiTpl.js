/**
 * RTK Api Tpl
 */
class RTKApiTpl {
  /**
   *
   * @param name - the api name
   */
  constructor( name, postfix="api" ) {
    this.type = 'api';
    this.isDir = false;
    this.name = name;
    this.postfix = postfix;
    this.filename = postfix ? `${name}.${postfix}` : name;
  }
}

export default RTKApiTpl
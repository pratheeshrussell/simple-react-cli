/**
 * ComponentTpl
 */
class ComponentTpl {
  /**
   *
   * @param name - the component name
   */
  constructor( name, postfix="component" ) {
    if(postfix === ''){postfix = undefined;}
    this.type = 'component';
    this.isDir = true;
    this.name = name;
    this.postfix = postfix;
    this.filename = postfix ? `${name}.${postfix}` : name;
  }
}

export default ComponentTpl
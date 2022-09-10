/**
 * Slice Tpl
 */
class RTKSliceTpl {
  /**
   *
   * @param name - the slice name
   */
  constructor( name, postfix="slice" ) {
    this.type = 'slice';
    this.isDir = false;
    this.name = name;
    this.postfix = postfix;
    this.filename = postfix ? `${name}.${postfix}` : name;
  }
}

export default RTKSliceTpl
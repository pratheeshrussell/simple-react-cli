/**
 * HookTpl
 */
class HookTpl {
  /**
   *
   * @param name - the hook name
   */
  constructor( name, postfix="hook" ) {
    this.type = 'hook';
    this.isDir = false;
    this.name = name;
    this.filename = postfix ? `${name}.${postfix}` : name;
  }
}

export default HookTpl
/**
 * RTKStoreTpl
 */
 class RTKStoreTpl {
    /**
     *
     * @param name - the store name
     */
    constructor( name="store", postfix="store" ) {
      this.type = 'store';
      this.isDir = false;
      this.name = name;
      this.filename = postfix ? `${name}.${postfix}` : name;
    }
  }
  
  export default RTKStoreTpl
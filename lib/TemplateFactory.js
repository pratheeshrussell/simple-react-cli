import ComponentTpl from './templates/ComponentTpl';
import HookTpl from './templates/HookTpl';
import RTKStoreTpl from './templates/RTKStoreTpl';
import RTKSliceTpl from './templates/RTKSliceTpl';RTKApiTpl
import RTKApiTpl from './templates/RTKApiTpl';
import TemplateGenerator from './TemplateGenerator';
import SupportFunctions from './support/SupportFunctions';

/**
 * TemplateFactory
 */
class TemplateFactory {

  /**
   * Factory to generate the templates
   * @param cli options
   */
  static createTemplateFor( cli ) {

    /**
     * Generate React tsx component
     */
    if( cli.component ) {
      let seperatePath = SupportFunctions.pathSeperator(cli.component);
      return new TemplateGenerator(new ComponentTpl(seperatePath.name, cli.postfix),cli,seperatePath.path);
    }

    /**
     * Generate React hook
     */
    if( cli.hook ) {
      let seperatePath = SupportFunctions.pathSeperator(cli.hook);
      return new TemplateGenerator(new HookTpl(seperatePath.name, cli.postfix),cli,seperatePath.path);
    }

    /**
     * Generate RTK store
     */
     if( cli.store ) {
      let seperatePath = SupportFunctions.pathSeperator(cli.store);
      //generate a slice also
      // new TemplateGenerator(new RTKSliceTpl(seperatePath.name, cli.postfix),cli,seperatePath.path)
      return new TemplateGenerator(new RTKStoreTpl(seperatePath.name, cli.postfix),cli,seperatePath.path);
    }

    /**
     * Generate RTK slice
     */
     if( cli.slice ) {
      let seperatePath = SupportFunctions.pathSeperator(cli.slice);
      return new TemplateGenerator(new RTKSliceTpl(seperatePath.name, cli.postfix),cli,seperatePath.path);
    }

    /**
     * Generate RTK Api
     */
     if( cli.api ) {
      let seperatePath = SupportFunctions.pathSeperator(cli.api);
      return new TemplateGenerator(new RTKApiTpl(seperatePath.name, cli.postfix),cli,seperatePath.path);
    }

  }

}

export default TemplateFactory

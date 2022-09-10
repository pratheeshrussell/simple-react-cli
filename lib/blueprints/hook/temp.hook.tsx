function use{{(name + ' ' + postfix) | PascalCase}}() {
  return {
    message:'Hello from use{{name | PascalCase}} hook'
  };

}

export default use{{(name + ' ' + postfix) | PascalCase}};
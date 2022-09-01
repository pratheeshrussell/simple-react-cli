export const mainList = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    group: "options",
    description: 'Displays this help message'
  }, {
    name: 'generate',
    alias: 'g',
    type: Boolean,
    group: "options",
    description: 'Generate components,hooks'
  },{
    name: 'rtk',
    type: Boolean,
    group: "options",
    description: 'Generate redux toolkit objects'
    }, {
    name: 'run',
    alias: 'r',
    type: Boolean,
    group: "options",
    description: 'Run development server'
  }, {
    name: 'build',
    alias: 'b',
    type: Boolean,
    group: "options",
    description: 'Build project'
  }
];

export const generateList = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    group: "Generate",
    description: 'Displays this help message'
  },
  {
        name: 'component',
        alias: 'c',
        type: String,
        group: "Generate",
        description: 'generate React tsx component',
    },{
      name: 'hook',
      type: String,
      group: "Generate",
      description: 'generate React tsx hook',
  },
    {
      name: 'postfix',
      type: String,
      group: "Generate",
      description: 'override the default postfix in file name'
    }
];

export const rtkList = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    group: "rtk",
    description: 'Displays this help message'
  },{
        name: 'store',
        type: String,
        group: "rtk",
        description: 'Generate a rtk store',
    },{
      name: 'slice',
      type: String,
      group: "rtk",
      description: 'Generate a rtk slice',
    },{
      name: 'postfix',
      type: String,
      group: "rtk",
      description: 'override the default postfix in file name'
    }
];


export const serveList = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    group: "Run",
    description: 'Displays this help message'
  },{
        name: 'port',
        alias: 'p',
        type: String,
        group: "Run",
        description: 'Set Port',

    }
];
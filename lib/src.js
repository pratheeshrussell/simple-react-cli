#! /usr/bin/env node
import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import swig from 'swig';
import TemplateFactory from './TemplateFactory';
import RunCommand from './RunCommand';

import {mainList,rtkList, generateList,serveList} from './config/cli-options'
import swigFilters from './config/swig-filters';

swigFilters(swig);
let mainCli = commandLineArgs(mainList, { stopAtFirstUnknown: true ,});
let mainOptions = mainCli.options;
let mainArgv = mainCli._unknown || [];

 // Generate commands
 if( mainOptions.generate ) {
    let generateCli = commandLineArgs(generateList, { argv:mainArgv, stopAtFirstUnknown: true });
    let generateOptions = generateCli.Generate;
    //let generateArgv = generateCli._unknown || [];
    if(generateOptions.hasOwnProperty('component')){
      TemplateFactory.createTemplateFor(generateOptions);
      console.log('Component Generated.');
    }else if(generateOptions.hasOwnProperty('hook')){
      TemplateFactory.createTemplateFor(generateOptions);
      console.log('Hook Generated.');
    } else if(mainOptions.help || generateOptions.help){
      console.log(commandLineUsage({header: 'Generate Options',optionList: generateList})); 
    }else {
      console.log('Unknown Parameter');
      console.log(commandLineUsage({header: 'Generate Options',optionList: generateList}));
    }
  
  } else if( mainOptions.rtk ) { // redux toolkit commands
    let rtkCli = commandLineArgs(rtkList, { argv:mainArgv, stopAtFirstUnknown: true });
    let rtkOptions = rtkCli.rtk;
    if(rtkOptions.hasOwnProperty('store')){
      TemplateFactory.createTemplateFor(rtkOptions);
      console.log('Store Generated.');
    }else if(rtkOptions.hasOwnProperty('slice')){
      TemplateFactory.createTemplateFor(rtkOptions);
      console.log('Slice Generated.');}
    else if(rtkOptions.hasOwnProperty('api')){
      TemplateFactory.createTemplateFor(rtkOptions);
      console.log('Api Generated.');
    }else if(mainOptions.help || rtkOptions.help){
      console.log(commandLineUsage({header: 'RTK Options',optionList: rtkList})); 
    }else {
      console.log('Unknown Parameter');
      console.log(commandLineUsage({header: 'RTK Options',optionList: rtkList}));
    }
  
  }// Serve commands
  else if( mainOptions.run ) {
    let serveCli = commandLineArgs(serveList, { argv:mainArgv, stopAtFirstUnknown: true });
    let serveOptions = serveCli.Run;
    if(mainOptions.hasOwnProperty('help') || (serveOptions && serveOptions.hasOwnProperty('help'))){
      console.log(commandLineUsage({header: 'Run Options',optionList: serveList})); 
    }else {
      RunCommand.serveCommand(serveOptions);
    }
  } // Build commands
  else if( mainOptions.build ) {
      RunCommand.buildCommand();   
  }  
  // Main help
   else if( mainOptions.help ) {
     console.log(commandLineUsage({header: 'Main Options',optionList: mainList})); 
   } else {
    console.log('Unknown Parameter');
    console.log(commandLineUsage({header: 'Main Options',optionList: mainList}));
  } 
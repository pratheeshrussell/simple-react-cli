# Simple React Cli (Typescript)

Developed upon the work of [vue-generate-component](https://github.com/NetanelBasal/vue-generate-component). 

Developed within a couple of hours so expect bugs.

CLI util for generating React components.

## READ THIS FIRST
This is not a replacement for react. You must have setup React project separately

## Installation
```bash
npm install -g @pratheeshrussell/simple-react-cli
```  

OR 

* Clone the repository
* Run 
```bash
npm install
```  
* Build the Files
```bash
npm run build
```   
*  Install from local folder
```bash
npm install -g PATH_TO_CLONED FOLDER
``` 

OR

```bash
npm install -g https://github.com/pratheeshrussell/simple-react-cli
```

## Usage

### Create new component
```bash
src-ts -g -c Header
```
Will generate a folder called `headerComponent` inside src folder *If you are in project root folder* or *your current directory*  

check the options available by
```bash
src-ts -g -h
```

### Create new hook
```bash
src-ts -g --hook something
```
Will get back to this once I learn more about react hooks. For now it will generate a function that starts with the keyword `use` and export it.

### Redux toolkit options
```bash
src-ts --rtk --store storage
```
Will generate a store 

```bash
src-ts --rtk --slice auth
```
will generate a slice but you must manually add it to the store. 

```bash
src-ts --rtk --api auth
```
will generate a sample Query and a Mutation but you must manually add it to the store. 
  
  
Will add more commands once I learn more about it.

### Serve
```bash
src-ts -s
```
check the options available by
```bash
src-ts -s -h
```

### Build
```bash
src-ts -b
```

## Disclaimer

This project tries to solve tedious copy&paste operations from **our** daily workflow.
Please notice that the generated files will require some external libraries for react and redux toolkit. Make sure these libraries are available in your project.


## TODO

1. Do some manual testing atleast
2. ...

import { createSlice } from '@reduxjs/toolkit';

const initial{{(name + ' ' + postfix) | PascalCase }}State = { counter: 0 };

const {{(name + ' ' + postfix) | PascalCase }} = createSlice({
    name: '{{(name + ' ' + postfix) | PascalCase }}Slice',
    initialState: initial{{(name + ' ' + postfix) | PascalCase }}State,
    reducers: {
      increment(state:{[key:string]:any}) {
        state.counter++;
      },
      decrement(state:{[key:string]:any}) {
        state.counter--;
      }
    },
  });
  
  export const {{(name + ' ' + postfix) | PascalCase }}Actions = {{(name + ' ' + postfix) | PascalCase }}.actions;
  // Use the Actions export to dispatch actions in Components
  export default {{(name + ' ' + postfix) | PascalCase }}.reducer;
  // Register the reducer in Store by adding it to the reducers object
  // import {{(name + ' ' + postfix) | PascalCase }}Reducer from './{{(name + ' ' + postfix) | fileNameCase }}'
  // {{(name) | camelCase }}:{{(name + ' ' + postfix) | PascalCase }}Reducer,
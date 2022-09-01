import { createSlice } from '@reduxjs/toolkit';

const initial{{name | PascalCase }}State = { counter: 0 };

const {{name | fileNameCase }}Slice = createSlice({
    name: '{{name | fileNameCase }}Slice',
    initialState: initial{{name | PascalCase }}State,
    reducers: {
      increment(state:{[key:string]:any}) {
        state.counter++;
      },
      decrement(state:{[key:string]:any}) {
        state.counter--;
      }
    },
  });
  
  export const {{name | fileNameCase }}Actions = {{name | fileNameCase }}Slice.actions;
  
  export default {{name | fileNameCase }}Slice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import {{name | fileNameCase }}Reducer from './{{name | fileNameCase }}.slice';

const {{name | fileNameCase }} = configureStore({
    reducer: { {{name | fileNameCase }}:{{name | fileNameCase }}Reducer },
});
  
export default {{name | fileNameCase }};
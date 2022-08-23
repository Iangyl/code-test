import { createSlice } from '@reduxjs/toolkit';
import renderInitialValue from '../../utils/renderInitialValue';
import getConcatedStringFromSpecObj from '../../utils/getConcatedStringFromSpecObj';

const initialState = {
  inputValues: renderInitialValue(4),
  value: '',
};

export const inputSlice = createSlice({
  name: 'values',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValues = action.payload;
      state.value = getConcatedStringFromSpecObj(state.inputValues);
    },
    cleanInputValue: (state, action) => {
      state.inputValues = renderInitialValue(4);
    },
  },
});

export const { setInputValue, cleanInputValue } = inputSlice.actions;

export default inputSlice.reducer;

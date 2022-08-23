import { createSlice } from '@reduxjs/toolkit';
import getRandomIntInclusive from '../../utils/getRandomIntInclusive';

const initialState = {
  code: getRandomIntInclusive(1000, 9999).toString(),
};

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    getCode: (state, action) => {
      state.code = getRandomIntInclusive(1000, 9999).toString();
    },
  },
});

export const { getCode } = codeSlice.actions;

export default codeSlice.reducer;

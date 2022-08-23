import { status } from './renderInitialValue';

const checkValues = (arg1, arg2) => {
  if (arg1 && arg2) {
    return Number(arg1) === Number(arg2) ? status.success : status.mistake;
  }
  return status.mistake;
};

export default checkValues;

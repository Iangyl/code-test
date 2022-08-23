export const status = {
  success: 'success',
  mistake: 'mistake',
  default: 'default',
};

const renderInitialValue = (size) => {
  const sizeBaseCheck = (size && size > 0 && typeof size !== 'boolean') ?? false;
  const localSize = (sizeBaseCheck && !Number.isNaN(Number(size))) ? Number(size) : 4;

  let temp = [];
  for (let i = 0; i < localSize; i += 1) {
    temp = [...temp, { index: i, value: '', status: status.default }];
  }

  return temp;
};

export default renderInitialValue;

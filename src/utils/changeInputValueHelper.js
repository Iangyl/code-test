const changeInputValueHelper = (oldValue, newProperties) => oldValue.map((item) => {
  if (item.index === newProperties.index) {
    return { ...item, ...newProperties };
  }
  return item;
});

export default changeInputValueHelper;

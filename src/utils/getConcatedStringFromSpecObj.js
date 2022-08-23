const getConcatedStringFromSpecObj = (state) => {
  let temp = '';
  state.forEach((item) => {
    if (typeof item.value === 'string' || typeof item.value === 'number') { temp += item.value; }
  });

  return temp;
};

export default getConcatedStringFromSpecObj;

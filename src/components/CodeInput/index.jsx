import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import changeInputValueHelper from '../../utils/changeInputValueHelper';
import { setInputValue } from '../../features/input/inputSlice';
import { status } from '../../utils/renderInitialValue';
import s from './style.module.sass';
import checkValues from '../../utils/checkValues';

function CodeInput({ inputValues, secretNumber }) {
  const dispatch = useDispatch();
  const ref = useRef();
  console.log('secretNumber', secretNumber);

  const validateNumberField = (myNumber) => {
    const numberRegEx = /-?\d*\.?\d{1,2}/;
    return numberRegEx.test(String(myNumber).toLowerCase());
  };

  const handleCodeChange = async (event, itemIndex) => {
    const childe = ref.current.childNodes;
    const code = event.target.value;

    if (code.length === 1 && validateNumberField(code)) {
      if (childe.length - 1 !== itemIndex) childe[itemIndex + 1].focus();
      await dispatch(
        setInputValue(
          changeInputValueHelper(inputValues, {
            index: itemIndex,
            value: code,
            status: checkValues(secretNumber[itemIndex], code),
          }),
        ),
      );

      if (itemIndex === secretNumber.length - 1) {
        childe[0].focus();
      }
    }
  };

  const handleKeyPress = async (event, itemIndex) => {
    const childe = ref.current.childNodes;

    if (event.code === 'Backspace') {
      if (itemIndex !== 0) childe[itemIndex - 1].focus();
      else childe[itemIndex].focus();
      const newInputValues = changeInputValueHelper(inputValues, {
        index: itemIndex,
        value: '',
        status: status.default,
      });
      await dispatch(setInputValue(newInputValues));
    }
  };

  return (
    <div ref={ref}>
      {inputValues.map((i, k) => (
        <input
          className={`${s.Input} ${s[status[i.status]]}`}
          key={k}
          type="text"
          onKeyDown={(e) => handleKeyPress(e, k)}
          onChange={(e) => handleCodeChange(e, k)}
          value={i?.value}
        />
      ))}
    </div>
  );
}

export default CodeInput;

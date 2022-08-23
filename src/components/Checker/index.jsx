import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { status } from '../../utils/renderInitialValue';
import { cleanInputValue } from '../../features/input/inputSlice';
import { getCode } from '../../features/code/codeSlice';
import s from './style.module.sass';

function Checker({ secretNumber, value, setFail }) {
  const dispatch = useDispatch();
  const [result, setResult] = useState('');

  useEffect(() => {
    if (value?.length === 4) {
      if (value === secretNumber) {
        setResult(status.success);
        setFail(status.success);
        setTimeout(() => {
          setResult('');
          dispatch(getCode());
          setFail(status.default);
          dispatch(cleanInputValue());
        }, 2000);
      } else {
        setResult(status.mistake);
        setFail(status.mistake);
        setTimeout(() => {
          setResult('');
          dispatch(cleanInputValue());
          setFail(status.default);
        }, 2000);
      }
    }
  }, [value, dispatch]);

  return <div className={`${s.Result} ${s[result]}`}>{result.toUpperCase()}</div>;
}

export default Checker;

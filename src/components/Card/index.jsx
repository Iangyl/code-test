import React from 'react';
import { useSelector } from 'react-redux';
import { status } from '../../utils/renderInitialValue';
import Checker from '../Checker';
import CodeInput from '../CodeInput';
import s from './style.module.sass';

function Card() {
  const [fail, setFail] = React.useState(status.default);
  const { inputValues, value } = useSelector((state) => state.values);
  const secretNumber = useSelector((state) => state.code.code);
  return (
    <div className={`${s.Card} ${s[fail]}`}>
      <CodeInput inputValues={inputValues} secretNumber={secretNumber} />
      <Checker secretNumber={secretNumber} value={value} setFail={setFail} />
    </div>
  );
}

export default Card;

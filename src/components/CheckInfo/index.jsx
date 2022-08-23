import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function CheckInfo({ children }) {
  const inputsValue = useSelector((state) => state.values.value);
  const [vision, setVision] = useState(false);

  useEffect(() => {
    if (inputsValue !== '') {
      setVision(true);
    }
    setTimeout(() => {
      setVision(false);
    }, 1111);
  }, [children, inputsValue]);

  return vision && <div>{children}</div>;
}

export default CheckInfo;

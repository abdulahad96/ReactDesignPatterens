import React, { useState, useEffect } from 'react';
import { useReducer } from 'react';

const useCustomLightHook = () => {
  const [isOn, setIsOn] = useState(false);

  const LightOff = () => {
    setIsOn(false);
  };
  const LightOn = () => {
    setIsOn(true);
  };
  return { isOn, LightOff, LightOn };
};

const reducerHook = (state, action) => {
  const { age, exp } = state;
  switch (action.type) {
    case 'inc_age':
      console.log(state);
      return {
        ...state,
        age: state.age + 1,
      };

    case 'inc_exp':
      return {
        ...state,
        exp: state.exp + 1,
      };
    default:
      break;
  }
  return state;
};

const HooksPatteren = () => {
  const { isOn, LightOff, LightOn } = useCustomLightHook();
  const [state, dispatch] = useReducer(reducerHook, { age: 27, exp: 5 });
  return (
    <>
      <p onClick={isOn ? LightOff : LightOn}>{isOn ? 'On' : 'off'}</p>

      <p>
        <button onClick={() => dispatch({ type: 'inc_age' })}>
          Increase Age
        </button>{' '}
        your age is {state.age}
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'inc_exp' })}>
          Increase exp
        </button>
        your experience is {state.exp}
      </p>
    </>
  );
};
export default HooksPatteren;

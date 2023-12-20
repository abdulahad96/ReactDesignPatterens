// App.js
import React, { useEffect } from 'react';
import CompoundTab from './Componenets/CompoundComponenet';
import HooksPatteren from './Componenets/ReactHook';
import LinePlot from './Componenets/D3Component';




const App = () => {

  return (
    <>
       {/* this is example of Compound patteren */}
    {/* <CompoundTab/> */}
         {/* this is example of React hooks patteren */}
    {/* <HooksPatteren/> */}
    <LinePlot/>
    </>
  );
};

export default App;

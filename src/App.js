// App.js
import React, { useEffect } from 'react';
import CompoundTab from './Componenets/CompoundComponenet';
import HooksPatteren from './Componenets/ReactHook';




const App = () => {

  return (
    <>
       {/* this is example of Compound patteren */}
    <CompoundTab/>
         {/* this is example of React hooks patteren */}
    <HooksPatteren/>
    </>
  );
};

export default App;

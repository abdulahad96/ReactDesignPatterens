import React from 'react';
import { Route ,Routes} from 'react-router-dom';
import LoginPage from '../../pages/auth/login';
import Register from '../../pages/auth/register';

const AuthRouter = props => {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<LoginPage/>}></Route>
      <Route path={'Register'} element={<Register/>}></Route>
    </Routes>
    </>
  );
};
export default AuthRouter;

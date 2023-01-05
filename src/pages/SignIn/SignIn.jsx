import Navigation from "./../../components/Layout/Navigation";
import Login from '../../components/SignIn/Login';

import { ToastContainer, Flip } from 'react-toastify';

const SignIn = () => {
  return (
    <>
    {/* Toast container popup on Unsuccessful Submit*/}
      <ToastContainer 
        position="top-center"
        autoClose={4200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
      <Navigation/> 
      <Login/>
    </>
    
  )
}

export default SignIn
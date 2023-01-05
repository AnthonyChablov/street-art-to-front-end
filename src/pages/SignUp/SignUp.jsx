import Navigation from "./../../components/Layout/Navigation";
import Register from "./../../components/SignUp/Register";
import { toast } from 'react-toastify';
import { ToastContainer, Flip } from 'react-toastify';



const SignUp = () => {
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
      <Register/>
    </>
  )
}

export default SignUp
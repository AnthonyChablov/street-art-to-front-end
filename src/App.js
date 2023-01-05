import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';
import Loader from "./components/Loader/Loader";

/* Lazy Load Pages */
const Home = lazy(() => import('./pages/Home/Home'));
const StartApp = lazy(() => import('./pages/StartApp/StartApp'));
const Error404 = lazy(() => import('./pages/Error404/Error404'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));

const login = (e)=>{
  e.preventDefault();

}

const register = (e) =>{
  e.preventDefault();
}


function App() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes >
          <Route 
            path='/' 
            element={<Home/>}
          >
          </Route>
          <Route 
            path='/app' 
            element={<StartApp/>}
          >
          </Route>
          <Route 
            path='/sign-in' 
            element={<SignIn/>}
          >
          </Route>
          <Route 
            path='/sign-up' 
            element={<SignUp/>}
          >
          </Route>
          <Route 
            path='/*' 
            element={<Error404/>}
          >
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

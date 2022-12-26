import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';

/* Lazy Load Pages */
const Home = lazy(() => import('./pages/Home/Home'));
const StartApp = lazy(() => import('./pages/StartApp/StartApp'));
const Error404 = lazy(() => import('./pages/Error404/Error404'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes >
          <Route 
            path='/' 
            element={<Home/>}>
          </Route>
          <Route 
            path='/app' 
            element={<StartApp/>}>
          </Route>
          <Route 
            path='/*' 
            element={<Error404/>}>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

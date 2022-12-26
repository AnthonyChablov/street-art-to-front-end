import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';

import Home from './pages/Home/Home';
import StartApp from './pages/StartApp/StartApp';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <>
      <Router>
        <Routes >
          <Route 
            path='/' 
            element={<Home/>}></Route>
          <Route 
            path='/app' 
            element={<StartApp/>}></Route>
          <Route 
            path='/*' 
            element={<Error404/>}></Route>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;

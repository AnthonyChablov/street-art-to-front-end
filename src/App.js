import {
  BrowserRouter as Router
} from 'react-router-dom';

import Navigation from './components/Layout/Navigation/Navigation';
import Footer from './components/Layout/Footer/Footer';


function App() {
  return (
    <div>
      <Navigation/>
      <Router>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

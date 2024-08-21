import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';


import { Home } from './pages/Home';
import { Mens } from './pages/Mens';
import { Womens } from './pages/Womens';
import { News } from './pages/New';


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
        <Routes>
          <Route path = "/" element ={<Home />}/>
          <Route path = "/mens" element = {<Mens />}/>
          <Route path = "/womens" element = {<Womens />}/>
          <Route path = "/new" element = {<News/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

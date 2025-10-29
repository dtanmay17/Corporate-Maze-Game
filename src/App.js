
import { Route, Routes } from 'react-router';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter 
} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import { useDispatch } from 'react-redux';
import GameRules from './pages/GameRules.jsx';
import Design from './pages/Design.jsx';


function App() {

  
const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-950 text-white">
        <Navbar />
        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<GameRules />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/design" element={<Design />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

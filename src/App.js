import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import { Provider, useSelector } from 'react-redux';
import Store from './utils/Store';

function App() {
  const theme= useSelector((store)=>store.theme.themes);
  console.log(theme);
  return (
    <div className={' box-border h-screen ' + (theme ? "bg-zinc-900" : "bg-white")}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;

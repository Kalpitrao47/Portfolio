import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import { Provider, useSelector } from 'react-redux';
import Store from './utils/Store';
import R_Header from './components/Res_components/R_Header';
import R_Home from './components/Res_components/R_Home';
import R_About from './components/Res_components/R_About';

function App() {
  const theme= useSelector((store)=>store.theme.themes);
  console.log(theme);
  return (
    <div className={' box-border h-screen ' + (theme ? "bg-zinc-900" : "bg-white")}>
      <Router>
        {/* <Header/> */}
        <R_Header/>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<R_Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<R_About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;

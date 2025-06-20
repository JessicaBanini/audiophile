import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './App.css';
import Footer from "./components/Footer";
import Headphones from "./pages/Category/Headphones";
import Speakers from "./pages/Category/Speakers";
import Earphones from "./pages/Category/Earphones";


// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/headphones" element={<Headphones />} />
         <Route path="/speakers" element={<Speakers />} />
         <Route path="/earphones" element={<Earphones />} />
      </Routes>
      <Footer/>
    </Router>
  

    
  );
}

export default App;

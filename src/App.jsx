import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './App.css';
import Footer from "./components/Footer";
import Headphones from "./pages/Category/Headphones";
import Speakers from "./pages/Category/Speakers";
import Earphones from "./pages/Category/Earphones";

// import EarphoneDetails from './pages/Details/Earphones_Details'
import HeadphoneDetails from './pages/Details/Headphone_Details'
// import SpeakerDetails from './pages/Details/Speaker_Details'
import CartPage from './pages/CartPage'


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
         
         {/* <Route path="/earphone-details" element={<EarphoneDetails />} /> */}
         <Route path="/:slug" element={<HeadphoneDetails />} />
         {/* <Route path="/speakers-details" element={<SpeakerDetails />} /> */}

         <Route path="/cart" element={<CartPage />} />

         
      </Routes>
      <Footer/>
    </Router>
  

    
  );
}

export default App;

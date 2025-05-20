import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navBar'
import HomePage from './pages/homePage';
import ContactUs from './pages/ContactUs';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Router>
      </>
  )
}

export default App

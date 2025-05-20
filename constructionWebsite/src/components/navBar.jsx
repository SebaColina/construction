import { Link } from "react-router-dom";
import "./navBar.css"; // Optional: For custom styling
import { SocialIcon } from 'react-social-icons'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

    // States to control the expansion of each navbar item
  const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false);
  const [isClientsOpen, setIsClientsOpen] = useState(false);
  const [isServiceCenterOpen, setIsServiceCenterOpen] = useState(false);

  const toggleDropdown = (section) => {
    if (section === "technologies") setIsTechnologiesOpen(!isTechnologiesOpen);
    if (section === "clients") setIsClientsOpen(!isClientsOpen);
    if (section === "serviceCenter") setIsServiceCenterOpen(!isServiceCenterOpen);
  };
  
  return (
    <nav className="navbar">
        {/* TITLE */}
      <div className="navbar-brand">
        <Link to="/" className="navbar-title">Q'Consultant</Link>
      </div>
      <ul className="navbar-links">
        {/* TECHNOLOGIES */}
        <li className="navbar-item">
            <button className="navbar-button" onClick={() => toggleDropdown("technologies")}>
                Technologies {isTechnologiesOpen ? "▲" : "▼"}
            </button>
            {isTechnologiesOpen && (
            <ul className="dropdown">
                {/*OPTIONS*/}
            </ul>
          )}
        </li>
        {/* CLIENTS */}
        <li className="navbar-item">
            <button className="navbar-button" onClick={() => toggleDropdown("clients")}>
                Clients {isClientsOpen ? "▲" : "▼"}
            </button>
            {isClientsOpen && (
            <ul className="dropdown">
                {/*OPTIONS*/}
            </ul>
          )}
        </li>
        {/* SERVICE CENTER */}
        <li className="navbar-item">
            <button className="navbar-button" onClick={() => toggleDropdown("serviceCenter")}>
                Service center {isServiceCenterOpen ? "▲" : "▼"}
            </button>
            {isServiceCenterOpen && (
            <ul className="dropdown">
                {/*OPTIONS*/}
            </ul>
          )}
        </li>
      </ul>
      <ul className="navbar-links">
        <button style={{backgroundColor: "white", color: "black"}} onClick={() => navigate('/contactUs')}>Contact us</button>
        <SocialIcon className="navBar-icon" url="https://facebook.com" />
        <SocialIcon className="navBar-icon" url="https://x.com" />
        <SocialIcon className="navBar-icon" url="https://instagram.com" />
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import logo from "./assets/logo.png";
import { FaTimes } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { useGlobalContext } from "./context";

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar sidebar-open" : "sidebar"}>
      <div className='sidebar-header'>
        <a href='#'>
          <img src={logo} alt='logo' />
        </a>
        <button onClick={closeSidebar} className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='sidebar-content'>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>achievements</a>
        </li>
        <li>
          <a href='#'>about me</a>
        </li>
        <li>
          <a href='#'>contact</a>
        </li>
      </ul>
      <ul className='sidebar-footer'>
        <li>
          <a href='#'>
            <FaFacebook />
          </a>
        </li>

        <li>
          <a href='#'>
            <FaTwitter />
          </a>
        </li>

        <li>
          <a href='#'>
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href='#'>
            <FaYoutube />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;

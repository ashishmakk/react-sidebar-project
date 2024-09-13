import React from "react";
import hero from "./assets/rr.jpg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <main>
      <section className='hero-section'>
        <img src={hero} alt='hero-image' />
        <button type='button' onClick={openSidebar} className='menu-icon'>
          <FaBars />
        </button>
      </section>
    </main>
  );
};

export default Home;

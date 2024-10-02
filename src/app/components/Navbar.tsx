"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`z-50 group fixed top-[20px] left-1/2 transform -translate-x-1/2 h-[60px] p-[1px] bg-gradient-to-r from-transparent to-transparent border-0 transition-all duration-500 ease-in-out ${
        isMenuOpen ? "w-[500px]" : "w-[170px]"
      }`}
      >

      <div className="flex px-6 gap-6 items-center justify-evenly w-full h-full rounded-full border border-solid border-gray-400 border-opacity-30 backdrop-blur-[25px] backdrop-saturate-[1.06] bg-white/30">
        <div className={`animated-square w-[30px] h-[30px] bg-transparent border border-solid border-gray-500 rounded-md transform rotate-45 group-hover:rotate-[135deg] group-hover:shadow-[0_0_10px_3px_rgba(255,51,51,0.6)] group-hover:shadow-lightRed group-hover:border-[#FF3333] cursor-pointer transition-all duration-300 ease-in-out" ${
          isMenuOpen ? "" : ""
          }`}></div>
 {/* Texte "Menu" ou items en fonction de l'état */}
 {!isMenuOpen ? (
          <p onClick={toggleMenu} className="uppercase text-xl font-extralight text-darkGray kanit cursor-pointer transition-opacity duration-300 ease-in-out hover:text-lightRed">
            Menu
          </p>
        ) : (
          <div className="flex items-center space-x-8 text-darkGray opacity-100 transition-opacity duration-300 ease-in-out">
            <Link href="/devenir-frontalier"><p className="hover:text-lightRed kanit">Devenir Frontalier</p></Link>
            <Link href="/services"><p className="hover:text-lightRed kanit">Services</p></Link>
            <Link href="/contact"><p className="hover:text-lightRed kanit">Contact</p></Link>
            <p onClick={toggleMenu} className="text-xl font-bold text-darkGray kanit cursor-pointer transition-opacity duration-300 ease-in-out hover:text-lightRed">X</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

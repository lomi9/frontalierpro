"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Mail, ShoppingBasket, User, ChevronDown, X } from "lucide-react";
import Submenu from "./SubMenu";
import { gsap } from "gsap";
import MobileSubmenu from "./MobileSubmenu";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement | null>(null);
  const submenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Fonction pour vérifier si on est en mode mobile
  const isMobile = () => window.innerWidth < 768;

  const toggleMenu = () => {
    // Si le menu est ouvert et que l'utilisateur clique pour le fermer,
    // on s'assure également de fermer le sous-menu en mode mobile.
    if (isMenuOpen && isSubmenuOpen) {
      setIsSubmenuOpen(false);
    }

    setIsMenuOpen((prev) => !prev);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node) &&
      submenuRef.current &&
      !submenuRef.current.contains(event.target as Node)
    ) {
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (navRef.current && itemsRef.current && !isMobile()) {
      // Animation pour la version desktop
      gsap.to(navRef.current, {
        width: isMenuOpen ? "500px" : "170px",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMobile() && mobileMenuRef.current) {
      // Animation d'ouverture/fermeture du menu mobile
      gsap.to(mobileMenuRef.current, {
        opacity: isMenuOpen ? 1 : 0,
        display: isMenuOpen ? "block" : "none",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar Desktop */}
      <nav
        ref={navRef}
        className={`hidden sm:flex z-50 group fixed top-[20px] left-1/2 transform -translate-x-1/2 h-[60px] p-[1px] bg-gradient-to-r from-transparent to-transparent border-0 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "w-[600px]" : "w-[170px]"
        }`}
      >
        <div className="flex relative px-6 gap-6 items-center justify-evenly w-full h-full rounded-full border border-solid border-gray-400 border-opacity-30 backdrop-blur-[25px] backdrop-saturate-[1.06] bg-white/30">
          <div
            className={`animated-square w-[30px] h-[30px] bg-transparent border border-solid border-gray-500 rounded-md transform rotate-45 group-hover:rotate-[135deg] group-hover:shadow-[0_0_10px_3px_rgba(255,51,51,0.6)] group-hover:shadow-lightRed group-hover:border-[#FF3333] cursor-pointer transition-all duration-300 ease-in-out`}
          ></div>

          <p
            onClick={toggleMenu}
            className="uppercase text-xl font-extralight text-darkGray kanit cursor-pointer transition-opacity duration-300 ease-in-out hover:text-lightRed"
          >
            Menu
          </p>

          {isMenuOpen && (
            <div ref={itemsRef} className="flex items-center space-x-8 text-darkGray">
              <Link href="/">
                <p className="hover:text-lightRed kanit flex no-wrap min-w-[130px]">
                  Devenir Frontalier
                </p>
              </Link>
              {/* Toggle Submenu */}
              <div
                className="hover:text-lightRed flex items-center cursor-pointer"
                onClick={toggleSubmenu}
              >
                <p className=" kanit">Services</p>
                <ChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    isSubmenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div className="flex gap-4 justify-evenly items-center border border-solid p-2 px-4 shadow-md border-gray-400 rounded-full">
                <Mail className="size-5 cursor-pointer hover:text-lightRed flex items-center" />
                <ShoppingBasket className="size-5 cursor-pointer hover:text-lightRed flex items-center" />
                <User className="size-5 cursor-pointer hover:text-lightRed flex items-center" />
              </div>
              <p
                onClick={toggleMenu}
                className="text-xl font-bold text-darkGray kanit cursor-pointer transition-opacity duration-300 ease-in-out hover:text-lightRed"
              >
                <X />
              </p>
            </div>
          )}
        </div>
      </nav>

      {/* Menu mobile */}
      <nav
        ref={navRef}
        className="sm:hidden z-50 group fixed top-[20px] left-1/2 transform -translate-x-1/2 h-[60px] p-[1px] bg-gradient-to-r from-transparent to-transparent border-0 transition-all duration-500 ease-in-out w-[170px]"
      >
        <div className="flex relative px-6 gap-6 items-center justify-evenly w-full h-full rounded-full border border-solid border-gray-400 border-opacity-30 backdrop-blur-[25px] backdrop-saturate-[1.06] bg-white/30">
        <div
            className={`animated-square w-[30px] h-[30px] bg-transparent border border-solid border-gray-500 rounded-md transform rotate-45 group-hover:rotate-[135deg] group-hover:shadow-[0_0_10px_3px_rgba(255,51,51,0.6)] group-hover:shadow-lightRed group-hover:border-[#FF3333] cursor-pointer transition-all duration-300 ease-in-out`}
          ></div>
          <p
            onClick={toggleMenu}
            className="uppercase text-xl font-extralight text-darkGray kanit cursor-pointer transition-opacity duration-300 ease-in-out hover:text-lightRed"
          >
            Menu
          </p>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-gray-600/80 z-40 opacity-0 backdrop-blur-[5px] hidden"
      >
        <div className="flex flex-col items-center justify-center h-full text-white space-y-8">
          <Link href="/">
            <p className="text-2xl font-bold kanit hover:text-lightRed">
              Devenir Frontalier
            </p>
          </Link>

    
            
             {/* MobileSubmenu */}
          <MobileSubmenu
            isSubmenuOpen={isSubmenuOpen}
            toggleSubmenu={toggleSubmenu}
            ref={submenuRef}
          />
      -
          <div className="absolute bottom-[40px] flex gap-6 justify-evenly items-center border border-solid p-4 px-6 shadow-md border-gray-400 rounded-full">
            <Mail className="size-8 cursor-pointer hover:text-lightRed flex items-center" />
            <ShoppingBasket className="size-8 cursor-pointer hover:text-lightRed flex items-center" />
            <User className="size-8 cursor-pointer hover:text-lightRed flex items-center" />
          </div>
          <p
            onClick={toggleMenu}
            className="absolute top-0 right-0 text-3xl font-bold text-white kanit cursor-pointer transition-opacity duration-300 ease-in-out hover:text-lightRed"
          >
            <X className="text-3xl w-10 h-10" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

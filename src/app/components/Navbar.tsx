"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Mail, ShoppingBasket, User, ChevronDown, X } from "lucide-react";
import Submenu from "./SubMenu";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);  // État pour le sous-menu

  const navRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement | null>(null);
  const submenuRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    // Si le menu est ouvert et que l'utilisateur clique pour le fermer,
    // on s'assure également de fermer le sous-menu.
    if (isMenuOpen && isSubmenuOpen) {
      setIsSubmenuOpen(false);
    }

    setIsMenuOpen((prev) => !prev);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);  // Basculer l'état du sous-menu
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Si le clic est en dehors de la navbar ou du sous-menu, fermer le sous-menu
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node) &&
      submenuRef.current &&
      !submenuRef.current.contains(event.target as Node)
    ) {
      setIsSubmenuOpen(false); // Ferme le sous-menu
    }
  };
  useEffect(() => {
    // Attacher l'événement de clic sur le document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Nettoyage de l'événement
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    if (navRef.current && itemsRef.current) {
      tl.current = gsap.timeline({ paused: true });

      // Animation de la barre
      tl.current.to(navRef.current, {
        width: "500px",
        duration: 0.5,
        ease: "power3.inOut",
      });

      // Apparition des items après l'agrandissement
      tl.current.to(
        itemsRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",
        },
        "-=2"
      );
    }
  }, []);

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`z-50 group fixed top-[20px] left-1/2 transform -translate-x-1/2 h-[60px] p-[1px] bg-gradient-to-r from-transparent to-transparent border-0 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "w-[600px]" : "w-[170px]"
        }`}
      >
        <div className="flex relative px-6 gap-6 items-center justify-evenly w-full h-full rounded-full border border-solid border-gray-400 border-opacity-30 backdrop-blur-[25px] backdrop-saturate-[1.06] bg-white/30">
          <div
            className={`animated-square w-[30px] h-[30px] bg-transparent border border-solid border-gray-500 rounded-md transform rotate-45 group-hover:rotate-[135deg] group-hover:shadow-[0_0_10px_3px_rgba(255,51,51,0.6)] group-hover:shadow-lightRed group-hover:border-[#FF3333] cursor-pointer transition-all duration-300 ease-in-out`}
          ></div>

          {!isMenuOpen ? (
            <p
              onClick={toggleMenu}
              className="uppercase text-xl font-extralight text-darkGray kanit cursor-pointer transition-opacity duration-300 ease-in-out hover:text-lightRed"
            >
              Menu
            </p>
          ) : (
            <div ref={itemsRef} className="flex items-center space-x-8 text-darkGray">
              <Link href="/">
                <p className="hover:text-lightRed kanit flex no-wrap min-w-[130px]">Devenir Frontalier</p>
              </Link>
              {/* Toggle Submenu */}
              <div className="hover:text-lightRed flex items-center cursor-pointer" onClick={toggleSubmenu}>
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
                <X/>
              </p>
            </div>
          )}
          {/* Afficher le sous-menu en fonction de l'état */}
          {isSubmenuOpen && <Submenu  ref={submenuRef} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

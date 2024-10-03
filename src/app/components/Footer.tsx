import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="scroll-snap h-screen flex flex-wrap  relative bg-transparent text-black py-8 overflow-hidden items-center justify-center ">
        <div className=" w-[200vw] sm:w-[160vw] md:w-[120vw]  lg:w-[120vw] xl:w-[100vw]  absolute bottom-[-15vw] flex items-end z-10">
            <img
                src="/mountain.png"
                alt="montagnes par IA"
                className="w-full object-cover z-10"
            />
        </div>
      <div className="relative mb-10 md:mb-0  md:w-full md:mx-2 lg:mx-4 xl:mx-auto border-solid border p-4 lato border-gray-300 backdrop-blur-[3px] rounded-xl z-20 container px-4 bg-white/40">
        <div className="z-50 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section Logo et Description */}
          <div>
            <h2 className="text-darkGray text-sm md:text-2xl z-50  font-semibold">Frontalier Pro</h2>
            <p className="text-darkGray text-xs md:text-sm mt-2">
              Votre passerelle vers une carrière réussie en Suisse. Nous vous accompagnons dans toutes vos démarches.
            </p>
          </div>

          {/* Section Liens rapides */}
          <div className="h-auto flex justify-start flex-wrap">
            <h3 className=" flex text-sm  font-semibold text-darkGray">Liens Rapides</h3>
            <ul className="mt-4 w-full flex justify-start flex-col gap-0 space-x-0">
              <li>
                <Link href="/" className="text-darkGray text-sm hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/devenir-frontalier" className="text-darkGray text-sm hover:underline">
                  Devenir Frontalier
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-darkGray text-sm hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div>
            <h3 className="text-sm  font-semibold text-darkGray">Contactez-nous</h3>
            <ul className="mt-4 md:space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 md:w-5 h-5 text-darkGray" />
                <a href="mailto:contact@frontalierpro.com" className="text-darkGray text-sm text hover:underline">
                  contact@frontalierpro.com
                </a>
              </li>
              <li className="text-sm  flex items-center space-x-2 text-darkGray">
                <Phone className="w-4 md:w-5 h-5 text-sm text-darkGray" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="text-sm  flex items-center space-x-2 text-darkGray">
                <MapPin className="w-4 md:w-5 h-5 text-sm  text-darkGray" />
                <span className="text-sm ">123 Avenue de Suisse, Genève</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t text-darkGray border-gray-700 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Frontalier Pro. Tous droits réservés.
        </div>
        
      </div>
      <p className="absolute text-[12vw] sm:text-[11vw] md:text-[11vw] lg:text-[11vw] xl:text-[150px] bottom-[0px] text-black/40  kanit font-black z-50">FRONTALIER PRO</p>
    </footer>
  );
};

export default Footer;

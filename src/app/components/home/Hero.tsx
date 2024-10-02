"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowBigDown, Dot, MoveDown } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null); // Ajout du type ici pour aider TypeScript
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll("span");

      const timeline = gsap.timeline();

      // Animation des lettres qui apparaissent une par une
      timeline.fromTo(
        letters,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1, // Décalage entre chaque lettre
        }
      );

      // Ajout d'une pause
      timeline.to(letters, { duration: 1.5 });

      // Animation pour faire remonter le titre et rétrécir
      timeline.to(titleRef.current, {
        y: () => -window.innerHeight * 0.32, // 20% de la hauteur de l'écran
        scale: 0.8,
        duration: 1.5,
        ease: "power3.inOut",
      });
// Animation de la section suivante (fond + contenu)
timeline.to(
  sectionRef.current, // L'animation de l'opacité du conteneur de la section
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  },
  "-=1" // Commence cette animation légèrement avant la fin de la précédente
);
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden w-screen bg-transparent">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          ref={titleRef}
          className="text-black/20 text-[11vw] sm:text-[12vw] font-bold hero-title poppins uppercase flex items-baseline align-baseline"
        >
          {/** Séparation des lettres en spans */}
          {"Frontalier Pro".split("").map((letter, index) => (
            <span key={index} className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
      </div>

      {/* Section suivante */}
      <div 
      ref={sectionRef}
      className="next-section opacity-0  w-full h-full pb-10 pt-[19vh] sm:pt-[20vh] px-6 sm:px-12">
      <div className=' overflow-hidden flex-wrap relative flex w-full h-full border border-solid border-gray-400 border-opacity-30 backdrop-blur-[5px] rounded-xl  bg-white/5'>
            <div className="absolute z-10 w-[50vh] sm:w-[75vh] bottom-[20%] sm:bottom-[-100px] right-[-20%] sm:right-[30%] overflow-hidden">
              <img
                src="/suisse_3d_map.png"
                alt="carte 3d de l'europe avec drapeau suisse"
                className="w-[100%] object-cover"
              />
            </div>
            <div className='w-full sm:w-1/2  h-auto sm:h-full z-20  p-10 pt-20 sm:p-6 sm:pl-20 flex sm:justify-start sm:items-center'>
                <div className='flex w-full justify-start flex-col gap-6'>
                    <p className='text-darkGray lato text-[5vw] sm:text-5xl font-bold'>Votre passerelle</p>
                    <p className='text-darkGray kanit text-[5vw] sm:text-5xl font-thin'>Vers une carrière réussie</p>
                    <p className='text-darkGray lato text-[5vw] sm:text-5xl font-bold'>En Suisse</p>
                </div>
            </div>
            <div className='w-full sm:w-1/2 h-auto sm:h-full  sm:p-6 flex justify-center flex-wrap content-end gap-6 pb-10 sm:gap-0 sm:pb-0 sm:content-evenly'>
                
                {/* Bouton "Tailwind Connect" n 1 desktop */}
      <div className="w-full hidden sm:flex justify-center">
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span className="poppins">Je souhaite devenir frontalier</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>

      {/* Bouton "Tailwind Connect" n 2 desktop */}
      <div className="w-full hidden sm:flex justify-center ">
        <button className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-2xl p-px text-xs font-semibold leading-6 text-white inline-block h-[100px] w-[300px]">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative h-[100px] w-[300px] flex space-x-2 items-center z-10 rounded-2xl bg-zinc-700 py-0.5 px-4 ring-1 ring-white/10 justify-center">
            <span className="poppins text-lg">Je suis déjà frontalier</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute bottom-[-2px] left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>

      {/* Bouton "Tailwind Connect" n 1 mobile */}
      <div className="button-1-mobile w-full flex sm:hidden justify-center">
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span className="poppins">Je souhaite devenir frontalier</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>

      {/* Bouton "Tailwind Connect" n 2 mobile */}
      <div className="button-1-mobile w-full flex sm:hidden justify-center">
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span className="poppins">Je suis déjà frontalier</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
                
              

            </div>
        </div>
        </div>
    </div>
  );
};

export default Hero;

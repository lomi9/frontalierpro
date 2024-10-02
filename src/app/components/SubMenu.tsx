"use client";
import React, { forwardRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { BriefcaseBusiness, PiggyBank, Sofa } from "lucide-react";

// Utilisation de forwardRef pour accepter une ref externe
const Submenu = forwardRef<HTMLDivElement>((props, ref) => {
  useEffect(() => {
    if (ref && typeof ref !== "function" && ref.current) {
      gsap.fromTo(
        ref.current,
        { height: 0, opacity: 0, display: "none" },
        {
          height: "auto",
          opacity: 1,
          display: "block",
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }
  }, [ref]);

  return (
    <div ref={ref} className="absolute top-[50px] w-auto flex justify-center mt-4">
      <div className="flex flex-col gap-4 p-4 rounded-lg shadow-md border border-solid border-gray-400 border-opacity-30 backdrop-blur-[25px] backdrop-saturate-[1.06] bg-white/30">
        <Link href="/services/consulting" className="hover:text-lightRed text-darkGray flex flex-nowrap items-center gap-4">
            <BriefcaseBusiness className="size-5"/>
          <p className=" kanit">Emploi</p>
        </Link>
        <Link href="/services/development" className="hover:text-lightRed text-darkGray flex flex-nowrap items-center gap-4">
          <PiggyBank className="size-5"/>
          <p className="kanit">Fiscalité</p>
        </Link>
        <Link href="/services/development" className="hover:text-lightRed text-darkGray flex flex-nowrap items-center gap-4">
          <Sofa className="size-5"/>
          <p className="kanit">Vie quotidienne</p>
        </Link>
        
      </div>
    </div>
  );
});

Submenu.displayName = "Submenu";

export default Submenu;

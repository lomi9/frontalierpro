import React, { forwardRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type MobileSubmenuProps = {
  isSubmenuOpen: boolean;
  toggleSubmenu: () => void;
};

const MobileSubmenu = forwardRef<HTMLDivElement, MobileSubmenuProps>(
  ({ isSubmenuOpen, toggleSubmenu }, ref) => {
    return (
      <div ref={ref} className="text-center text-white mt-4">
        <div
          onClick={toggleSubmenu}
          className="flex justify-center items-center cursor-pointer"
        >
          <p className="text-2xl font-bold kanit">Services</p>
          {isSubmenuOpen ? (
            <ChevronUp className="ml-2 transition-transform duration-300" />
          ) : (
            <ChevronDown className="ml-2 transition-transform duration-300" />
          )}
        </div>
        {isSubmenuOpen && (
          <div className="mt-4 space-y-4">
            <p className="hover:text-lightRed kanit">Service 1</p>
            <p className="hover:text-lightRed kanit">Service 2</p>
            <p className="hover:text-lightRed kanit">Service 3</p>
          </div>
        )}
      </div>
    );
  }
);

// Ajout du displayName pour résoudre l'erreur
MobileSubmenu.displayName = "MobileSubmenu";

export default MobileSubmenu;

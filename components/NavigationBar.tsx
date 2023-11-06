import { useEffect, useState } from "react";
import { MobileNavMenu } from "./MobileNavMenu";
import Link from "next/link";
import CloseIcon from "@components/icons/cancel.svg";
import MenuIcon from "@components/icons/hamburger-menu.svg";

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenuOnLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
        <div className="h-14 flex justify-between items-center px-3 relative max-w-7xl md:px-12">
          <div className="font-bold text-2xl text-teal-900 md:basis-3/12">
            <Link href="/">Knewsly</Link>
          </div>
          <div className="flex items-center justify-end gap-x-2 text-gray-800 basis-3/12">
            <div className="hidden md:flex items-center gap-x-4">
              <Link href="/sports">Sports</Link>
              <Link href="/business">Business</Link>
              <Link href="/technology">Technology</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen((prev) => (prev = !prev))}
                className="inline-flex items-center justify-center h-11 w-11"
              >
                {!isOpen ? <MenuIcon className="h-6 w-6" /> : <CloseIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen ? <MobileNavMenu onLinkClick={closeMenuOnLinkClick} /> : null}
      </header>
      <div className="h-14"></div>
    </>
  );
};

export default NavigationBar;

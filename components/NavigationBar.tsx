import { useEffect, useState } from "react";
import { MobileNavMenu } from "./MobileNavMenu";
import Link from "next/link";

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

  return (
    <>
      <header className="fixed top-0 w-full bg-white">
        <div className="h-14 flex justify-between items-center px-4 relative border-b border-gray-200">
          <div>Logo</div>
          <div>
            <div>
              <Link href="/sports">Sports</Link>
              <Link href="/business">Business</Link>
              <Link href="/technology">Technology</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen((prev) => (prev = !prev))}
                className="inline-flex items-center justify-center h-11 w-11"
              >
                {!isOpen ? "Opdn" : "Close"}
              </button>
            </div>
          </div>
        </div>

        {isOpen ? <MobileNavMenu /> : null}
      </header>
      <div className="h-14"></div>
    </>
  );
};

export default NavigationBar;

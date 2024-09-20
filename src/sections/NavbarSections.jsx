import { useState } from "react";
import { useLocation } from 'react-router-dom';

export default function NavbarSections() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = location.pathname;

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="absolute">
      <div className={`w-screen text-white bg-primary-blue px-10 lg:px-20 py-5 relative z-30 transition-shadow ${isOpen ? "shadow-md" : ""}`}>
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="layout grid grid-cols-2 items-center">
            <div className="font-satoshi font-bold text-[40px]">Jinligogo</div>
            <div className="font-satoshi flex gap-4 lg:gap-10 min-w-max justify-end max-sm:hidden">
              <a href="/" className={`nav ${currentPath === "/" ? "active" : ""}`}>Home</a>
              <a href="/reviews" className={`nav ${currentPath === "/reviews" ? "active" : ""}`}>Reviews</a>
              <a href="/features" className={`nav ${currentPath === "/features" ? "active" : ""}`}>Features</a>
            </div>
            <div className="sm:hidden flex justify-end">
              <button onClick={handleIsOpen} className={`transition-all ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                <svg
                  fill="#ffffff"
                  viewBox="0 0 32 32"
                  enableBackground="new 0 0 32 32"
                  id="Glyph"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  className="w-10 h-10"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16,26c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2s2,0.896,2,2v16C18,25.104,17.104,26,16,26z"
                      id="XMLID_298_"
                    ></path>
                    <path
                      d="M24,26c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2s2,0.896,2,2v16C26,25.104,25.104,26,24,26z"
                      id="XMLID_310_"
                    ></path>
                    <path
                      d="M8,26c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2s2,0.896,2,2v16C10,25.104,9.104,26,8,26z"
                      id="XMLID_312_"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`relative z-20 max-w-full bg-black/50 text-[#101010] flex font-satoshi justify-between px-10 py-4 sm:hidden transition-transform ${isOpen ? "translate-y-0":"-translate-y-[56px]"} `}>
        <a href="/" className="nav">Home</a>
        <a href="/reviews" className="nav">Reviews</a>
        <a href="/features" className="nav">Features</a>
      </div>
    </section>
  );
}

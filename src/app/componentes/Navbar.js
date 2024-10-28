'use client'
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md md:hidden"
        onClick={toggleNav}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <nav
        className={`fixed left-0 top-0 h-full bg-gray-800 shadow-lg p-6 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:block`}
      >
        <h2 className="text-white text-2xl font-bold mb-6">Blog Grupo 3</h2>
        <ul className="flex flex-col space-y-4">
          {[
            { href: "#introduccion", text: "Introducción" },
            { href: "#historia", text: "Historia" },
            { href: "#detalle", text: "Detalle" },
            { href: "#comparativo", text: "Cuadro Comparativo" },
            { href: "#video", text: "Video" },
            { href: "#conclusiones", text: "Conclusiones" },
            { href: "#referencias", text: "Referencias" },
            { href: "#grupo", text: "Información del Grupo" },
          ].map(({ href, text }) => (
            <li key={href}>
              <Link href={href}>
                <div
                  className="bg-transparent hover:bg-gray-700 text-white text-left py-2 px-4 rounded transition duration-300 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

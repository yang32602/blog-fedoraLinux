// components/NavBar.js

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full bg-gray-800 shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105">
      <h2 className="text-white text-2xl font-bold mb-6">Navegación</h2>
      <ul className="flex flex-col space-y-4">
        {[
          { href: "#introduccion", text: "Introducción" },
          { href: "#historia", text: "Historia" },
          { href: "#detalle", text: "Detalle" },
          { href: "#comparativo", text: "Comparativo" },
          { href: "#video", text: "Video" },
          { href: "#conclusiones", text: "Conclusiones" },
          { href: "#referencias", text: "Referencias" },
          { href: "#grupo", text: "Información del Grupo" },
        ].map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>
              <div className="bg-transparent hover:bg-gray-700 text-white text-left py-2 px-4 rounded transition duration-300 w-full">
                {text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

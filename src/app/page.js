import Image from "next/image";
import Link from "next/link";
import NavBar from "./componentes/Navbar";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <header className="text-center py-10 border-b border-gray-200">
        <h1 className="text-5xl font-bold text-blue-700">Fedora Linux: Innovación y Estabilidad en Software Libre</h1>
        <p className="mt-2 text-lg text-gray-600">Un blog que te contara un poquito más sobre este maravilloso sitema operativo.</p>
      </header>

      {/* Navigation */}
      <NavBar />

      {/* Introducción */}
      <section id="introduccion" className="mt-10 mb-8">
        <h2 className="text-3xl font-semibold text-blue-600">Introducción</h2>
        <p className="mt-2 text-gray-700 text-lg">
          Fedora Linux es uno de los sistemas operativos basados en Linux más populares y reconocidos por su enfoque en la innovación, seguridad y contribución a la comunidad de software libre. Desarrollado por el Proyecto Fedora, patrocinado por Red Hat, Fedora es utilizado tanto por desarrolladores como por usuarios avanzados, y es ideal para quienes buscan un sistema operativo moderno, estable y adaptable.
        </p>
      </section>

      {/* Breve Reseña Histórica */}
      <section id="historia" className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600">Historia</h2>
        <p className="mt-2 text-gray-700 text-lg">
          Fedora nació en 2003, como una alternativa libre a Red Hat Linux. Desde sus inicios, ha priorizado la innovación y las actualizaciones constantes, incorporando rápidamente las últimas tecnologías del ecosistema Linux. El Proyecto Fedora ha crecido hasta convertirse en una comunidad activa, respaldada por Red Hat, con diferentes "spins" que ofrecen versiones específicas de Fedora para diferentes necesidades, como servidores, IoT, y sistemas de escritorio.
        </p>
      </section>

      {/* Detalle del Sistema Operativo */}
      <section id="detalle" className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600">Detalles del Sistema Operativo</h2>
        <div className="my-4 text-center">
          <Image src="/fedora.jpg" alt="Interfaz de Fedora" width={600} height={400} className="rounded-lg shadow-md" />
          <p className="mt-2 text-gray-600 italic">Figura No. 1. Fedora 26 workstation</p>
          <p className="mt-2 text-gray-600 italic">Fuente: Marius Nestor (2017), <a href="https://news.softpedia.com/news/fedora-26-linux-officially-released-ships-with-gnome-3-24-and-linux-kernel-4-11-516921.shtml" className="text-blue-500 underline">Fedora workstation</a></p>
        </div>

        <h3 className="text-xl font-medium text-gray-800">Requerimientos del Sistema</h3>
        <p className="mt-2 text-gray-700">Fedora está diseñado para funcionar en una amplia variedad de hardware. Aquí están los requerimientos básicos:</p>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li>Procesador: Intel o AMD de 64 bits</li>
          <li>RAM: 2 GB (mínimo), 4 GB (recomendado)</li>
          <li>Espacio en disco: 20 GB (mínimo), 50 GB (recomendado)</li>
          <li>Tarjeta gráfica: soporte para gráficos básicos o aceleración 3D.</li>
        </ul>
      </section>

      {/* Cuadro Comparativo */}
      <section id="comparativo" className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600">Cuadro comparando con otros OS</h2>
        <table className="w-full mt-4 border-collapse border border-gray-300 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Características</th>
              <th className="border border-gray-300 px-4 py-2">Fedora</th>
              <th className="border border-gray-300 px-4 py-2">Ubuntu</th>
              <th className="border border-gray-300 px-4 py-2">Windows 11</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Frecuencia de actualizaciones</td>
              <td className="border border-gray-300 px-4 py-2">Cada 6 meses</td>
              <td className="border border-gray-300 px-4 py-2">Cada 6 meses (LTS cada 2 años)</td>
              <td className="border border-gray-300 px-4 py-2">Cada 6 meses</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Estabilidad</td>
              <td className="border border-gray-300 px-4 py-2">Alta, ideal para desarrollo</td>
              <td className="border border-gray-300 px-4 py-2">Alta, enfocado en usuarios finales</td>
              <td className="border border-gray-300 px-4 py-2">Alta, versátil para distintos usuarios</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Ventajas</td>
              <td className="border border-gray-300 px-4 py-2">Últimas tecnologías, excelente para desarrolladores</td>
              <td className="border border-gray-300 px-4 py-2">Amigable, fácil para nuevos usuarios</td>
              <td className="border border-gray-300 px-4 py-2">Amplia comunidad, soporte de Microsoft</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Desventajas</td>
              <td className="border border-gray-300 px-4 py-2">Requiere actualización frecuente</td>
              <td className="border border-gray-300 px-4 py-2">Actualización menos frecuente, menos innovador</td>
              <td className="border border-gray-300 px-4 py-2">Requiere más recursos, versiones pueden ser pesadas</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Video */}
      <section id="video" className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600">Video Ilustrativo</h2>
        <div className="mt-4 h-96">
          <iframe className="w-full h-full rounded-lg shadow-md" src="https://www.youtube.com/embed/K3t9ZWIac7k" title="Introducción a Fedora Linux" allowFullScreen></iframe>
        </div>
        <p className="mt-2 text-gray-600">A quick look at Fedora Linux</p>
        <p className="text-gray-500 text-sm">Fuente: <a href="https://www.youtube.com/watch?v=K3t9ZWIac7k" className="text-blue-500 underline">Video de origen</a></p>
      </section>

      {/* Hipervínculos */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600">Hipervínculos Relacionados</h2>
        <ul className="list-disc pl-6 mt-2">
          <li><a href="https://getfedora.org/" className="text-blue-500 underline">Página oficial de Fedora</a></li>
          <li><a href="https://docs.fedoraproject.org/" className="text-blue-500 underline">Documentación de Fedora</a></li>
        </ul>
      </section>

      {/* Conclusiones */}
      <section id="conclusiones" className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600">Conclusiones</h2>
        <p className="mt-2 text-gray-700 text-lg">
          Fedora Linux es una excelente opción para usuarios avanzados y desarrolladores que buscan una experiencia de Linux innovadora. Su compromiso con la última tecnología y la colaboración de la comunidad lo hacen un sistema operativo de referencia en el mundo del software libre.
        </p>
      </section>

      {/* Referencias */}
      <section id="referencias">
        <h2 className="text-3xl font-semibold text-blue-600">Referencias</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li>Fedora Project. (n.d.). <a href="https://getfedora.org/" className="text-blue-500 underline">Fedora Official Website</a>.</li>
          <li>Wikipedia. (2024). <a href="https://es.wikipedia.org/wiki/Fedora" className="text-blue-500 underline">Fedora (sistema operativo)</a>.</li>
          <li>Linux Journal. (2024). <a href="https://www.linuxjournal.com/" className="text-blue-500 underline">Linux Journal</a>.</li>
        </ul>
      </section>


      {/*Información del Grupo */}
      <section id="grupo" className="mb-8 mt-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">Información del Grupo</h2>
          <p className="mt-2 text-gray-700 text-lg">Profesor:</p>
          <p className="mt-2 text-gray-700 text-lg"><strong>Isaac Esquivel</strong></p>
          <p className="mt-2 text-gray-700 text-lg"><strong>Universidad Tecnológica de Panama</strong></p>
          <p className="mt-2 text-gray-700 text-lg"><strong>Facultad de Sistema Computacionales</strong></p>
          <p className="mt-2 text-gray-700 text-lg"><strong>Departamento de Sistemas</strong></p>
          <p className="mt-2 text-gray-700 text-lg"><strong>Licenciatura en Desarrollo de Software</strong></p>
          <p className="mt-2 text-gray-700 text-lg"><strong>Grupo 3</strong></p> <br/>

        <h2 className="text-3xl font-semibold text-blue-600">Integrantes</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <Image src="/freddy.jpeg" alt="Foto de integrante 1" width={150} height={150} className="rounded-full shadow-md" />
            <h3 className="mt-2 font-medium text-lg">Freddy Pan</h3>
            <p className="text-gray-600">Correo: freddy.pan@utp.ac.pa</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/marconi.jpg" alt="Foto de integrante 2" width={150} height={150} className="rounded-full shadow-md" />
            <h3 className="mt-2 font-medium text-lg">Alessandro Marconi</h3>
            <p className="text-gray-600">Correo: alessandro.marconi@utp.ac.pa</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/Diego.jpeg" alt="Foto de integrante 3" width={150} height={150} className="rounded-full shadow-md" />
            <h3 className="mt-2 font-medium text-lg">Diego Navarro</h3>
            <p className="text-gray-600">Correo: Diego.navarro2@utp.ac.pa</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/ruta/a/imagen4.jpg" alt="Foto de integrante 4" width={150} height={150} className="rounded-full shadow-md" />
            <h3 className="mt-2 font-medium text-lg">Nombre 4</h3>
            <p className="text-gray-600">Correo: nombre4@example.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/ruta/a/imagen4.jpg" alt="Foto de integrante 4" width={150} height={150} className="rounded-full shadow-md" />
            <h3 className="mt-2 font-medium text-lg">Nombre 5</h3>
            <p className="text-gray-600">Correo: nombre4@example.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 mt-10 border-t">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Grupo 3 Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

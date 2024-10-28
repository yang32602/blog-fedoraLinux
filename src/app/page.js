import Image from "next/image";
import Link from "next/link";
import NavBar from "./componentes/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      
      {/* Header */}
      <header className="text-center py-10 border-b border-gray-200">
        <h1 className="text-5xl font-bold text-blue-700">
          Fedora Linux: Innovación y Estabilidad en Software Libre
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Un blog que te contara un poquito más sobre este maravilloso sitema operativo.
        </p>
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
          <Image src="/fedora.jpg" alt="Interfaz de Fedora" width={600} height={400} className="rounded-lg shadow-md mx-auto" />
          <div className="mt-2 text-gray-600 italic">
            <p>Figura No. 1. Fedora 26 workstation</p>
            <p>
              Fuente: Marius Nestor (2017),{' '}
              <a href="https://news.softpedia.com/news/fedora-26-linux-officially-released-ships-with-gnome-3-24-and-linux-kernel-4-11-516921.shtml" className="text-blue-500 underline">
                Fedora workstation
              </a>
            </p>
          </div>
        </div>

        <h3 className="text-xl font-medium text-gray-800">Requerimientos del Sistema</h3>
        <p className="mt-2 text-gray-700">
          Fedora está diseñado para funcionar en una amplia variedad de hardware. Aquí están los requerimientos básicos:
        </p>
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Características</TableHead>
              <TableHead>Fedora</TableHead>
              <TableHead>Ubuntu</TableHead>
              <TableHead>Windows 11</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Frecuencia de actualizaciones</TableCell>
              <TableCell>Cada 6 meses</TableCell>
              <TableCell>Cada 6 meses (LTS cada 2 años)</TableCell>
              <TableCell>Cada 6 meses</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Estabilidad</TableCell>
              <TableCell>Alta, ideal para desarrollo</TableCell>
              <TableCell>Alta, enfocado en usuarios finales</TableCell>
              <TableCell>Alta, versátil para distintos usuarios</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ventajas</TableCell>
              <TableCell>Últimas tecnologías, excelente para desarrolladores</TableCell>
              <TableCell>Amigable, fácil para nuevos usuarios</TableCell>
              <TableCell>Amplia comunidad, soporte de Microsoft</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desventajas</TableCell>
              <TableCell>Requiere actualización frecuente</TableCell>
              <TableCell>Actualización menos frecuente, menos innovador</TableCell>
              <TableCell>Requiere más recursos, versiones pueden ser pesadas</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* Video */}
      <section id="video" className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600">Video Ilustrativo</h2>
        <div className="mt-4 h-96">
          <iframe className="w-full h-full rounded-lg shadow-md" src="https://www.youtube.com/embed/K3t9ZWIac7k" title="Introducción a Fedora Linux" allowFullScreen></iframe>
        </div>
        <div className="text-center">
          <p className="mt-2 text-gray-600">A quick look at Fedora Linux</p>
          <p className="text-gray-500 text-sm">
            Fuente: <a href="https://www.youtube.com/watch?v=K3t9ZWIac7k" className="text-blue-500 underline">Video de origen</a>
          </p>
        </div>
      </section>

      {/* Hipervínculos */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600">Hipervínculos Relacionados</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <a href="https://getfedora.org/" className="text-blue-500 underline">Página oficial de Fedora</a>
          </li>
          <li>
            <a href="https://docs.fedoraproject.org/" className="text-blue-500 underline">Documentación de Fedora</a>
          </li>
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
          <li>
            Fedora Project. (n.d.). <a href="https://getfedora.org/" className="text-blue-500 underline">Fedora Official Website</a>.
          </li>
          <li>
            Wikipedia. (2024). <a href="https://es.wikipedia.org/wiki/Fedora" className="text-blue-500 underline">Fedora (sistema operativo)</a>.
          </li>
          <li>
            Linux Journal. (2024). <a href="https://www.linuxjournal.com/" className="text-blue-500 underline">Linux Journal</a>.
          </li>
        </ul>
      </section>


      {/*Información del Grupo */}
      <section id="grupo" className="mb-8 mt-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">Información del Grupo</h2>
        <div className="mt-2 text-gray-700 text-lg space-y-2 font-bold">
          <p>Profesor: Isaac Esquivel</p>
          <p>Universidad Tecnológica de Panamá</p>
          <p>Facultad de Sistemas Computacionales</p>
          <p>Departamento de Sistemas</p>
          <p>Licenciatura en Desarrollo de Software</p>
          <p>Grupo 3</p>
        </div>


        {/* Integrantes */}
        <h2 className="text-3xl font-semibold text-blue-600">Integrantes</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: "Freddy Pan",
              email: "freddy.pan@utp.ac.pa",
              imageSrc: "/freddy.jpeg",
              alt: "Foto de integrante 1",
            },
            {
              name: "Alessandro Marconi",
              email: "alessandro.marconi@utp.ac.pa",
              imageSrc: "/marconi.jpg",
              alt: "Foto de integrante 2",
            },
            {
              name: "Diego Navarro",
              email: "Diego.navarro2@utp.ac.pa",
              imageSrc: "/Diego.jpeg",
              alt: "Foto de integrante 3",
            },
            {
              name: "Rafael Chung",
              email: "rafael.chung@utp.ac.pa",
              imageSrc: "/Rafael.jpeg",
              alt: "Foto de integrante 4",
            },
            {
              name: "Jaime Rojas",
              email: "Jaime.rojas@utp.ac.pa",
              imageSrc: "/Jaime.jpg",
              alt: "Foto de integrante 5",
            },
          ].map((integrante, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={integrante.imageSrc} alt={integrante.alt} width={150} height={150} className="rounded-full shadow-md" />
              <h3 className="mt-2 font-medium text-lg">{integrante.name}</h3>
              <p className="text-gray-600">Correo: {integrante.email}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 mt-10 border-t">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Grupo 3 Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}

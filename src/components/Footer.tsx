import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-custom-primary-color text-gray-300 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <div>
            <h2 className="text-xl  text-white text-center">
              Asociación Municipal
            </h2>
            <p className="text-sm">
              Cochabamba - Bolivia
              <br />
              quillacollotkd@gmail.com
            </p>
          </div>
          <div>
            <h2 className="text-lg  text-white text-center">
              Desarrollado por
            </h2>
            <ul className=" text-sm">
              <li className="flex items-center space-x-2">
                <span>Amir Barra</span>
                <a
                  href="https://github.com/R4shad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/amir-barra-it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-white" />
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>Beimar Arispe</span>
                <a
                  href="https://github.com/BeimarArispe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/beimar-arispe-arnez-309a242a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className=" border-t mt-2 pt-2 text-center text-sm">
          © 2025 Asociación Municipal de Taekwondo Quillacollo. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer

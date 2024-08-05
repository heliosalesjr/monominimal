// components/Footer.jsx

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo e Direitos Autorais */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold text-white">Monominimal</h1>
          <p className="text-sm">© 2024 Monominimal. Todos os direitos reservados.</p>
        </div>

        {/* Links de Navegação */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
            <FaFacebookF size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

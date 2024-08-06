// components/Card.jsx
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';

export default function Card() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
      {/* Imagem do Card */}
      <div className="relative w-full h-48">
        <img
          src="/postbg.jpg" // Substitua pelo caminho da sua imagem
          alt="Imagem do Card"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">Título do Card</h1>
          <div className="flex items-center space-x-2">
            <FiArrowUpRight className="text-slate-600 text-3xl" />
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Texto curto do card, que fornece uma breve descrição ou informação.
        </p>
        
        {/* Tags */}
        <div className="flex space-x-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
            Tag 1
          </span>
          <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-sm">
            Tag 2
          </span>
        </div>
      </div>
    </div>
  );
}

// components/UI/CustomCard.jsx

import { FiArrowUpRight } from 'react-icons/fi';

export default function CustomCard({ image, title, description, tags }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
      {/* Imagem do Card */}
      <div className="relative w-full h-48">
        <img
          src={image} // Substitua pelo caminho da sua imagem
          alt="Imagem do Card"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4 m-2">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex items-center space-x-2">
            <FiArrowUpRight className="text-slate-600 text-3xl" />
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-accent text-white px-2 py-1 rounded-full text-sm mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

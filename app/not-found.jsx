"use client";
// app/not-found.jsx
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800">
      <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
      <p className="text-lg mb-8 text-center max-w-lg">
        A página que você está tentando acessar não existe. Verifique o endereço ou retorne à página inicial.
      </p>
      <button
        onClick={() => window.location.replace('/')}
        className="flex items-center px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        <FaHome className="mr-2" />
        Página Inicial
      </button>
    </div>
  );
}

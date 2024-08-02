// components/BlogPost.jsx

export default function BlogPost() {
    return (
      <article className="max-w-3xl mx-auto bg-blue-50 p-6 rounded-lg shadow-lg mt-8 my-16">
        {/* Título do Post */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Minimalismo no Design: A Arte da Simplicidade
        </h1>
  
        {/* Subtítulo do Post */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Como o Azul e o Rosa Criam Harmonia
        </h2>
  
        {/* Imagem do Post */}
        <div className="mb-6 image-container">
          <img
            src="./postbg.jpg"
            alt="Exemplo de design minimalista"
            className="w-full h-auto rounded-lg"
          />
        </div>
  
        {/* Texto do Post */}
        <div className="text-slate-800 leading-relaxed space-y-4">
          <p>
            O minimalismo no design é mais do que apenas uma estética; é uma filosofia que preza pela
            simplicidade e eficiência. A ideia é eliminar o excesso e focar no que realmente importa,
            permitindo que os elementos principais brilhem sem distrações. 
          </p>
          <p>
            Quando se trata de cores, o azul e o rosa são uma combinação que pode ser surpreendentemente
            eficaz. O azul, conhecido por sua tranquilidade e serenidade, oferece uma base calma e 
            estabilizadora. Já o rosa, com suas conotações de calor e criatividade, traz um toque de
            energia e vida.
          </p>
  
          {/* Bloco de Citação */}
          <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 max-w-2xl mx-auto py-4">
            "A harmonia entre o azul e o rosa em um design minimalista não é apenas visual, mas emocional.
            Essas cores juntas criam uma atmosfera de calma e inspiração."
          </blockquote>
  
          <p>
            Ao usar essas cores em um design minimalista, é importante manter um equilíbrio. O excesso de
            qualquer uma pode quebrar a harmonia. Em vez disso, pense em como os dois podem complementar 
            um ao outro, destacando diferentes partes do seu design. Experimente com tons suaves para uma
            sensação mais relaxante ou tons vibrantes para mais dinamismo.
          </p>
        </div>
      </article>
    );
  }
  
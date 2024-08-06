// HeroSection.jsx

export default function HeroSection() {
  return (
    <section className="min-h-screen dot-background flex items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="dot-pattern"></div> {/* Fundo pontilhado */}
      <div className="content relative z-10"> {/* Conteúdo */}
        <h1 className="text-5xl font-bold mb-4 text-white text-contrast">
          Monominimal
        </h1>
        <p className="text-lg max-w-xl mx-auto text-white text-contrast">
          Explorando o mundo do minimalismo e da arte, compartilhando ideias e
          inspirações para uma vida mais simples e significativa.
        </p>
      </div>
    </section>
  );
}

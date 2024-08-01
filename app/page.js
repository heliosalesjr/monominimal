import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-graph-paper p-6 rounded-lg shadow-lg max-w-3xl mx-auto m-16">
        <h1 className="text-primary text-4xl">MONOMINIMAL by HELIOSAL</h1>

        <h1 className="text-secondary text-3xl">MONOMINIMAL by HELIOSAL</h1>

        <h1 className="text-tertiary text-2xl">MONOMINIMAL by HELIOSAL</h1>

      </div>

      <section className="section bg-graph-paper text-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Meu Experimento</h1>
        <p className="text-lg mb-6 bg-pink-400">A ideia é criar um design system minimalista e expressivo</p>
        <button className="">Saiba Mais</button>
    </section>
    </>
  );
}

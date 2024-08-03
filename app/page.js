import Navbar from "./components/Navbar";
import GridLayout from "./components/GridLayout";
import BlogPost from "./components/BlogPost";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-graph-paper graph-paper p-6 rounded-lg shadow-lg max-w-3xl mx-auto m-16">
        <h1 className="text-primary text-4xl">MONOMINIMAL by HELIOSAL</h1>

        <h1 className="text-secondary text-3xl">MONOMINIMAL by HELIOSAL</h1>

        <h1 className="text-tertiary text-2xl">MONOMINIMAL by HELIOSAL</h1>

      </div>

      

    <BlogPost />
    <GridLayout />
    </>
  );
}

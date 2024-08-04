import Navbar from "./components/Navbar";
import GridLayout from "./components/GridLayout";
import BlogPost from "./components/BlogPost";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      

    <BlogPost />
    <GridLayout />
    </>
  );
}

import Navbar from "./components/Navbar";
import GridLayout from "./components/GridLayout";
import BlogPost from "./components/BlogPost";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import CardList from "./components/CardList";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <HeroSection />

      <CardList />

    <BlogPost />
    <GridLayout />
    <Footer />
    </>
  );
}

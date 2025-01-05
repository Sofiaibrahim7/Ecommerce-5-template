import BlueHeader from "./components/blue-header";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import GreenDiv from "./components/green-div";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Whitediv from "./components/white-dic";
import FeaturedPosts from "./components/F eaturedPosts";
// import About from './components/About';
// import Contact from "./components/Contact";
import Footer from "./components/footer";
import AboutPage from "@/app/components/about/page";
import Contact from "@/app/components/contact/page";

export default function Home(){
  return( 
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <FeaturedPosts/>
      <AboutPage/>
      <Contact/>
      <Footer/>
           
    </div>
  )
}

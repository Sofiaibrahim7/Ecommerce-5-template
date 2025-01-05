import BlueHeader from "./components/blue-header";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import GreenDiv from "./components/green-div";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Whitediv from "./components/Whitediv";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/footer";


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
      <Footer/>
           
    </div>
  )
}

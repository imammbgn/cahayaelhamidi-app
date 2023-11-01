import { useRef } from "react"
import FaqComponent from "../components/Faqs/faq"
import Footer from "../components/Footer/footer"
import { CarouselProduct } from "../components/Hero/Carousel"
import { NavbarDefault } from "../components/Navbar"
import Product from "../components/Product/product"

const Home = () => {
    const targetRef = useRef(null)
    const scrollToTargetAdjusted = () => {
      const element = targetRef.current
      const headerOffset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
      window.scrollTo({
           top: offsetPosition,
           behavior: "smooth"
      });
  }

    
    return (
        <>
        <NavbarDefault onclick={scrollToTargetAdjusted}/>
        <CarouselProduct onclick={scrollToTargetAdjusted}/>
        <Product scroll={targetRef}/>
        <FaqComponent />
        <Footer />
        </>
        
    )
}

export default Home
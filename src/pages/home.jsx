import Footer from "../components/Footer/footer"
import { CarouselProduct } from "../components/Hero/Carousel"
import { NavbarDefault } from "../components/Navbar"
import Product from "../components/Product/product"

const Home = () => {
    return (
        <>
        <NavbarDefault />
        <CarouselProduct />
        <Product />
        <Footer />
        </>
        
    )
}

export default Home
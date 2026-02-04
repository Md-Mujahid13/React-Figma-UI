import Hero from "../component/home-hero-section-1st";
import Gridsection from "../component/home-brouser-by-catagory";
import Cards from "../component/home-cards";
import Container from "../component/home-container-image";
import Pngbar from "../component/home-pngbar";
import Hero2 from "../component/home-hero-container-informaiton";
import Slider from "../component/-slider";
import Hero3 from "../component/home-card-and-image-section";
import Hero4 from "../component/home-hero4";
import Bottombar from "../component/home-bottom-bar";
const Home=()=>{
    return(
        <>
        <Hero/>
        <Gridsection/>
        <Cards/>
        <Container/>
        <Pngbar/>
        <Hero2/>
        <Slider/>
        <Hero3/>
        <Hero4/>
        <Bottombar/>
        </>
    )
}
export default Home;
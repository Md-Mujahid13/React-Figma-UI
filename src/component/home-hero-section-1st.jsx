import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
    return (
        <>
            <div className="home-hero-section">
                <div className="book-png"></div>
                <div className="arrow-png"></div>
                <div className="dotted-png"></div>
                <div className="hero-button"><button>CATEGOTIES</button></div>
                <div className="home-hero-text-main">
                    
                    <div className="home-hero-background-button"></div>
                    <div className="home-hero-logos-text-png">
                        
                        <p>200+</p><span>instructor</span>
                        <div className="hero-logos-png"></div>
                    </div>
                    <div className="home-hero-text">
                        <p>WELCOME EDUNITY ONLINE COURSES</p>
                        <h1>Achieving Your Dreams Through Education</h1>
                        <span>We are experienced in educationl platform and skilled strategies
                            for the success of our online learning.</span>
                    </div>
                    <div className="home-hero-text-button"><button type="button"><div className="hero-button-text">Find Courses</div><div className="button-arrow"><FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></div></button></div>
                </div>
                <div className="home-hero-img"></div>
            </div>
        </>
    )
}
export default Hero;
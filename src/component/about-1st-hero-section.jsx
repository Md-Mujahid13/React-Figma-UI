import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About1stHeroSection = () => {
    return (
        <>
            <div className="about-us-1st-hero-section-main-body">
                <div className="aboutus-1st-hero-style-1-wrap">
                    <div className="aboutus-1st-hero-style-1">
                        <div className="aboutus-1st-hero-style-1-svg-1"></div>
                        <div className="aboutus-1st-hero-style-1-svg-2"></div>
                        <div className="aboutus-1st-hero-style-1-svg-4"></div>
                        <div className="aboutus-1st-hero-style--1-svg-3"></div>
                    </div>
                    <div className="aboutus-1st-hero-style-2">
                        <div className="aboutus-1st-hero-style-2-wrap">
                            <div className="aboutus-1st-hero-style-2-header-top">
                                <div className="aboutus-1st-hero-style-2-header-top-logo"></div><span> about us</span>
                            </div>
                            <div className="aboutus-1st-hero-style-2-text-1"><span>Benefit from our online</span></div>
                            <div className="aboutus-1st-hero-style-2-text-2"><span>Pearning expertise earn</span></div>
                            <div className="aboutus-1st-hero-style-2-text-3"><span>Professional</span></div>
                            <div className="aboutus-1st-hero-style-2-pragraph">
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore.</span>
                            </div>
                            <div className="aboutus-1st-hero-style-2-flex-1-and-2">
                                <div className="aboutus-1st-hero-style-2-flex-1">
                                    <div className="aboutus-1st-hero-style-2-flex-1-text-1"><span>OUR MISSION:</span></div>
                                    <div className="aboutus-1st-hero-style-2-flex-1-text-2"><span>Suspendisse ultrice gravida dictum
                                        fusce placerat ultricies integer quis
                                        auctor elit sed vulputate mi sit.</span></div>
                                        <div className="aboutus-1st-hero-style-2-flex-1-button">
                                            <button type="button">Admission open <div className="Admission-open-arrow"><FontAwesomeIcon icon={faArrowRightLong} size="xl"></FontAwesomeIcon></div></button>
                                        </div>
                                </div>
                                 <div className="aboutus-1st-hero-style-2-flex-1">
                                    <div className="aboutus-1st-hero-style-2-flex-1-text-1"><span>OUR VISSION:</span></div>
                                    <div className="aboutus-1st-hero-style-2-flex-1-text-2"><span>Suspendisse ultrice gravida dictum
                                        fusce placerat ultricies integer quis
                                        auctor elit sed vulputate mi sit.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About1stHeroSection;
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
const Container = () => {
    return (
        <>
            <div className="container-main-body">
                <div className="container-images-png">
                    <div className="container-image-1"></div>
                    <div className="container-image-2"></div>
                    <div className="container-image-3"></div>
                    <div className="container-png-1"></div>
                    <div className="container-cercyle-1">
                        <h1>8+</h1>
                        <span>Years Of</span>
                        <p>Experiences</p>
                    </div>
                </div>
                <div className="container-text">
                    <div className="container-fpng"></div>  
                    <div className="container-text-child">
                          <button type="button" className="container-background-button">Our about us</button>
                        <div className="container-h1">
                            <div className="container-svg"></div>
                            <div className="containertext-child">
                                <h1>Learn & Grow Your Skills</h1>
                            <h1>From Anywhere</h1>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris..</span>
                            </div>
                            
                        </div>
                        <div className="container-p1">
                            <h6>Flexible classNamees</h6>
                            <span>Suspendisse ultrice gravida dictum
                                fusce placerat ultricies integer quis
                                auctor elit sed vulputate mi sit.</span>
                                <div className="container-button">
                                     <button type="button" >Load More <div className="header-button-arrow-icone"><FontAwesomeIcon icon={faArrowRightLong} size="2x"/></div></button> 
                                </div>
                        </div>
                        <div className="container-p2">
                             <h6>Flexible classNamees</h6>
                            <span>Suspendisse ultrice gravida dictum
                                fusce placerat ultricies integer quis
                                auctor elit sed vulputate mi sit.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Container;
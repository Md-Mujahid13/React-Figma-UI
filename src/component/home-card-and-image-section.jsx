import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero3 = () => {
    const data = [
        {
            num: '1'
        },
        {
            num: '2'
        },
        {
            num: '3'
        },
        {
            num: '4'
        }
    ]
    return (
        <>
            <div className="hero3-main-body">
                <div className="hero3-section-main-body">
                <div className="hero3-text-section-main-body">
                    <div className="hero3-dezine-svg-1"></div>
                    <div className="hero3-dezine-svg-2"></div>
                    <div className="hero3-dezine-svg-3"></div>
                    <div className="hero3-text-section">
                        <div className="hero3-top-button">
                            <button type="button">OUR INSTRUCTOR</button>
                        </div>
                        <div className="hero3-text">
                            <div className="hero3-text-1">Meet Our Expert</div>
                            <div className="hero3-text-2">Instructor</div>
                        </div>
                        <div className="hero3-paregraph">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris..</span>
                        </div>
                        <div className="hero3-two-buttons">
                            <button type="button" className="hero3-button-1">Contact us <div className="header-button-arrow-icone"><FontAwesomeIcon icon={faArrowRightLong} size="2x"/></div></button>
                            <button type="button" className="hero3-button-2">Find courses<div className="hero3-button-arrow-icone"><FontAwesomeIcon icon={faArrowRightLong} size="2x"/></div></button>
                        </div>
                    </div>
                </div>
                <div className="hero3-images-section-main-body">
                    {data.map((value,index) => (
                        <div className="hero3-section-image-1" key={index}><img src={`../assets/hero3-box-image-${value.num}.jpg`} style={{ height: '100%', width: '100%' }} /><div className="hero3-share-svg"></div><img src={`../assets/hero3-box-name-palate-${value.num}.jpg`} style={{ height: '74px', width: '315px', backgroundColor: 'white', position: 'absolute', bottom: '20px', left: '20px', borderRadius: '5px' }} /></div>
                    ))}

                </div>
                </div>
            </div>
        </>
    )
}   
export default Hero3;
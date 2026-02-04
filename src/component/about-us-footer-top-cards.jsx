import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutCards = () => {
    return (
        <>
            <div className="About-use-cards-main-body">
                <div className="About-use-cards-wrap">
                    <div className="About-use-cards-text-top">
                        <div className="About-use-cards-text-top-div-1">
                            <div className="About-use-cards-text-top-div-1-text-1"><div className="About-use-cards-text-top-div-1-text-1-logo"></div><span>Teacher</span></div>
                            <div className="About-use-cards-text-top-div-1-text-2"><span>Meet Our Instructor</span></div>
                        </div>
                        <div className="About-use-cards-text-top-div-2">
                            <div className="About-use-cards-text-top-div-2-cyrcel-1"><FontAwesomeIcon icon={faArrowLeftLong} size="xl"></FontAwesomeIcon></div>
                            <div className="About-use-cards-text-top-div-2-cyrcel-2"><FontAwesomeIcon icon={faArrowRightLong} size="xl"></FontAwesomeIcon></div>
                        </div>
                    </div>
                    <div className="About-use-cards-4-wrap">
                        <div className="About-use-card-1">
                            <div className="About-use-card-1-image-1">
                                <div className="About-use-card-1-image-logo"></div>
                            </div>
                            <div className="About-use-card-1-text">
                                <div className="About-use-card-1-text-1"><span>Micheal Hammond</span></div>
                                <div className="About-use-card-1-text-2"><span>Teacher</span></div>
                            </div>
                        </div>

                          <div className="About-use-card-1">
                            <div className="About-use-card-1-image-2">
                                <div className="About-use-card-1-image-logo"></div>
                            </div>
                            <div className="About-use-card-1-text">
                                <div className="About-use-card-1-text-1"><span>Cheryl Curry</span></div>
                                <div className="About-use-card-1-text-2"><span>Teacher</span></div>
                            </div>
                        </div>

                          <div className="About-use-card-1">
                            <div className="About-use-card-1-image-3">
                                <div className="About-use-card-1-image-logo"></div>
                            </div>
                            <div className="About-use-card-1-text">
                                <div className="About-use-card-1-text-1"><span>Willie Diaz</span></div>
                                <div className="About-use-card-1-text-2"><span>Teacher</span></div>
                            </div>
                        </div>

                          <div className="About-use-card-1">
                            <div className="About-use-card-1-image-4">
                                <div className="About-use-card-1-image-logo"></div>
                            </div>
                            <div className="About-use-card-1-text">
                                <div className="About-use-card-1-text-1"><span>Jimmy Sifuentes</span></div>
                                <div className="About-use-card-1-text-2"><span>Teacher</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutCards;
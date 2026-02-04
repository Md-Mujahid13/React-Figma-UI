import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero4 = () => {
    const data = [
        {
            title:'14 June 2023',
            num: '1',
            number:'1'
        },
        {
            title:'21 April 2024',
            num: '2',
            number:'2'
        },
        {
            title:'14 June 2023',
            num: '3',
        }
    ]
    const data1=[
        {
            number:'1'
        },{
            number:'2'
        }
    ]
    return (
        <>
            <div className="hero4-main-body">
                <div className="hero4-section-1">
                    <div className="hero4-grid-svg1"></div>
                    <div className="hero4-grid-svg2"></div>
                    <div className="hero4-grid-svg3"></div>
                    <div className="hero4-grid-svg4"></div>
                    <div className="hero4-grid-svg5"></div>
                    <div className="hero4-image-section">
                        <button type="button">Choose your career</button>
                        <span>Discover Your Gain</span>
                    </div>
                    <div className="hero4-box-section">
                        {data1.map((value,index) => (
                            <div className={`hero4-box-${value.number}`} key={index}>
                                <div className={`hero4-girl-svg${value.number}`}></div>
                                <div className="hero4-box-1-content">
                                    <div className="hero4-box-1-content-wrap">

                                        <div className="hero4-content-1"><span>Start from today</span></div>
                                        <div className="hero4-content-2"><span>Join our training courses &</span></div>
                                        <div className="hero4-content-3"><span>Build your skill.</span></div>
                                        <div className="hero4-content-4"><button type="button" className={`hero4-button-${value.number}`}>Join now<div className={`hero4-button-arrow-icone-${value.number}`}><FontAwesomeIcon icon={faArrowRightLong} size="2x" /></div></button></div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="hero4-section-2">
                    <div className="hero-section-2-text-content">
                        <button type="button" className="hero4-section-2-button">Blog Post</button>
                        <div className="hero-section-2-text"><span>Most Popular Post.</span><button type="button" className="hero4-dezine-button">All blog post<div className="header-button-arrow-icone"><FontAwesomeIcon icon={faArrowRightLong} size="2x" /></div></button></div>
                    </div>
                    <div className="hero4-section-2-grid-contant">
                        {data.map((value,index)=>(
                            <div className="hero4-sction-2-grid-1" key={index}>
                            <div className="hero4-grid-1-image"><img src={`./assets/hero4-grid-top-image-${value.num}.png`} style={{ width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} /></div>
                            <div className="hero4-grid-1-text">
                                <div className="hero4-grid-1-text-1"><div className="hero4-massage-simbol-1"><img src="./assets/hero4grid-massage-simbol-2.png" style={{ width: '13.48px', height: '15px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} /><span>{value.title}</span></div><div className="hero4-massage-simbol-2"><img src="./assets/hero4grid-massage-simbol-1.png" style={{ width: '13.48px', height: '15px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} /><span>Comment (06)</span></div></div>
                                <div className="hero4-grid-1-text-2">
                                    <span>velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat
                                        cupidatat</span>
                                </div>
                                <div className="hero4-grid-1-text-3">
                                    <button type="button" className="hero4-grid-1-dezine-button">Read More<div className="hero4-grid-dezine-button-arrow-icone"><FontAwesomeIcon icon={faArrowRightLong} size="2x" /></div></button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero4;
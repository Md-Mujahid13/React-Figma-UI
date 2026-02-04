import AboutHeader from "../component/about-header";
import About1stHeroSection from "../component/about-1st-hero-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import AboutCards from "../component/about-us-footer-top-cards";
const AboutUs=()=>{
     const data = [
        {
            title1: '3K+',
            title2: 'Successfully Trained',
            num: '1'
        },
        {
            title1: '15K+',
            title2: 'Classes Completed',
            num: '2'
        },
        {
            title1: '97K+',
            title2: 'Satisfaction Rate',
            num: '3'
        },
        {
            title1: '102K+',
            title2: 'Students Community',
            num: '4'
        }
    ]
    const data2=[
        {
            title1:'Kathy Sullivan',
            title2:'CEO at ordian it'
        },
        {
           title1:'Elsie Stroud',
           title2:'CEO at Edwards'
        },
         {
           title1:'Kathy Sullivan',
           title2:'CEO at ordian it'
        }
    ]
      const data3=[
        {
            title1:'It Statistics Data Science And',
            title2:'Business Analysis',
            text:'Samantha',
            number:'7',
            num:'1'
        },
        {
           title1:'It Statistics Data Science And',
            title2:'Business Analysis',
            text:'Charles',
            number:'8',
            num:'2'
        },
        {
            title1:'It Statistics Data Science And',
            title2:'Business Analysis',
            text:'Morgan',
            number:'9',
            num:'3'
        },
    ]
    return(
        <>
        <AboutHeader title1="About Us" title2="About Us"/>
        <About1stHeroSection/>

         <div className="white-space"></div>
            <div className="slider-main-body">
                <div className="slider-top-bar-1">
                    {data.map((value,index) => (
                        <div className="logo-and-text" key={index}>
                            <img src={`../assets/slider-top-logo-${value.num}.png`} style={{ height: '75px', width: '75px', position: 'relative' }} />
                            <div className="slider-top-text">
                                <div className="slider-top-text-1"><span>{value.title1}</span></div>
                                <div className="slider-top-text-2"><span>{value.title2}</span></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider-text-and-box">
                    <div className="slider-text-box">
                        <button type="button">testimonial</button>
                        <div className="slider-text-box-1"><h1>Creating A Community Of</h1></div>
                        <div className="slider-text-box-2"><h1>Life Long Learners.</h1></div>
                    </div>
                    <div className="slider-box">
                        {data2.map((value,index)=>(
                            <div className="slider-box-1" key={index}>
                                <div className="slider-box-svg-1"></div>
                            <div className="slider-box-text">
                                <span>“Lorem ipsum dolor sit amet, elit, sed
                                    do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Orci
                                    nulla pellentesque dignissim enim.
                                    Amet consectetur adipiscing”</span>
                            </div>
                            <div className="slider-box-small-text">
                                <div className="slider-box-small-text-1"><span>{value.title1}</span></div>
                                <div className="slider-box-small-text-2"><span>{value.title2}</span></div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
             <div className="cards-main-body-1">
            <div className="card-heading-cards">
                <div className="card-heading">
                    <div className="card-text">
                    <h1>Creating A Community Of</h1>
                    <h1>Life Long Learners.</h1>
                    </div>
                    <button type="button" className="button-top-1-2-3">OUR COURSES</button>
                     <button type="button" className="header-button-1-2-3">Explore courses<FontAwesomeIcon icon={faArrowRightLong} size="2x"/></button>
                </div>
                <div className="cards-1">
                    {data3.map((value,index)=>(
                        <div className="card" key={index}>
                        <div className="card-back-svg"></div>
                        <img  src={`./assets/slider-top-logo-${value.number}.png`}style={{height:'250px',width:'100%',marginBottom:'20px'}}/>
                        <div className="rating-svg">
                            <div className="svg-text">
                                <div className="rating-png"></div>
                                <span>4.5k</span>
                            </div>
                            <div className="rating-svg-text">
                                <span>$50.00</span>
                            </div>
                        </div>
                        <div className="card-h1">
                            <h1>{value.title1}</h1>
                            <h3>{value.title2}</h3>
                        </div>
                        <div className="card-image-logo"></div>
                        <div className="card-button-image-logo">
                            <div className="card-logo-images">
                                <img src={`./assets/${value.num}logo.png`}style={{height:"44px",width:'44px',borderRadius:'50%'}}/>
                                <span>{value.text}</span>
                            </div>
                            
                            <button type="submit" >Enroll<FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
        <AboutCards/>
        </>
    )
}
export default AboutUs;
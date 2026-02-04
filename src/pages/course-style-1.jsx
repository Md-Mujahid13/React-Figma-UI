import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import AboutHeader from "../component/about-header";
const Coursestyle1=()=>{
        const data=[
        {
            title1:'It Statistics Data Science And',
            title2:'Business Analysis',
            text:'Samantha',
            number:'1'
        },
        {
            title1:'Bilginer Adobe Illustrator For',
            title2:'Graphic Design',
            text:'Charles',
            number:'2'
        },
        {
            title1:'Starting SEO as your Home Based',
            title2:'Business',
            text:'Morgan',
            number:'3'
        },
        {
            title1:'Bilginer Adobe Illustrator For',
            title2:'Graphic Design',
            text:'Brian Brewer',
            number:'4'
        },
        {
            title1:'It Statistics Data Science And',
            title2:'Business Analysis',
            text:'Rodriquez',
            number:'5'
        },
        {
            title1:'Starting SEO as your Home Based',
            title2:'Business',
            text:'Morgan',
            number:'6'
        },
    ]
    return(
        <>
        <AboutHeader title1="Course style 1" title2="Course"/>


        
         <div className="cards-main-body">
            <div className="card-heading-cards">
                <div className="card-heading">
                    <div className="card-text">
                    <h1>Edunity Course Student Can</h1>
                    <h1>join with us.</h1>
                    </div>
                    <div className="svg"></div>
                    <button type="button" className="button-top">Top Popular Course</button>
                     <button type="button" className="header-button">Load More Course <div className="header-button-arrow-icone"><FontAwesomeIcon icon={faArrowRightLong} size="2x"/></div></button>
                </div>
                <div className="cards">
                    {data.map((value,index)=>(
                        <div className="card" key={index}>
                        <div className="card-back-svg"></div>
                        <img  src={`./assets/cardimg${value.number}.png`}style={{height:'250px',width:'100%',marginBottom:'20px'}}/>
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
                                <img src={`./assets/${value.number}logo.png`}style={{height:"44px",width:'44px',borderRadius:'50%'}}/>
                                <span>{value.text}</span>
                            </div>
                            
                            <button type="submit" >Enroll<FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Coursestyle1;
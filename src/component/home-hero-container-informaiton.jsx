const Hero2 = () => {
    const data=[
        {
            title:'World className Trainers'
        },
        {
            title:'Easy Learning'
        },
        {
            title:'Flexible'
        },
        {
            title:'Affordable Price'
        }
    ]
    return (
        <>
            <div className="hero2-main-body">
                <div className="hero2-section-body">
                    <div className="hero2-text-section">
                        <button type="button">Why Choose Us</button>
                        <div className="hero2-svg-wave"></div>
                        <div className="hero2-text">
                            <div className="hero2-text1">
                                <div className="hero2-svg-roll"></div>
                       
                                <h1>Creating A Community Of</h1>
                                <h2>Life Long Learners.</h2>
                            </div>
                            <div className="hero2-text2">
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris..</span>
                            </div>

                            <div className="hero2-grids">
                                {data.map((value,index)=>(
                                     <div className="hero2-grid-1" key={index}>
                                    <div className="hero-text-logo">
                                         <div className="hero2-right-png-logo"></div><label>{value.title}</label>
                                    </div>
                                    <span>Gravida dictum fusce
                                        placerat ultricies integer</span>
                                </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="hero2-img-section">
                        <div className="hero2-img-svg-dotted"></div>
                        <div className="hero2-img">
                            <div className="hero2-img-svg-traingle"></div>
                            <div className="hero2-img-svg-traingle2"></div>
                            
                            <div className="hero2-img-background-image"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero2;
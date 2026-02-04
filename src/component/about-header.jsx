const AboutHeader=({title1,title2})=>{
    return(
        <>
        <div className="About-hero-section">
            <div className="about-section-svg-1"></div>
            <div className="about-section-svg-2"></div>
            <div className="about-section-svg-3"></div>
            <div className="about-section-svg-4"></div> 
            <div className="about-hero-text-wrap">
                <div className="about-hero-text-1">{title1}</div>
                <div className="about-hero-text-2">
                    <span>Home</span><h1>//</h1><span>{title2}</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default AboutHeader;
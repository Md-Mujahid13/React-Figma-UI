const Slider = () => {
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
    return (
        <>
            <div className="white-space"></div>
            <div className="slider-main-body">
                <div className="slider-top-bar">
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
        </>
    )
}
export default Slider;
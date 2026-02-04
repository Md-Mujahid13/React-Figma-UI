const EventCards = () => {
    const data=[
        {
            date:'08',
            month:'October',
            number:'1'
        },
        {
            date:'05',
            month:'October',
            number:'2'
        },
        {
            date:'25',
            month:'April',
            number:'3'
        },
         {
            date:'08',
            month:'October',
            number:'1'
        },
        {
            date:'05',
            month:'October',
            number:'2'
        },
        {
            date:'25',
            month:'April',
            number:'3'
        }
       
    ]
    return (
        <>
            <div className="event-card-main-body">
                <div className="event-card-wrap">


                    {data.map((value,index)=>(
                        <div className="event-card-1" key={index}>
                        <img src={`./assets/event-cards-background-images-${value.number}.jpg`} style={{ height: '255.80999755859375px', width: '424px' }} />
                        <div className="event-card-1-content">
                            <div className="event-cards-yellow-svg"><div className="event-cards-yellow-svgtext-1"><span>{value.date}</span></div><h1>{value.month}</h1></div>
                            <div className="event-card-1-content-wrap">
                                <div className="event-card-1-content-text-1">
                                    <span>print, and publishing industries
                                        for previewing</span>
                                </div>
                                <div className="event-card-1-content-text-2">
                                    <span>Lorem ipsum dolor sit amet, consectetur
                                        elit, sed doeiusmod tempor</span>
                                </div>
                                <div className="event-card-1-content-logo-text">
                                    <div className="event-card-1-content-logo-text-content-1"><div className="event-card-1-content-logo-text-content-1-watch-logo"></div><span>Time: 11:00am 03;00pm</span></div>
                                    <div className="event-card-1-content-logo-text-content-2"><div className="event-card-1-content-logo-text-content-1-watch-logo-2"></div><span>Location: USA</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    ))}

                </div>
            </div>
        </>
    )
}
export default EventCards;
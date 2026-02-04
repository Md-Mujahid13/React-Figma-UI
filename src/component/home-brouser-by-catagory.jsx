const Gridsection = () => {
    const data=[
        {
            title:'Business Management',
            color:'#EAF6FF',
            tcolor:'#0E2A46'
        },
        {
            title:'Arts & Design',
            color:'#FEF2F4',
            tcolor:'#0E2A46'
        },
        {
            title:'Personal Development',
            color:'#EEFBF5',
            tcolor:'#0E2A46'
        },
        {
            title:'UI/UX Design',
            color:'#FFFAEF',
            tcolor:'#0E2A46'
        },
        {
            title:'Graphic Design',
            color:'#F7F3FF',
            tcolor:'#0E2A46'
        },
        {
            title:'Digital Marketing',
            color:'#FFF0F8',
            tcolor:'#0E2A46'
        },
        {
            title:'Exclusive man',
            color:'#F3F4FE',
            tcolor:'#0E2A46'
        },
        {
            title:'Product Design',
            color:'#FFF7EF',
            tcolor:'#0E2A46'
        },
        {
            title:'Video & Photography',
            color:'#F1FBFF',
            tcolor:'#0E2A46'
        },
    ]
    return (
        <>
            <div className="grid-section-main-body">
                <div className="grid-section">
                    {data.map((value,index)=>(
                        <div className="grid1" style={{backgroundColor:value.color,color:value.tcolor,fontFamily:'Epilogue'}} key={index}>
                        <img style={{height:'80px',width:'80px',borderRadius:'50%'}} src={`./assets/${index}.jpg.png`}></img>
                        <span>{value.title}</span>
                    </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}
export default Gridsection;
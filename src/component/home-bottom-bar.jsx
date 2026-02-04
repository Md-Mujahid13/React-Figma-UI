const Bottombar=()=>{
    return(
        <>
        <div className="bottom-bar-main-body">
            <div className="bottom-bar-main">
                <div className="bottom-bar-main-svg-1"></div>
                <div className="bottom-bar-main-svg-2"></div>
                <div className="bottom-bar-main-svg-3"></div>
                <div className="bottom-bar-main-svg-4"></div>
                <div className="bottom-bar-text">
                    <div className="bottom-bar-text-wrap">
                        <div className="bottom-bar-text-1">
                    <h1>Join Our Newsletter</h1>
                    </div>
                    <div className="bottom-bar-text-2">
                         <span>Subscribe our newsletter to get our latest update & news.</span>
                    </div>
                    </div>
                </div>
                <div className="bottom-bar-button">
                    <div className="bottom-bar-input">
                        <input type="text" placeholder="Enter Your Email"/>
                        <button type="button" className="bottom-bar-black-button">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Bottombar;
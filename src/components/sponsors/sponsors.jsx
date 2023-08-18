import React from "react";
import "./sponsors.css"
const Sponsors=()=>{
    return(
        <section className="spnsors" id="sponsors">
        <h1>Our Sponsors</h1>
        <div className="company-btns">
        <div >
            <a target="_blank" href="https://fresatechnologies.com/" className="company-btn" data-aos="zoom-in"><img src="https://res.cloudinary.com/dcsduqstu/image/upload/v1692282174/blackhawk_puzzpk.png" alt=""/></a>
            <div className="spoName">Blackhawk Network</div>
           
                       
        </div>
        <div>
        <a target="_blank" href="https://tagros.com/" className="company-btn" data-aos="zoom-in"><img src="" alt=""/></a>
            <div className="spoName">Hyundai Motors</div>
        </div>
        </div>
        
    </section>
    )
}
export default Sponsors;
import react from "react";
import logo from "../navbar/static/hack-logo.png"
import "./hero.css"
import "./btn.css"
import Type from "../type/type";
import Countdown from "../timer/timer";
import Chront from "../chrono/chrono";
import About from "../about/about";
import Sponsors from "../sponsors/sponsors";
import { Link } from "react-router-dom";
const Hero=()=>{
    return(
        <div className="hero-cont">
        <section className="hero" id="hero">
        <div className="presents">Department of <span className="ai">Artificial intelligence and Data Science</span> 
        <br/><span className="pr">presents</span></div>
        <img src={logo} alt=""/>
        <div className="sponsors">
            Sponsored by <span className="sp-hwk lineUp">BlackHawk Network</span>
        </div>
    </section>
    <Type dt={["Open to all streams","Food and Accommodation will be provided","24 Hours of creation","24 Hours of fun","Win exciting cash prizes and internship oppurtunities!","Enjoy!"]}/>
    <div className="desc-cont">
    <p className="desc">Bring-out your hidden tech genius in this <span>24</span>  hours hackathon by solving difficult problems faced by the public.</p>
    </div>
    <hr/>
    <div class="countdown-txt">
        <h2>The countdown begins....</h2>
    </div>
    <Countdown/>
    <div className="countdown-txt">
    <h2>
            September 7 - September 8 , 2023
    </h2>
    </div>
    <div className="butn-container">
   <Link to="guidelines"><button class="butn">Register</button></Link>
  </div>
  <hr/>
  <div className="hmc">
  <Chront style={{"padding-left":0,}}/>
  </div>
<About/>
<Sponsors/>
  </div>
    )
}
export default Hero;
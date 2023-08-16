import react from "react";
import logo from "../navbar/static/hack-logo.png"
import "./hero.css"
import "./btn.css"
import Type from "../type/type";
import Countdown from "../timer/timer";
const Hero=()=>{
    return(
        <div className="hero-cont">
        <section className="hero" id="hero">
        <img src={logo} alt=""/>
    </section>
    <Type/>
    <div className="desc-cont">
    <p className="desc">Bring-out your hidden tech genius in this <span>24</span> hours hackathon by solving difficult problems faced by the public.</p>
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
    <button class="butn">Register</button>
  </div>
  <hr/>
</div>
    )
}
export default Hero
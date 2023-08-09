import "./nav.css"
import { Fragment } from "react";
import logo from './static/hack-logo.png'
const Navbar=()=>{
    
    return(
        <Fragment>
        <nav class="header-nav">
        <div class="branding">
            <img src={logo} alt=""/>
            {/* <h1 class="brand-name">Lync Fest</h1> */}
        </div>

        <div class="nav-buttons">
            <a href="#hero" class="nav-btn">Home</a>
            <a href="" class="nav-btn">Schedule</a>
            <a href="#sponsors" class="nav-btn">Problems</a>
            <a href="#about-us" class="nav-btn">Sponsors</a>
            <a href="#footer" class="nav-btn">Guidelines</a>
            <a href="#events" class="nav-btn ghost-btn">Register</a>
        </div>
    
    </nav>

    <div class="nav-buttons-mobile hidden-nav">
        <a href="#hero" class="nav-btn">Home</a>
        <a href="" class="nav-btn">Schedule</a>
        <a href="#sponsors" class="nav-btn">Problems</a>
        <a href="#about-us" class="nav-btn">Sponsors</a>
        <a href="#footer" class="nav-btn">Guidelines</a>
        <a href="#events" class="nav-btn ghost-btn">Register</a>
    </div>

    <div class="hamburger" onClick={(e)=>{
            document.querySelector('.nav-buttons-mobile').classList.toggle('hidden-nav')
            let i=0;
            document.querySelectorAll('.hamburger span').forEach((span)=>{ 
              i+=1; 
              span.classList.toggle(`close-${i}`);
             })
          }
    }>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
    </Fragment>
    )   

}
export default Navbar;
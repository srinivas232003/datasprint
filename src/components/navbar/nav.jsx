import "./nav.css"
import { Fragment } from "react";
import logo from './static/hack-logo.png'
const Navbar=()=>{
    
    return(
        <Fragment>
        <nav className="header-nav">
        <div className="branding">
            <img src={logo} alt=""/>
            {/* <h1 className="brand-name">Lync Fest</h1> */}
        </div>

        <div className="nav-buttons">
            <a href="#hero" className="nav-btn">Home</a>
            <a href="" className="nav-btn">Schedule</a>
            <a href="#sponsors" className="nav-btn">Problems</a>
            <a href="#about-us" className="nav-btn">Sponsors</a>
            <a href="#footer" className="nav-btn">Guidelines</a>
            <a href="#events" className="nav-btn ghost-btn">Register</a>
        </div>
    
    </nav>

    <div className="nav-buttons-mobile hidden-nav">
        <a href="#hero" className="nav-btn">Home</a>
        <a href="" className="nav-btn">Schedule</a>
        <a href="#sponsors" className="nav-btn">Problems</a>
        <a href="#about-us" className="nav-btn">Sponsors</a>
        <a href="#footer" className="nav-btn">Guidelines</a>
        <a href="#events" className="nav-btn ghost-btn">Register</a>
    </div>

    <div className="hamburger" onClick={(e)=>{
            document.querySelector('.nav-buttons-mobile').classList.toggle('hidden-nav')
            let i=0;
            document.querySelectorAll('.hamburger span').forEach((span)=>{ 
              i+=1; 
              span.classList.toggle(`close-${i}`);
             })
          }
    }>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>
    </Fragment>
    )   

}
export default Navbar;
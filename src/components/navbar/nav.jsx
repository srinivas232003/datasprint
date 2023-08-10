import "./nav.css"
import { Fragment } from "react";
import logo from './static/hack-logo.png'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar=()=>{
    
    return(
        <Fragment>
        <nav className="header-nav">
        <div className="branding">
            
            <Link to="/"><img src={logo} alt=""/></Link>
            {/* <h1 className="brand-name">Lync Fest</h1> */}
        </div>

        <div className="nav-buttons">
            <Link to="/" className="nav-btn">Home</Link>
            <Link to="" className="nav-btn">Schedule</Link>
            <Link to="#sponsors" className="nav-btn">Problems</Link>
            <Link to="#about-us" className="nav-btn">Sponsors</Link>
            <Link to="guidelines" className="nav-btn">Guidelines</Link>
            <Link to="#events" className="nav-btn ghost-btn">Register</Link>
        </div>
    
    </nav>

    <div className="nav-buttons-mobile hidden-nav">
        <Link to="#hero" className="nav-btn">Home</Link>
        <Link to="" className="nav-btn">Schedule</Link>
        <Link to="#sponsors" className="nav-btn">Problems</Link>
        <Link to="#about-us" className="nav-btn">Sponsors</Link>
        <Link to="guidelines" className="nav-btn">Guidelines</Link>
        <Link to="#events" className="nav-btn ghost-btn">Register</Link>
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
    <Outlet/>

    </Fragment>

    )   

}
export default Navbar;
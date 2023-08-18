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
            
            <Link to="/"><img className="evt" src={logo} alt=""/></Link>
            <span><img className="clg" src="https://res.cloudinary.com/dcsduqstu/image/upload/v1692376766/SIT_LOGO_xoawck.png"/></span>
            <span> <img className="dept" src="https://res.cloudinary.com/dcsduqstu/image/upload/v1692376767/Logo_nebfrq.png"/></span>
        </div>

        <div className="nav-buttons">
            <Link to="/" className="nav-btn">Home</Link>
            <Link to="/schedule" className="nav-btn">About us</Link>
            <Link to="/problems" className="nav-btn">Problems</Link>
            <a href="#sponsors" className="nav-btn">Sponsors</a>
            <Link to="guidelines" className="nav-btn">Guidelines</Link>
            <Link to="/register" className="nav-btn ghost-btn">Register</Link>
        </div>
    
    </nav>

    <div className="nav-buttons-mobile hidden-nav">
        <Link to="/" className="nav-btn" >Home</Link>
        <Link to="/schedule" className="nav-btn">About us</Link>
        <Link to="/problems" className="nav-btn">Problems</Link>
        {/* <div onClick={() => window.location.replace("/#about")}>
                <span>Sponsors</span>
            </div> */}
        <a href="/#sponsors" className="nav-btn">Sponsors</a>
        <Link to="guidelines" className="nav-btn">Guidelines</Link>
        <Link to="/register" className="nav-btn ghost-btn">Register</Link>
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
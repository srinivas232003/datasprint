import "./nav.css"
import { Fragment } from "react";
import logo from './static/hack-logo.png'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar=()=>{
    const toggle=()=>{
        document.querySelector('.nav-buttons-mobile').classList.toggle('hidden-nav')
        let i=0;
        document.querySelectorAll('.hamburger span').forEach((span)=>{ 
          i+=1; 
          span.classList.toggle(`close-${i}`);
         })
      }
    return(
        <Fragment>
        <nav className="header-nav">
        <div className="branding">
            
            <Link to="/"  onClick={toggle}><img className="evt" src={logo} alt=""/></Link>
            <span><img className="clg" src="https://res.cloudinary.com/dcsduqstu/image/upload/v1692376766/SIT_LOGO_xoawck.png"/></span>
            <span> <img className="dept" src="https://res.cloudinary.com/dcsduqstu/image/upload/v1692376767/Logo_nebfrq.png"/></span>
        </div>

        <div className="nav-buttons">
            <Link to="/" className="nav-btn"  onClick={toggle}>Home</Link>
            <Link to="/aboutus" className="nav-btn"  onClick={toggle}>About us</Link>
            <Link to="/problems" className="nav-btn"  onClick={toggle}>Problems</Link>
            
           <Link to={{pathname: '/', hash: '#sponsors'}} className="nav-btn" onClick={toggle}>Sponsors</Link>
            <Link to="guidelines" className="nav-btn"  onClick={toggle}>Guidelines</Link>
            <Link to="/register" className="nav-btn ghost-btn"  onClick={toggle}>Register</Link>
        </div>
    
    </nav>

    <div className="nav-buttons-mobile hidden-nav">
        <Link to="/" className="nav-btn"  onClick={toggle} >Home</Link>
        <Link to="/aboutus" className="nav-btn"  onClick={toggle}>About us</Link>
        <Link to="/problems" className="nav-btn"  onClick={toggle}>Problems</Link>
        {/* <div onClick={() => window.location.replace("/#about")}>
                <span>Sponsors</span>
            </div> */}
        <a href="/#sponsors" className="nav-btn"  onClick={toggle}>Sponsors</a>
        <Link to="guidelines" className="nav-btn"  onClick={toggle}>Guidelines</Link>
        <Link to="/register" className="nav-btn ghost-btn"  onClick={toggle}>Register</Link>
    </div>

    <div className="hamburger" onClick={toggle}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>
    <Outlet/>

    </Fragment>

    )   

}
export default Navbar;
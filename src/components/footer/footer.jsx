import react from "react";

import "./footer.css"
const Footer=()=>{
    return(
      
  <footer className="footer-main bg-dark fixed-bottom" style={{  position: "relative",bottom: "-100px"}}>
  <div className="container">
    <div className="row address-main">
      <div className="col-lg-4 col-sm-12 col-xs-12">
        <div className="address-box clearfix">
          <div className="add-icon">
          <iframe  class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62210.801033170384!2d79.98319465820313!3d12.960647099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1664645478525!5m2!1sen!2sin" tyle={{"width":"80px","height":"80px"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>          </div>
          <div className="add-content">
            <h5>Address</h5>
            <p>  Sri Sai Ram Institute of Technology,
              Sai Leo Nagar, West Tambaram,Chennai - 600044
</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 col-xs-12">
        <div className="address-box clearfix">
          <div className="add-icon">
            <img src="https://res.cloudinary.com/dcsduqstu/image/upload/v1692262136/telephone_l5izyw.png" alt="" />
          </div>
          <div className="add-content">
            <h5>Phone</h5>
            <p> +91 80561 78031
 <br />
            +91 6381 291791  </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 col-xs-12">
        <div className="address-box clearfix">
          <div className="add-icon" >
            <img src={"https://res.cloudinary.com/dcsduqstu/image/upload/v1692261725/gmail_ys11xo.png"} alt="" />
          </div>
          <div className="add-content">
            <h5>Email</h5>
            <p> <a href="mailto:sairamaids@sairamtap.edu.in" style={{textDecoration:"none"}}>sairamaids@sairamtap.edu.in</a> </p>
          </div>
        </div>
      </div>
    </div>
</div>


<footer className="bg-dark text-center text-white">

<div className="container p-4 pb-0">
  <section className="mb-">
    <a className="btn btn-outline-light btn-floating m-1" target="_self" href="https://www.facebook.com/SairamITai" role="button"
      ><i className="fa fa-facebook-f"></i
    ></a>

    <a className="btn btn-outline-light btn-floating m-1" target="_self" href="https://www.linkedin.com/in/department-of-ai-ds-sri-sairam-institute-of-technology-9b6486224/" role="button"
      ><i className="fa fa-linkedin"></i
    ></a>

    <a className="btn btn-outline-light btn-floating m-1" target="_self" href="http://ai.sairamit.edu.in/" role="button"
      ><i className="fa fa-google"></i
    ></a>

    <a className="btn btn-outline-light btn-floating m-1" target="_self" href="https://www.instagram.com/aids_sairamit/?igshid=MzRlODBiNWFlZA%3D%3D" role="button"
      ><i className="fa fa-instagram"></i
    ></a>

  </section>
</div>

<div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
SSIT AI-DS © 2023 All Rights Reserved.
 
                     </div>
</footer>
</footer>

)}
export default Footer;

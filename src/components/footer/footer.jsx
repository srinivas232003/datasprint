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
            <img src="Img/footer-icon-01.png" alt="" />
          </div>
          <div className="add-content">
            <h5>Address</h5>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut veniam </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 col-xs-12">
        <div className="address-box clearfix">
          <div className="add-icon">
            <img src="Img/footer-icon-02.png" alt="" />
          </div>
          <div className="add-content">
            <h5>Phone</h5>
            <p>  +(91) 000000000 <br />
            +(91) 000000000  </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 col-xs-12">
        <div className="address-box clearfix">
          <div className="add-icon" >
            <img src={"Img/footer-icon-03.png"} alt="" />
          </div>
          <div className="add-content">
            <h5>Email</h5>
            <p> <a href="mailto:" style={{textDecoration:"none"}}>collab@codewithfaraz.com</a> </p>
          </div>
        </div>
      </div>
    </div>
</div>


<footer className="bg-dark text-center text-white">

<div className="container p-4 pb-0">
  <section className="mb-">
    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fa fa-facebook-f"></i
    ></a>

    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fa fa-twitter"></i
    ></a>

    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fa fa-google"></i
    ></a>

    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
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

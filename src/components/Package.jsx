import React from 'react';
import genralImage from "./images/general.jpg";
import scstImage from "./images/scst.jpg";
import obcImage from "./images/obc.jpg";
import logo2Image from "./images/logo2.png";
import "../styles/Package.css"; // Import the CSS file


const Packages = ({ logo2Image }) => {
  return (
    
      <><section className="services-area bg-color pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h1 className="p-hdr-t">* Tender Packages *</h1>
          <p>If you are looking to go with a fertiliser dealership with us, you will need to pick the right package based on your individual categories that you belong to. You can be assured of getting the best returns on your investment.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <h3>General</h3>



              {/* <img width="100%" src="assets/img/general.jpg" alt="image" /><br /><br /> */}
              {/* <img src={genralImage} alt="GENRAL"/> */}
              <img src={genralImage} alt="GENRAL" width="100%" /><br /><br />
              <p>Registration Fee for General Category.</p>
              <div className="deserve-btn">
                <a href="apply-now.html" className="default-btn">
                  Apply now
                  <span></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <h3>OBC</h3>


              {/* <img width="100%" src="assets/img/obc.jpg" alt="image" /><br /><br /> */}
              <img src={obcImage} alt="OBC" width="100%" /><br /><br />
              <p>Registration Fee for OBC Category.</p>
              <div className="deserve-btn">
                <a href="apply-now.html" className="default-btn">
                  Apply now
                  <span></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <h3>SC/ST</h3>



              {/* <img width="100%" src="assets/img/scst.jpg" alt="image" /><br /><br /> */}
              <img src={scstImage} alt="SCST" width="100%" /><br /><br />
              <p>Registration Fee for SC/ST Category.</p>
              <div className="deserve-btn">
                <a href="apply-now.html" className="default-btn">
                  Apply now
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><section className="footer-area bg-top" style={{ backgroundColor: "#212529" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo2Image} alt="LOGO2" className="padded-image" />
                  </a>
                </div>
                <p>
                  Fertilizer Dealership is involved in providing an enhanced level of service quality with a tech-driven attitude. We focus on providing you an outstanding service quality both for our franchises and farmers alike.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="single-footer-widget">
                <h3>Quick Links</h3>
                <ul className="quick-links">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="packages.html">Package</a>
                  </li>
                  <li>
                    <a href="apply-now.html">Apply Online</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Our Services</h3>
                <ul className="quick-links">
                  <li>
                    <a href="services/iffco.html">
                      IFFCO Fertilizer Distributorship
                    </a>
                  </li>
                  <li>
                    <a href="services/NFL.html">
                      NFL Fertilizer Distributorship
                    </a>
                  </li>
                  <li>
                    <a href="services/npk.html">
                      NPK Fertilizer Distributorship
                    </a>
                  </li>
                  <li>
                    <a href="services/Shaktiman.html">
                      Shaktiman Fertilizer Distributorship
                    </a>
                  </li>
                  <li>
                    <a href="services/paras.html">
                      Paras Fertilizer Distributorship
                    </a>
                  </li>
                  <li>
                    <a href="services/navratna.html">
                      Navratna Fertilizer Distributorship
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Us</h3>
                <div className="info-contact">
                  <i className="flaticon-pin" />
                  <span> National Fertilizers Limited, Corporate Office, A-08. Sector - 20, Noida, Distt. Gautam Budh Nagar (U.P) India, Noida 201301 </span>
                </div>
                <div className="info-contact">
                  <i className="flaticon-mail" />
                  <span>
                    <a href="mailto:info@fertilizerfranchises.com">info@fertilizerfranchises.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><div className="copy-right-area" style={{ backgroundColor: "#212529" }}>
        <div className="container">
          <div className="copy-right-content">
            <p>
              Copyright @2020 www.fertilizerfranchises.com
            </p>
          </div>
        </div>
      </div></>
    
    
  );
};

export default Packages;

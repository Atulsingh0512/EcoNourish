import React from "react";
import chooseImage from "./images/choose.jpg";
import "../styles/About.css";
import logo2Image from "./images/logo2.png";

const About = () => {
  return (
    <div className="page-title-area item-bg-1">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-content">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </div>

      <section className="choose-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-title"></div>
              <div className="choose-image">
                <img src={chooseImage} alt="LOGO2" className="CHOOSE" style={{ width: "100%" }} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="process-item">
                    <h2 className="p-hdr-t">* About Fertilizer Distributorship *</h2>
                    <p>
                      We are a company that focuses on providing full-fledged support for farmers while equally caring for the distributors is what makes us stand tall. We have created a platform for the betterment of the entire society at large.
                    </p>
                    <p>
                      We have set up the digital platform for the distributors, resellers, and everyone else in the marketing chain. The clients can grow with us and, in turn, assist the end-users – THE FARMERS! That way we and you are lending a helping hand to the agricultural community at large.
                    </p>
                    <p>We do provide access to several benefits and options-</p>
                    <ul>
                      <li>We help you set up your business with practically every sort of training.</li>
                      <li>Get the best deals on the amount of business that you bring to the company.</li>
                      <li>Stand a chance to enjoy a full-fledged experience in marketing and advertising.</li>
                      <li>You can be assured of a high-quality products portfolio for each sort of fertilizers and other products.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-area bg-top" style={{ backgroundColor: "#212529" }}>
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
      </section>

      <div className="copy-right-area" style={{ backgroundColor: "#212529" }}>
        <div className="container">
          <div className="copy-right-content">
            <p>
              Copyright @2020 www.fertilizerfranchises.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

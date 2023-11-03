import React from "react";
import "../styles/Services.css"; 
import logo2Image from "./images/logo2.png";

const Services = () => {
  return (
    <><section className="services-area bg-color pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Our Services</span>
          <h2>What We Offer for You</h2>
          <p>Wide range of Services</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="icon">
                <i className="flaticon-loan-1"></i>
              </div>
              <h3>Business Loan</h3>
              <p>
                Funding your small business in this pandemic has become easy and
                fast. Accelerate your business again with loans up to 30 lakhs.
                From Expanding your business reach, paying wages to your
                workers, maintaining inventory, ...
              </p>
              <a href="services/business-loan.html" className="learn-btn">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="icon">
                <i className="flaticon-personal"></i>
              </div>
              <h3>Commercial Loans</h3>
              <p>
                Applying for a commercial loan can help you to fulfill financial
                needs for your business. Either you need to build new
                infrastructure, increase your working capital, meet operational
                costs, purchase new equipment and many...
              </p>
              <a href="services/commercial-loans.html" className="learn-btn">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="icon">
                <i className="flaticon-loan-3"></i>
              </div>
              <h3>Personal Loan</h3>
              <p>
                Get instant personal loan upto Rs.25 lakh with minimal
                documentation. With top banking partners, we offer instant
                personal loans for salaried people with less interest. Get your
                loan amount credit in just 24 hours with ...
              </p>
              <a href="services/personal-loan.html" className="learn-btn">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="icon">
                <i className="flaticon-loan-2"></i>
              </div>
              <h3>House Loan</h3>
              <p>
                Living in your own house is everyone’s dream. With our affordable
                interest rate of just 8.50%, purchasing or constructing a house
                has become easy. Our loan offers starts from Rs. 2 lakhs and
                goes upto Rs. 5 Crores. Reach ...
              </p>
              <a href="services/home-loan.html" className="learn-btn">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="icon">
                <i className="flaticon-scholarship"></i>
              </div>
              <h3>Education Loan</h3>
              <p>
                With minimal documentation and quick approval, you can easily
                avail education loans to pay all the education costs of your
                child. Our education loans are available for both Indian and
                abroad students. Take a step for your ...
              </p>
              <a href="services/education-loan.html" className="learn-btn">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="icon">
                <i className="flaticon-car"></i>
              </div>
              <h3>Car Loan</h3>
              <p>
                Owning a vehicle has become a basic necessity of today’s world.
                Whether you need it for commuting purposes or leisure, it’s
                necessary to have a vehicle. Get your dream car with our easy
                loan process and low-interest rates.
              </p>
              <a href="services/car-loan.html" className="learn-btn">
                Learn More
              </a>
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
                    {/* <img src="assets/img/logo2.png" alt="image" /> */}
                    <img src={logo2Image} alt="LOGO2" className="padded-image" />
                  </a>
                </div>
                <p>
                  Fertilizer Dealership is involved in providing an enhanced level of service
                  quality with a tech driven attitude. We focus on providing you an outstanding
                  service quality both for our franchises and farmers alike more...
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
                  <span> National Fertilizers Limited, Corporate Office, A-08.     Sector - 20, Noida, Distt. Gautam Budh Nagar (U.P)       India, Noida 201301 </span>
                </div>
                <div className="info-contact">
                  <i className="flaticon-mail" />
                  <span>
                    <a href="mailto:info@fertilizerfranchises.com">info@fertilizerfranchises.com</a>
                  </span>
                </div>
                {/*<div class="info-contact">*/}
                {/*   <i class="flaticon-telephone"></i>*/}
                {/*   <span>*/}
                {/*   <a href="tel:+916206917540">+916206917540</a>*/}
                {/*   </span>*/}
                {/*</div>*/}
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

export default Services;

import React from "react";
import logo2Image from "./images/logo2.png";
import "../styles/Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <><section className="contact-area ptb-100">
          <div className="container">
              <div className="section-title">
                  <h2 className="p-hdr-t">* Contact Us *</h2>
                  <br /> <br />
              </div>
              <div className="row">
                  <div className="col-lg-8">
                      <div className="contact-form">
                          <div className="title">
                              <h3>Write Us</h3>
                          </div>
                          <form method="post" action="#" id="contact_page_form">
                              <div className="row">
                                  <div className="col-lg-6 col-md-12">
                                      <div className="form-group">
                                          <label>Name*</label>
                                          <input
                                              type="text"
                                              name="name"
                                              id="name"
                                              className="form-control"
                                              required
                                              data-error="Please enter your name" />
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12">
                                      <div className="form-group">
                                          <label>Email Address*</label>
                                          <input
                                              type="email"
                                              name="email"
                                              id="email"
                                              className="form-control"
                                              required
                                              data-error="Please enter your email" />
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12">
                                      <div className="form-group">
                                          <label>Phone*</label>
                                          <input
                                              type="text"
                                              name="phone"
                                              id="phone"
                                              className="form-control"
                                              required
                                              data-error="Please enter your phone" />
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12">
                                      <div className="form-group">
                                          <label>Subject*</label>
                                          <input
                                              type="text"
                                              name="msg_subject"
                                              id="msg_subject"
                                              className="form-control"
                                              required
                                              data-error="Please enter your subject" />
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                      <div className="form-group">
                                          <label>Message*</label>
                                          <textarea
                                              name="message"
                                              className="form-control"
                                              id="message"
                                              cols="30"
                                              rows="5"
                                              required
                                              data-error="Write your message"
                                          ></textarea>
                                          <div className="help-block with-errors"></div>
                                      </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                      <button
                                          type="submit"
                                          name="submit"
                                          className="default-btn"
                                      >
                                          Send Message
                                          <span></span>
                                      </button>
                                      <div
                                          id="msgSubmit"
                                          className="h3 text-center hidden"
                                      ></div>
                                      <div className="clearfix"></div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="contact-side-box">
                          <div className="info-box">
                              <div className="icon">
                                  <i className="flaticon-clock"></i>
                              </div>
                              <h4>Working hours</h4>
                              <ul className="list">
                                  <li>
                                      Monday to Saturday
                                      <span>8:00 AM - 5:00 PM</span>
                                  </li>
                                  <li>
                                      Sunday
                                      <span>only urgent call</span>
                                  </li>
                              </ul>
                          </div>
                          <div className="info-box">
                              <div className="icon">
                                  <i className="flaticon-pin"></i>
                              </div>
                              <h4>Address</h4>
                              <span>
                                  National Fertilizers Limited, Corporate Office, A-08. Sector -
                                  20, Noida, Distt. Gautam Budh Nagar (U.P) India, Noida 201301
                              </span>
                          </div>
                          <div className="info-box">
                              <div className="icon">
                                  <i className="flaticon-phone-call"></i>
                              </div>
                              <h4>Phone</h4>
                              <span>
                                  <a href="tel:6206917540">+916206917540</a>
                              </span>
                          </div>
                          <div className="info-box">
                              <div className="icon">
                                  <i className="flaticon-email"></i>
                              </div>
                              <h4>Email</h4>
                              <span>
                                  <a href="mailto:info@instant-loans.in">
                                      info@fertilizerfranchises.com
                                  </a>
                              </span>
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

export default Contact;

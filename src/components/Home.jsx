import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Home.css"; // Import your CSS file
import iffcoImage from "./images/iffco.jpg";
import nflImage from "./images/nfl.jpg";
import navratnaImage from "./images/navratna.jpg";
import logo2Image from "./images/logo2.png";

const Home = () => {
  const carouselImages = [
    "slide1.jpg",
    "slide2.jpg",
    "slide3.jpg",
    "slide4.jpg",
  ];

  return (
    <div className="container">
      <h1>Welcome to EcoNourish</h1>
      <div className="carousel-container mb-0">
        <Carousel interval={500}>
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`images/${image}`}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="get-franchise-section" style={{ backgroundColor: "#369C47" }}>
        <div className="row align-items-center">
          <div className="col-md-8">
            {/* <h2>Welcome to Fertilizer Franchise !</h2> */}
            <h2 style={{ color: 'white' }}>Welcome to Fertilizer Franchise !</h2>

          </div>
          <div className="col-md-2">
            <div className="button-container">
              <a href="apply-now.html" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="choose-image">
              {/* <img src="./images/iffco.jpg" alt="image" /> */}
              <img src={iffcoImage} alt="IFFCO" />
             

            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-title">
              <h2 className="p-hdr-t">Why Fertilizer Dealership?</h2>
              <h5 className="p-hdr-t">
                Fertilizer Dealership is one of the leading IFFCO certified
                companies in the private sector producing fertilizers and
                chemicals
              </h5>
              <p>
                We are a certified fertilizer manufacturing company dealing
                in fertilizers and other agricultural products. We have a
                vision to become one of the torchbearers for innovative
                technology-driven solutions for the farming industry and
                assist the farmers in getting the best returns on their
                efforts. Aspiring to be a dynamic organization in the field
                of farming and fertilizers, we have been striving for the
                success of our farmers. The company also intends to help the
                farmers and others associated with the industry to be a part
                of our team and earn some decent income with us. You can
                become our franchisee or even get the Fertilizer Dealership
                with us and sell the fertilizers and other chemicals at a
                very affordable price to the farmers.Be a part of us and
                prosper yourself!
              </p>
              <p>Be a part of us and prosper yourself!</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="choose-title">
              <h2 className="p-hdr-t">What do you get with our Fertilizer Dealership?</h2>
              <p>
                We have been one of the highly knowledgeable companies in
                the realm of fertilizers, and if you decide to be a part of
                our Fertilizer Franchise.
              </p>
              <p>
                We provide you a complete strategy – We believe in
                benefiting everyone involved in the chain. We are not
                business-minded, and we make it a point to help you earn
                and maintain your earning. We help you learn how to earn
                better with the dealership of fertilizer.
              </p>
              <p>
                We help you grow with us – The quality of products is what
                keeps us going, and we make sure that we can build trust
                with the quality that is never compromised. You can expect
                to grow consistently with the fertilizer franchise
                dealership with us.
              </p>
              <p>
                We help you finance your growth – We also have in-house
                experts and financial professionals who will be able to
                provide you a great degree of experience. They can help you
                in creating the financial planning for your company.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-image">
              {/* <img src="assets/img/loan-dtl/nfl.jpg" alt="image" /> */}
              <img src={nflImage} alt="NFL" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="choose-image">
              {/* <img src="assets/img/loan-dtl/navratna.jpg" alt="image" /> */}
              <img src={navratnaImage} alt="Navratna" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="process-item">
                  <div className="choose-title">
                    <h2 className="p-hdr-t">What does our Fertilizer Franchise deal in?</h2>
                    <h5 className="p-hdr-t">As a popular and well-known Fertilizer Products Company in India, we have the following services being offered –</h5>
                    <p>Shaktimaan - range micronutrient fertilisers. Rich in Potash and phosphorus, these fertilises help avoid the premature shedding of plants.</p>
                    <p>Paras fertilisers - which provides urea at an affordable pricing. It has been known to enhance the fertility of the soil to a considerable extent.</p>
                    <p>Plant seeds – You can also get access to a host of quality seeds. Our seeds come with over 90 percent guarantee.</p>
                    <p>Chemicals – The agriculture chemicals range such as Nitric acid, ammonium nitrate, sodium nitrate and others for an enhanced soil enhancement.</p>
                    <p>Bio products in multiple ranges Kisan fertilisers – urea rich in nitrogen for almost every type of crop that you can think of.</p>
                    <p>There are several other products that we specialize in. Go for a fertilizer agriculture dealership with us, and we will provide you with complete details of all our products and help you grow your business further ahead.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <section className="should-area bg-color pt-70 pb-70" style={{ backgroundColor: "#369C47" }}>
          <div className="container">
            <div className="should-section-title" style={{ color: "white" } }>
              <h2 className="p-hdr-t">Why should you choose us as the best dealership for fertilizer?</h2>
              <p>
                Well, we are one of the top fertiliser and chemicals manufacturing companies in India. Given the fact that agriculture and agriculture-based products contribute to around 75 percent income in the rural areas, a dealership for fertilizer should be a great option to earn decent money. It is your steady income and growth channel with no signs of fading away. Simply opt for a Fertilizer Dealership with us and you can achieve a huge degree of performance. With us -
              </p>
              <p>1. You get a popular brand to work with and grow your business.</p>
              <p>2. We provide an outstanding network of advertising and marketing options.</p>
              <p>3. You can be assured of a high return on fertilizer agriculture dealership investments.</p>
              <p>4. We also provide timely training along with the launch of new products.</p>
              <p>So, what are you waiting for? Go with one of the services that we offer and get a fertilizer franchise dealership with the growing Fertilizer Products Company in India.</p>
              <p>LET US GROW TOGETHER and GROW India further!</p>
            </div>
          </div>
        </section>

        <section className="services-area bg-color pt-100 pb-70">
      <div className="container">
        <div className="section-title" style={{Color: "#369C47" }} >
          <h2 className="p-hdr-t">Services We Provide Are</h2>
          <p>
            Fertilizer Dealership is a tech-driven business that provides a platform to farmers and those who wish to make a living in this industry. It provides franchises for different types of chemicals and fertilizers at very reasonable prices.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="icon">
                <i className="bx bx-chevron-down"></i>
              </div>
              <h3>Our Business Strategy</h3>
              <p>
                While everyone wants maximum profit, we believe in earning, maintaining, and then generating it. Our primary goal is to not only make a lot of money but also to help farmers who provide us with our daily food.
              </p>
              <div className="deserve-btn text-center">
                <a href="apply-now.html" className="default-btn">
                  Apply now
                  <span></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="icon">
                <i className="bx bx-chevron-down"></i>
              </div>
              <h3>Our Business Growth</h3>
              <p>
                A positive way for businesses to grow is by building trust and offering quality products. Yes, we have always grown our business by being dedicated to agriculture and not focusing on more revenue.
              </p>
              <div className="deserve-btn text-center">
                <a href="apply-now.html" className="default-btn">
                  Apply now
                  <span></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="icon">
                <i className="bx bx-chevron-down"></i>
              </div>
              <h3>Our Financial Planning</h3>
              <p>
                Our own financial professionals are available to help with financial planning. A thorough market analysis is used to establish a picture of our investment plans.
              </p>
              <div className="deserve-btn text-center">
                <a href="apply-now.html" className="default-btn">
                  Apply now
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* ------------------------------------------------------------------------------------------------------- */}

    <section className="deserve-area ptb-50 state-wise">
        <div className="container">
          <div className="section-title">
            <table style={{width: '100%'}} className="table" cellPadding={2} cellspeacing={2}>
              <tbody>
                <tr>
                  <td colSpan={7} valign="bottom">
                    <div className="ssw">
                      <h2 className="pricing-table-title" style={{textAlign: 'center'}}>State-wise Number of <br /><a href="#"><span style={{color: '#369c47'}}>Wholesalers and Retailers</span></a></h2>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">&nbsp;</td>
                  <td valign="bottom">&nbsp;</td>
                  <td valign="bottom">&nbsp;</td>
                  <td valign="bottom">&nbsp;</td>
                  <td valign="bottom">&nbsp;</td>
                  <td valign="bottom">&nbsp;</td>
                  <td valign="bottom">&nbsp;</td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p><strong>State</strong></p>
                  </td>
                  <td colSpan={2} valign="bottom">
                    <p align="center"><strong>Wholesalers</strong></p>
                  </td>
                  <td colSpan={2} valign="bottom">
                    <p align="center"><strong>Retailers</strong></p>
                  </td>
                  <td colSpan={2} valign="bottom">
                    <p align="center"><strong>Total Dealers</strong></p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p><strong>&nbsp;</strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>Total Regd</strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>Active </strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>Total Regd</strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>Active </strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>Total Regd</strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>Active </strong></p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Andaman &amp; Nicobar   Islands</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">4</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">4</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Andhra Pradesh</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1045</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">755</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">9326</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">7370</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">10371</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">8125</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Arunachal Pradesh</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">4</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">3</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">4</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">8</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">5</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Assam</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">269</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">219</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1395</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">515</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1664</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">734</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Bihar</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">885</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">750</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">25662</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">20088</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">26547</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">20838</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Chandigarh</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">0</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">0</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Chattisgarh</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">545</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">442</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">3193</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1994</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">3738</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2436</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Dadra &amp; Nagar Haveli</p>
                  </td>
                  <td width={69} valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Daman &amp; Diu</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1</p>
                  </td>
                  <td width={69} valign="bottom">
                    <p align="center">1</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Delhi</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">89</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">23</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">106</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">27</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">195</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">50</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Goa</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">18</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">12</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">98</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">41</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">116</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">53</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Gujarat</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1277</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">738</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">11153</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">8565</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">12430</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">9303</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Harayana</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">959</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">707</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">5705</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">4286</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">6664</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">4993</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Himachal Pradesh</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">97</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">89</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2682</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2054</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2779</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2143</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Jharkhand</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">148</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">97</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2979</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1854</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">3127</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1951</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>J&amp;K</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">318</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">214</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2565</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1964</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2883</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2178</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Karnataka</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1599</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1176</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">11850</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">7185</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">13449</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">8361</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Kerala</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">285</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">207</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2893</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2460</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">3178</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2667</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Lakshadweep</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">3</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">0</p>
                  </td>
                </tr>
                <tr>
                  <td width={172} valign="bottom">
                    <p>Madhya Pradesh</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2260</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1544</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">10377</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">7841</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">12637</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">9385</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Maharashtra</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">5049</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">3223</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">34008</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">16688</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">39057</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">19911</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Manipur</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">58</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">50</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">53</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">37</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">111</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">87</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Meghalaya</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">11</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">8</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">82</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">6</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">93</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">14</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Mizoram</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">20</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">10</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">9</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">9</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">29</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">19</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Nagaland</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">4</p>
                  </td>
                  <td width={48} valign="bottom">
                    <p align>4</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">6</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">6</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Odisha</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">912</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">728</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">10913</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2810</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">11825</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">3538</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Puducherry</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">14</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">11</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">77</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">41</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">91</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">52</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Punjab</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1007</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">783</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">9262</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">8252</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">10269</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">9035</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Rajasthan</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1406</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1105</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">11171</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">8095</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">12577</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">9200</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Sikkim</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td width={42} valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p>&nbsp;</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">0</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">0</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Tamil Nadu</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1423</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">971</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">12651</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">8965</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">14074</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">9936</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Telengana</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">761</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">602</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">6244</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">4977</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">7005</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">5579</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>Tripura</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">30</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">21</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">350</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">122</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">380</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">143</p>
                  </td>
                </tr>
                <tr>
                  <td width={172} valign="bottom">
                    <p>Uttarakhand</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">75</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">32</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1115</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">877</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1190</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">909</p>
                  </td>
                </tr>
                <tr>
                  <td width={172} valign="bottom">
                    <p>Uttar Pradesh</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2502</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">1769</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">40944</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">27790</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">43446</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">29559</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p>West Bengal</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">2986</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">916</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">23216</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">12083</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">26202</p>
                  </td>
                  <td valign="bottom">
                    <p align="center">12999</p>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom">
                    <p><strong>Total</strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>26057</strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>17209</strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>240093</strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>157006</strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>266150</strong></p>
                  </td>
                  <td valign="bottom">
                    <p align="center"><strong>174215</strong></p>
                  </td>
                </tr>
              </tbody>
            </table>
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
            <div className="col-lg-2 col-md-6" >
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
    </div>
  );
};

export default Home;

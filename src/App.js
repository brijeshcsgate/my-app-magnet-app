// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import './basic.css';
import './layout.css';
import './ionicons.css';
// import './owl_carousel.css';
import './magnific-popup.css';
import './animate.css';
import './custom.css';
import profile from'./Images/profile.jpg'
import qr from'./Images/qr.png'
import liclogo from'./Images/liclogo.png'
import './Images/'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
// import 'owl.carousel';

const App = () => {
  useEffect(() => {
    // Initialize the carousel
    // $('.owl-carousel').owlCarousel({
    //   loop: true,
    //   margin: 0,
    //   nav: false,
    //   dots: false,
    //   autoplay: true,
    //   responsive: {
    //     0: { items: 1 },
    //     600: { items: 1 },
    //     1000: { items: 1 },
    //   },
    // });
  }, []);

  const myFunction = () => {
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('more');
    const btnText = document.getElementById('myBtn');

    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'see more';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'see less';
      moreText.style.display = 'inline';
    }
  };

  return (
    <div className="page" id="home-section">
      {/* Preloader */}
      <div className="preloader" style={{ display: 'none' }}>
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner" style={{ display: 'none' }}>
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Started Background */}
      <div className="started-bg">
        <div className="slide" style={{ backgroundImage: '' }}></div>
      </div>

      {/* Header */}
      <header>
        <div className="top-menu">
          <ul>
            <li className="active">
              <a className="btn_animated" href="#home-section">
                <span className="circle">
                  <span className="ink animate"></span>Home
                </span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#about-section">
                <span className="circle">Profile</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#works-section">
                <span className="circle">Services</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#Products-section">
                <span className="circle">Products</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#Offers-section">
                <span className="circle">Offers</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#Gallery-section">
                <span className="circle">Gallery</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#clients-section">
                <span className="circle">Testimonials</span>
              </a>
            </li>
            <li>
              <a className="btn_animated" href="#payments-section">
                <span className="circle">Payments</span>
              </a>
            </li>
          </ul>
          <a href="#" className="menu-btn">
            <span></span>
          </a>
        </div>
      </header>


      {/* <!-- Header --> */}
      <header>
        <div className="top-menu">
          <ul>
            <li className="active">
              <a className="btn_animated" href="#home-section"><span className="circle"><span className="ink animate"  style={{
    height: '300px',
    width: '300px',
    top: '-129px',
    left: '-130.766px'
  }}></span>Home</span></a>
            </li>
            <li className="">
              <a className="btn_animated" href="#about-section"><span className="circle"><span className="ink animate"   style={{
    height: '300px',
    width: '300px',
    top: '-148px',
    left: '-34px'
  }}></span>Profile</span></a>
            </li>
            <li className="">
              <a className="btn_animated" href="#works-section"><span className="circle">Services</span></a>
            </li>
            <li className="">
              <a className="btn_animated" href="#Products-section"><span className="circle">Products</span></a>
            </li>
            <li className="">
              <a className="btn_animated" href="#Offers-section"><span className="circle">Offers</span></a>
            </li>
            <li className="">
              <a className="btn_animated" href="#Gallery-section"><span className="circle">Gallery</span></a>
            </li>
            <li className="">
              <a className="btn_animated" href="#clients-section"><span className="circle">Testimonials</span></a>
            </li>
            <li className="">
              <a className="btn_animated" href="#payments-section"><span className="circle">Payments</span></a>
            </li>
          </ul>
          <a href="#" className="menu-btn"><span></span></a>
        </div>
      </header>

      {/* <!-- Container --> */}
      <div className="container">

        {/* <!-- Started --> */}
        <section className="section started">
          <div className="st-box">
            <div className="st-bts">
              {/* <img href="#popup-11" src={qr} className="btn_animated has-popup" /> */}
              <a href="#popup-11" className="has-popup">
                <img src={qr} alt="" />
              </a>
              <div id="popup-11" className="popup-box-qr mfp-fade mfp-hide">
                <div className="content">
                  <div className="qr-desc">

                    <img src={profile} style={{
  height: '100px',
  width: '100px',
  borderRadius: '50%'
}}
 />
                    <h4>Shahista Naaz<br /><span>Front-end Developer</span></h4>

                    <img src={qr} />
                    <ul>
                      <li><a href="javascript:void(0Share My Code)">Share my code</a></li>
                      <li><a href="javascript:void(0Share My Code)">Save to photos</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="st-image" id="profileName">
              <img src={profile} alt="" />
              <div className="st-title">Shahista Naaz</div>
            </div>
            <div className="profile-quote">It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.</div>
            <div className="st-title">Shahista Naaz</div>
            <div className="st-subtitle">Front-end Developer</div>
            <div className="life-ins">Life Insurance Corporation of India</div>
            <img src={liclogo} className="liclogo"/>
              <div className="bts">
                <a href="#popup-form" className="btn btn_animated has-popup"><span className="circle">Refer
                  Business</span></a>
                <div id="popup-form" className="popup-box mfp-fade mfp-hide">
                  <div className="content">

                    <div className="desc">
                      <h4>Connect with Shahista Naaz</h4>
                      <p>Add Shahista Naaz to your connections and business with each other!<br />
                        Submit this connection form to connect &amp; enquire about the Service/Products for
                        your own use. If in case you want to refer Shahista Naaz to your friend or
                        business, please click here to refer business.
                      </p>
                      <h4>Date: 25/11/2021</h4>
                      <label className="pd" for="gender">Connection type: </label>
                      <input className="mr" type="radio" id="gender" name="gender" value="male" />Request Connection
                      <input type="radio" id="gender" name="gender" value="female" />Reffer to Friend
                      <br />

                      <div className="form">
                        <form id="cform" method="post" novalidate="novalidate">
                          <div className="group-val">
                            <input type="text" name="name" placeholder="Your Name" />
                          </div>
                          <div className="group-val">
                            <input type="number" name="mobile" placeholder="Mobile " />
                          </div>
                          <div className="group-val">
                            <input type="text" name="email" placeholder="Your Email" />
                          </div>
                          <div className="group-val">
                            <input type="text" name="address" placeholder="Your Address" />
                          </div>
                          <div className="group-val">
                            <input type="text" name="Industry" placeholder="Your Industry" />
                          </div>
                          <div className="group-val ct-gr">
                            <textarea name="message" placeholder="Comments"></textarea>
                          </div>
                          <h6>How hot is referral?</h6>
                          <select className="referral" name="choice">
                            <option>How hot is referral?</option>
                            <option value="first">1</option>
                            <option value="second">2</option>
                            <option value="third">3</option>
                            <option value="third">4</option>
                            <option value="third">5</option>
                          </select><br />
                          <a href="#" className="btn btn_animated"><span className="circle">Submit and
                            New</span></a>
                          <a href="#" className="btn btn_animated"><span className="circle">Submit</span></a>
                          <a href="#" className="btn btn_animated"><span className="circle">Close</span></a>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>

                <a href="javascript:void(0)" className="btn extra contact-btn btn_animated"><span className="circle">
                  Enquiry</span></a>


                <a href="javascript:void(0)" className="btn extra contact-btn btn_animated"><span className="circle"><span className="ink animate" style={{
  height: '167px',
  width: '167px',
  top: '-51.5px',
  left: '35.2188px'
}}
></span>Save My Contact</span></a>

              </div>
              <div className="st-soc">
                <a target="blank" href="https://www.facebook.com/" className="btn_animated">
                  <span className="circle"><i className="icon ion ion-social-facebook"></i></span>
                </a>
                <a target="blank" href="https://github.com/" className="btn_animated">
                  <span className="circle"><i className="icon ion ion-social-github"></i></span>
                </a>
                <a target="blank" href="https://twitter.com/" className="btn_animated">
                  <span className="circle"><i className="icon ion ion-social-twitter"></i></span>
                </a>
                <a href="skype:smorgan" className="btn_animated">
                  <span className="circle"><span className="ink animate" style={{
  height: '40px',
  width: '40px',
  top: '7px',
  left: '13.4375px'
}}
></span><i className="icon ion ion-social-skype"></i></span>
                </a>
                <a target="blank" href="https://plus.google.com/" className="btn_animated">
                  <span className="circle"><i className="icon ion ion-social-googleplus"></i></span>
                </a>
              </div>
          </div>
        </section>

        {/* <!-- Wrapper --> */}
        <div className="wrapper">

          {/* <!-- Section About --> */}
          <section className="section about" id="about-section">
            <div className="content-box">
              <div className="row">
                <div className="col col-m-12 col-t-5 col-d-5">
                  <div className="info-list">
                    <div className="contact-title">Contact Us</div>
                    <ul>
                      <li><strong><span>Mobile No:</span></strong>(+91) 8126 139 074</li>
                      <li><strong><span>WhatsApp No:</span></strong> (+91) 8126 139 074</li>
                      <li><strong><span>Email address:</span></strong> gyanedra.s@troology.com</li>
                      <li><strong><span>Website:</span></strong> www.magnet.cards</li>
                      <li><strong><span>Telegram:</span></strong>@gyangps</li>
                      <li><strong><span>Address:</span></strong>4th Floor, Himanshu Sadan, 5 Park
                        Road, Hazratganj, Lucknow, Uttar Pradesh 226001</li>
                    </ul>
                  </div>
                </div>
                <div className="col col-m-12 col-t-7 col-d-7">
                  <div className="text-box">
                    <div className="contact-title">About Me</div>
                    <p>This section shall help you to have detailed information about yourself. Create
                      it quickly with Magnet’s set
                      of pre-defined ready to use templates across industries of your ch<span id="dots">...</span><span id="more">oice enim ligula venenatis dolor.
                        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
                        luctus vestibulum augue ut aliquet.
                        Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
                        sed nunc venenatis imperdiet sed
                        ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
                        fringilla congue eros non fermentum.
                        Sed dapibus pulvinar nibh tempor porta.</span>
                      <span onclick="myFunction()" id="myBtn">see more</span>

                    </p></div>

                </div>
              </div>
            </div>
          </section>

          {/* <!-- Services --> */}
          <section className="section works" id="works-section">
            <div className="title">Services</div>

            <div className="row box-items" style={{
  position: 'relative',
  height: '1879.14px'
}}
>
              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="1" style={{
  visibility: 'visible',
  transform: 'translateY(0px) scale(1)',
  opacity: '1',
  transition: 'all 0.5s cubic-bezier(0.6, 0.2, 0.1, 1), transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1), opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1)',
  left: '0%',
  top: '0px'
}}
>
                <div className="image">
                  <a href="#popup-1" className="has-popup"><img src="images/works/1.png" alt="" /></a>
                </div>
                <div className="content-box">
                  <a href="#popup-1" className="name has-popup">LIFE INSURANCE</a>
                  <p>We are a team of professional Insurance and Financial Advisors who are here to cater.
                    So striking at of to welcomed resolved.
                  </p>
                  <div className="service-bts">
                    <a href="#popup-1" className="btn btn_animated has-popup"><span className="circle">View
                      detail</span></a>
                    <a href="#popup-1" className="btn extra contact-btn btn_animated has-popup"><span className="circle">Enquiry</span></a>
                  </div>
                </div>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/1.png" alt="" />
                    </div>
                    <div className="desc">
                      <h3 className="mr">Life Insurance</h3>
                      <p>So striking at of to welcomed resolved. Northward by described up household
                        therefore attention. Excellence decisively nay man yet impression for
                        contrasted remarkably.
                      </p>
                      <p>Forfeited you engrossed but gay sometimes explained. Another as studied it to
                        evident. Merry sense given he be arise. Conduct at an replied removal an
                        amongst. Remaining determine few her two cordially admitting old.
                      </p>
                      <p>Tiled say decay spoil now walls meant house. My mr interest thoughts screened
                        of outweigh removing. Evening society musical besides inhabit ye my. Lose
                        hill well up will he over on. Increasing sufficient everything men him
                        admiration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="2" style={{
  visibility: 'visible',
  opacity: '1',
  transitionBehavior: 'normal, normal, normal',
  transitionTimingFunction: 'ease, cubic-bezier(0.6, 0.2, 0.1, 1), cubic-bezier(0.6, 0.2, 0.1, 1)',
  transitionDelay: '0s, 0s, 0s',
  left: '0%',
  top: '616px'
}}
>
                <div className="image">
                  <a href="#popup-2" className="has-popup"><img src="images/works/2.jpg" alt="" /></a>
                </div>
                <div className="content-box">
                  <a href="#popup-2" className="name has-popup">HEALTH INSURANCE</a>
                  <p>Preference any astonished unreserved mrs. Prosperous understood middletons in
                    conviction an uncommonly do. Supposing so be resolving.
                  </p>
                  <div className="service-bts">
                    <a href="#popup-2" className="btn btn_animated has-popup"><span className="circle">View
                      detail</span></a>
                    <a href="#popup-2" className="btn extra contact-btn btn_animated has-popup"><span className="circle">Enquiry</span></a>
                  </div>
                </div>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/2.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h3 className="mr">Health Insurance</h3>
                      <p>So striking at of to welcomed resolved. Northward by described up household
                        therefore attention. Excellence decisively nay man yet impression for
                        contrasted remarkably.
                      </p>
                      <p>Forfeited you engrossed but gay sometimes explained. Another as studied it to
                        evident. Merry sense given he be arise. Conduct at an replied removal an
                        amongst. Remaining determine few her two cordially admitting old.
                      </p>
                      <p>Tiled say decay spoil now walls meant house. My mr interest thoughts screened
                        of outweigh removing. Evening society musical besides inhabit ye my. Lose
                        hill well up will he over on. Increasing sufficient everything men him
                        admiration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="3" style={{
  visibility: 'visible',
  opacity: '1',
  transitionBehavior: 'normal, normal, normal',
  transitionTimingFunction: 'ease, cubic-bezier(0.6, 0.2, 0.1, 1), cubic-bezier(0.6, 0.2, 0.1, 1)',
  transitionDelay: '0s, 0s, 0s',
  left: '0%',
  top: '1232px'
}}
>
                <div className="image">
                  <a href="#popup-3" className="has-popup"><img src="images/works/3.jpg" alt="" /></a>
                </div>
                <div className="content-box">
                  <a href="#popup-3" className="name has-popup">MUTUAL FUNDS</a>
                  <p>Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch
                    of no ye. Voice tried known to as my to.
                  </p><div className="service-bts">
                    <a href="#popup-3" className="btn btn_animated has-popup"><span className="circle"><span className="ink animate" style={{
  height: '130px',
  width: '130px',
  top: '-42.875px',
  left: '-57.125px'
}}
></span>View
                      detail</span></a>
                    <a href="#popup-3" className="btn extra contact-btn btn_animated has-popup"><span className="circle">Enquiry</span></a>
                  </div>
                </div>
                <div id="popup-3" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/3.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h4>Mutual Funds</h4>
                      <p>So striking at of to welcomed resolved. Northward by described up household
                        therefore attention. Excellence decisively nay man yet impression for
                        contrasted remarkably.
                      </p>
                      <p>Forfeited you engrossed but gay sometimes explained. Another as studied it to
                        evident. Merry sense given he be arise. Conduct at an replied removal an
                        amongst. Remaining determine few her two cordially admitting old.
                      </p>
                      <p>Tiled say decay spoil now walls meant house. My mr interest thoughts screened
                        of outweigh removing. Evening society musical besides inhabit ye my. Lose
                        hill well up will he over on. Increasing sufficient everything men him
                        admiration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </section>

          {/* <!-- Products --> */}
          <section className="section works" id="Products-section">
            <div className="title">Products</div>

            <div className="row box-items" style={{
  position: 'relative',
  height: '1696.22px'
}}
>
              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="4" style={{
  visibility: 'visible',
  transform: 'translateY(0px) scale(1)',
  opacity: '1',
  transition: 'all 0.5s cubic-bezier(0.6, 0.2, 0.1, 1), transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1), opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1)',
  left: '0%',
  top: '0px'
}}
>
                <div className="image">
                  <div className="owl-carousel owl-theme owl-loaded owl-drag">





                    <div className="owl-stage-outer"><div className="owl-stage" style={{
  transform: 'translate3d(-2420px, 0px, 0px)',
  transition: '0.25s',
  width: '6655px'
}}
><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: '605px'}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item active" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div></div>
                </div>
                <div className="content-box">
                  <a href="#popup-4" className="name has-popup">NIKE</a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="pricing">
                    <i style={{
  fontSize: '12px',
  position: 'relative',
  top: '-8px'
}}
 className="fa fa-inr" aria-hidden="true"></i>
                    <a href="Javascript:void(0)" className=""> 1,149</a><br />
                    <span className="mrp">M.R.P.: </span>
                    <i style={{
  fontSize: '10px',
  position: 'relative',
  top: '-1px'
}}
 className="fa fa-inr" aria-hidden="true"></i><del> 2000</del>
                  </div>
                  <a href="javascript:void(0)" className="product-link">https://www.troology.com/</a>
                  <div className="service-bts">
                    <a href="#popup-4" className="btn btn_animated has-popup"><span className="circle">View
                      detail</span></a>
                    <a href="#popup-4" className="btn extra contact-btn btn_animated has-popup"><span className="circle">Enquiry</span></a>
                  </div>

                </div>
                <div id="popup-4" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <div className="owl-carousel owl-theme owl-loaded owl-drag">





                        <div className="owl-stage-outer"><div className="owl-stage" style={{
  transform: 'translate3d(0px, 0px, 0px)',
  transition: 'all'
}}
><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div></div>
                    </div>
                    <div className="desc">
                      <h3 className="mr">Nike</h3>
                      <p>So striking at of to welcomed resolved. Northward by described up household
                        therefore attention. Excellence decisively nay man yet impression for
                        contrasted remarkably.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="5" style={{
  visibility: 'visible',
  opacity: '1',
  transitionBehavior: 'normal, normal, normal',
  transitionTimingFunction: 'ease, cubic-bezier(0.6, 0.2, 0.1, 1), cubic-bezier(0.6, 0.2, 0.1, 1)',
  transitionDelay: '0s, 0s, 0s',
  left: '0%',
  top: '569px'
}}
>
                <div className="image">
                  <div className="owl-carousel owl-theme owl-loaded owl-drag">





                    <div className="owl-stage-outer"><div className="owl-stage" style={{
  transform: 'translate3d(-2420px, 0px, 0px)',
  transition: '0.25s',
  width: '6655px'
}}
><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item active" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div></div>
                </div>
                <div className="content-box">
                  <a href="#popup-4" className="name has-popup">NIKE</a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="pricing">
                    <a href="javascript:void(0)">Rs.2000</a>
                    <del>Rs.2000</del>
                  </div>
                  <a href="javascript:void(0)" className="product-link">https://www.troology.com/</a>
                  <div className="service-bts">
                    <a href="#popup-4" className="btn btn_animated has-popup"><span className="circle">View
                      detail</span></a>
                    <a href="#popup-4" className="btn extra contact-btn btn_animated has-popup"><span className="circle">Enquiry</span></a>
                  </div>

                </div>
                <div id="popup-4" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <div className="owl-carousel owl-theme owl-loaded owl-drag">





                        <div className="owl-stage-outer"><div className="owl-stage" style={{
  transform: 'translate3d(0px, 0px, 0px)',
  transition: 'all'
}}
><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div></div>
                    </div>
                    <div className="desc">
                      <h4>Nike</h4>
                      <p>So striking at of to welcomed resolved. Northward by described up household
                        therefore attention. Excellence decisively nay man yet impression for
                        contrasted remarkably.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="6" style={{
  visibility: 'visible',
  opacity: '1',
  transitionBehavior: 'normal, normal, normal',
  transitionTimingFunction: 'ease, cubic-bezier(0.6, 0.2, 0.1, 1), cubic-bezier(0.6, 0.2, 0.1, 1)',
  transitionDelay: '0s, 0s, 0s',
  left: '0%',
  top: '1117px'
}}
>
                <div className="image">
                  <div className="owl-carousel owl-theme owl-loaded owl-drag">





                    <div className="owl-stage-outer"><div className="owl-stage" style={{
  transform: 'translate3d(-2420px, 0px, 0px)',
  transition: '0.25s',
  width: '6655px'
}}
><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item active" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item"><img src="images/works/product.jpg" alt="" /></div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div></div>
                </div>
                <div className="content-box">
                  <a href="#popup-4" className="name has-popup">NIKE</a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="pricing">
                    <a href="javascript:void(0)">Rs.2000</a>
                    <del>Rs.2000</del>
                  </div>
                  <a href="javascript:void(0)" className="product-link">https://www.troology.com/</a>
                  <div className="service-bts">
                    <a href="#popup-4" className="btn btn_animated has-popup"><span className="circle">View
                      detail</span></a>
                    <a href="#popup-4" className="btn extra contact-btn btn_animated has-popup"><span className="circle">Enquiry</span></a>
                  </div>

                </div>
                <div id="popup-4" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <div className="owl-carousel owl-theme owl-loaded owl-drag">





                        <div className="owl-stage-outer"><div className="owl-stage" style={{
  transform: 'translate3d(0px, 0px, 0px)',
  transition: 'all'
}}
><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div><div className="owl-item"><div className="item"><img src="images/works/product.jpg" alt="" /></div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div></div>
                    </div>
                    <div className="desc">
                      <h4>Nike</h4>
                      <p>So striking at of to welcomed resolved. Northward by described up household
                        therefore attention. Excellence decisively nay man yet impression for
                        contrasted remarkably.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="clear"></div>
          </section>

          {/* <!-- Offers --> */}
          <section className="section works" id="Offers-section">
            <div className="title">Offers</div>
            <h4 className="Offers-content">Coming Soon</h4>
            <div className="clear"></div>
          </section>

          {/* <!-- Gallery --> */}
          <section className="section works" id="Gallery-section">
            <div className="title">Image Gallery</div>
            <div className="row box-items" style={{
  position: 'relative',
  height: '1555.5px'
}}
>
              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="7" style={{
  visibility: 'visible',
  transform: 'translateY(0px) scale(1)',
  opacity: '1',
  transition: 'all 0.5s cubic-bezier(0.6, 0.2, 0.1, 1), transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1), opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1)',
  left: '0%',
  top: '0px'
}}
>
                <div className="image">
                  <a href="#popup-5" className="has-popup"><img src="images/works/gallery-img-1.jpg" alt="" /></a>
                </div>
                <div className="content-box">
                  <a href="#popup-5" className="name has-popup">Magnet</a>

                </div>
                <div id="popup-5" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/gallery-img-1.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h3 className="mr">Magnet</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="8" style={{
  visibility: 'visible',
  opacity: '1',
  transitionBehavior: 'normal, normal, normal',
  transitionTimingFunction: 'ease, cubic-bezier(0.6, 0.2, 0.1, 1), cubic-bezier(0.6, 0.2, 0.1, 1)',
  transitionDelay: '0s, 0s, 0s',
  left: '0%',
  top: '508px'
}}
>
                <div className="image">
                  <a href="#popup-6" className="has-popup"><img src="images/works/gallery-img-2.jpg" alt="" /></a>
                </div>
                <div className="content-box">
                  <a href="#popup-6" className="name has-popup">Magnet</a>

                </div>
                <div id="popup-6" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/gallery-img-2.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h3 className="mr">Magnet</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="9" style={{
  visibility: 'visible',
  opacity: '1',
  transitionBehavior: 'normal, normal, normal',
  transitionTimingFunction: 'ease, cubic-bezier(0.6, 0.2, 0.1, 1), cubic-bezier(0.6, 0.2, 0.1, 1)',
  transitionDelay: '0s, 0s, 0s',
  left: '0%',
  top: '1017px'
}}
>
                <div className="image">
                  <a href="#popup-7" className="has-popup"><img src="images/works/gallery-img-3.jpg" alt="" /></a>
                </div>
                <div className="content-box">
                  <a href="#popup-7" className="name has-popup">Magnet</a>

                </div>
                <div id="popup-7" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/gallery-img-3.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <h3 className="mr">Magnet</h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* <!-- ---------video Gallery----------- --> */}

            <div className="title">Video Gallery</div>
            <div className="row box-items" style={{
  position: 'relative',
  height: '1044px'
}}
>
              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="10" style={{
  visibility: 'visible',
  transform: 'translateY(0px) scale(1)',
  opacity: '1',
  transition: 'all 0.5s cubic-bezier(0.6, 0.2, 0.1, 1), transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1), opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1)',
  left: '0%',
  top: '0px'
}}
>
                <div className="image">
                  <a href="#popup-8" className="has-popup">
                    <iframe className="vedioCard" src="https://www.youtube.com/embed/k5E2AVpwsko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                  </a>
                </div>
                <div className="content-box">
                  <a href="#popup-8" className="name has-popup">Magnet</a>

                </div>
                <div id="popup-8" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <iframe className="vedioCard" height="323px" src="https://www.youtube.com/embed/k5E2AVpwsko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    </div>
                    <div className="desc">
                      <h3 className="mr">Magnet</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="11" style={{
  visibility: 'visible',
  opacity: '1',
  transitionBehavior: 'normal, normal, normal',
  transitionTimingFunction: 'ease, cubic-bezier(0.6, 0.2, 0.1, 1), cubic-bezier(0.6, 0.2, 0.1, 1)',
  transitionDelay: '0s, 0s, 0s',
  left: '0%',
  top: '338px'
}}
>
                <div className="image">
                  <a href="#popup-9" className="has-popup">
                    <iframe className="vedioCard" src="https://www.youtube.com/embed/k5E2AVpwsko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                  </a>
                </div>
                <div className="content-box">
                  <a href="#popup-9" className="name has-popup">Magnet</a>

                </div>
                <div id="popup-9" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <iframe className="vedioCard" src="https://www.youtube.com/embed/k5E2AVpwsko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    </div>
                    <div className="desc">
                      <h3 className="mr">Magnet</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 box-item f-mockup animated" data-sr-id="12" style={{
  visibility: 'visible',
  opacity: '1',
  transitionBehavior: 'normal, normal, normal',
  transitionTimingFunction: 'ease, cubic-bezier(0.6, 0.2, 0.1, 1), cubic-bezier(0.6, 0.2, 0.1, 1)',
  transitionDelay: '0s, 0s, 0s',
  left: '0%',
  top: '676px'
}}
>
                <div className="image">
                  <a href="#popup-10" className="has-popup">
                    <iframe className="vedioCard" src="https://www.youtube.com/embed/k5E2AVpwsko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                  </a>
                </div>
                <div className="content-box">
                  <a href="#popup-10" className="name has-popup">Magnet</a>

                </div>
                <div id="popup-10" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <iframe className="vedioCard" src="https://www.youtube.com/embed/k5E2AVpwsko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    </div>
                    <div className="desc">
                      <h3 className="mr">Magnet</h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* <!-- ---------Imp links----------- --> */}
            <div className="title">Important Links</div>
            <div className="row box-items" style={{
  position: 'relative',
  height: '30px'
}}
>
              <div className="col col-m-12 col-t-6 col-d-4 ">
                <div className="imp-link">
                  <div>
                    <img src="images/works/word.png" alt="" />
                    <a href="javascript:void(0)" target="_blank">Link Name
                      1</a>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 ">
                <div className="imp-link">
                  <div><img src="images/works/excel.png" alt="" /><a href="javascript:void(0)" target="_blank">Link Name
                    2</a></div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 ">
                <div className="imp-link">
                  <div><img src="images/works/powerpoint.png" alt="" /><a href="javascript:void(0)" target="_blank">Link
                    Name 3</a></div>
                </div>
              </div>

            </div>
            <div className="row box-items" style={{
  position: 'relative',
  height: '30px'
}}
>
              <div className="col col-m-12 col-t-6 col-d-4 ">
                <div className="imp-link">
                  <div><img src="images/works/pdf.png" alt="" /><a href="javascript:void(0)" target="_blank">Link Name 4</a>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 ">
                <div className="imp-link">
                  <div><img src="images/works/csv.png" alt="" /><a href="javascript:void(0)" target="_blank">Link Name 5</a>
                  </div>
                </div>
              </div>

              <div className="col col-m-12 col-t-6 col-d-4 ">
                <div className="imp-link">
                  <div><img src="images/works/link_ico.png" alt="" /><a href="javascript:void(0)" target="_blank">Link Name
                    6</a></div>
                </div>
              </div>

            </div>
            <div className="clear"></div>
          </section>

          {/* <!-- Section Testimonials --> */}
          <section className="section clients" id="clients-section">
            <div className="title">Testimonials</div>
            <div className="reviews-carousel animated" data-sr-id="13" style={{
  visibility: 'visible',
  WebkitTransform: 'translateY(0) scale(1)',
  transform: 'translateY(0) scale(1)',
  opacity: '1',
  WebkitTransition: 'all 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, -webkit-transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s',
  transition: 'all 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s'
}}
>
              <div className="owl-carousel owl-loaded owl-drag">



                <div className="owl-stage-outer"><div className="owl-stage" style={{
  transform: 'translate3d(-2420px, 0px, 0px)',
  transition: '0.25s',
  width: '4235px'
}}
><div className="owl-item cloned" style={{width: "605px"}}><div className="item">
                  <div className="content-box">
                    <div className="reviews-item">
                      <div className="image"><img src={profile} alt="" /></div>
                      <div className="name">— Shahista Naaz, Front-end Developer</div>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum
                        venenatis vestibulum elit ultricies.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis. Vestibulum posuere molestie ipsum vel."
                      </p>
                    </div>
                  </div>
                </div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item">
                  <div className="content-box">
                    <div className="reviews-item">
                      <div className="image"><img src={profile} alt="" /></div>
                      <div className="name">— Shahista Naaz, Front-end Developer</div>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum
                        venenatis vestibulum elit ultricies.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis."
                      </p>
                    </div>
                  </div>
                </div></div><div className="owl-item" style={{width: "605px"}}><div className="item">
                  <div className="content-box">
                    <div className="reviews-item">
                      <div className="image"><img src={profile} alt="" /></div>
                      <div className="name">— Shahista Naaz, Front-end Developer</div>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum
                        venenatis vestibulum elit ultricies.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis."
                      </p>
                    </div>
                  </div>
                </div></div><div className="owl-item" style={{width: "605px"}}><div className="item">
                  <div className="content-box">
                    <div className="reviews-item">
                      <div className="image"><img src={profile} alt="" /></div>
                      <div className="name">— Shahista Naaz, Front-end Developer</div>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum
                        venenatis vestibulum elit ultricies.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis. Vestibulum posuere molestie ipsum vel."
                      </p>
                    </div>
                  </div>
                </div></div><div className="owl-item active" style={{width: "605px"}}><div className="item">
                  <div className="content-box">
                    <div className="reviews-item">
                      <div className="image"><img src={profile} alt="" /></div>
                      <div className="name">— Shahista Naaz, Front-end Developer</div>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum
                        venenatis vestibulum elit ultricies.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis."
                      </p>
                    </div>
                  </div>
                </div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item">
                  <div className="content-box">
                    <div className="reviews-item">
                      <div className="image"><img src={profile} alt="" /></div>
                      <div className="name">— Shahista Naaz, Front-end Developer</div>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum
                        venenatis vestibulum elit ultricies.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis."
                      </p>
                    </div>
                  </div>
                </div></div><div className="owl-item cloned" style={{width: "605px"}}><div className="item">
                  <div className="content-box">
                    <div className="reviews-item">
                      <div className="image"><img src={profile} alt="" /></div>
                      <div className="name">— Shahista Naaz, Front-end Developer</div>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis. Vestibulum posuere molestie ipsum vel. Vestibulum
                        venenatis vestibulum elit ultricies.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
                        tortor ac tincidunt. In euismod
                        iaculis lobortis. Vestibulum posuere molestie ipsum vel."
                      </p>
                    </div>
                  </div>
                </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div></div>
            </div>
          </section>

          {/* <!-- Section Contacts --> */}
          <section className="section contacts" id="payments-section">
            <div className="title">Payments</div>
            <div className="row">
              <div className="col col-m-12 col-t-6 col-d-6">
                <div className="content-box animated" data-sr-id="14" style={{
  visibility: 'visible',
  transform: 'translateY(0) scale(1)',
  opacity: 1,
  WebkitTransform: 'translateY(0) scale(1)',
  WebkitOpacity: 1,
  transition: 'all 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s'
}}
>
                  <div className="info-list">
                    <ul>
                      <li><strong><span>Bank Name:</span></strong> Bank of Maharashtra</li>
                      <li><strong><span>Account Name:</span></strong> Shahista Naaz</li>
                      <li><strong><span>IFSC Code:</span></strong>PUNB0733600</li>
                      <li><strong><span>PAN Card No:</span></strong>AAAAA7777A</li>
                      <li><strong><span>Account Type:</span></strong> Savings Account</li>
                      <li><strong><span>Account No:</span></strong>XXXXXXXXXX</li>
                      <li><strong><span>GST No.:</span></strong>07AAACP0165G2ZQ</li>
                      <li><strong><span>Remark:</span></strong>Is it possible to reverse funds
                        transferred to the wrong account.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-m-12 col-t-6 col-d-6">
                <div className="content-box animated upi-img" data-sr-id="15" style={{
  visibility: 'visible',
  transform: 'translateY(0) scale(1)',
  opacity: 1,
  WebkitTransform: 'translateY(0) scale(1)',
  WebkitOpacity: 1,
  transition: 'all 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s',
  WebkitTransition: 'all 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, -webkit-transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s'
}}
>
                  <h5>UPI Image</h5>
                  <img src={qr} alt="" />
                </div>
              </div>
            </div>
          </section>

        </div>
        {/* footer */}
        <footer className="footerSec">
          <div className="bts">
            <a href="#popup-form" className="btn extra btn_animated has-popup"><span className="circle"><span className="ink animate" style={{
  height: '155px',
  width: '155px',
  top: '-65.5px',
  left: '73.8125px'
}}
></span>Refer
              Business</span></a>


            <a href="javascript:void(0)" className="btn extra contact-btn btn_animated"><span className="circle"><span className="ink animate" style={{
  height: '107px',
  width: '107px',
  top: '-15.5px',
  left: '-36.4219px'
}}
></span>
              Enquiry</span></a>


            <a href="javascript:void(0)" className="btn extra contact-btn btn_animated"><span className="circle"><span className="ink animate" style={{
  height: '167px',
  width: '167px',
  top: '-80.5px',
  left: '34.2188px'
}}
></span>Save My Contact</span></a>

          </div>
        </footer>

      </div>























      {/* More content and sections... */}
      <button id="myBtn" onClick={myFunction}>
        see more
      </button>
      <span id="dots">...</span>
      <span id="more" style={{ display: 'none' }}>
        More content here.
      </span>
    </div>
  );
};

export default App;

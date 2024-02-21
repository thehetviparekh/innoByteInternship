import "./Landingpage.css";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link logotext" href="#"><img src="logo.svg"
                  alt=""></img><span>Lasles<b>VPN</b></span></a>
              </li>
              <div className="navitems">
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#plans">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">Testimonials</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">Help</a>
                </li>
              </div>
            </ul>
            <div className="btn">
              <a href="#">Sign In</a>
              <button type="button" className="btn btn-outline-danger" id="signupbtn">Sign Up</button>
            </div>
          </div>
        </nav>

      </header>

      <main>
        <section id="about">
          <div className="about">
            <div className="about_text">
              <h3 className="about_head">Want anything to be easy with <span id="logotxt">LaslesVPN.</span></h3>
              <p className="about_desc">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b>
                discover
                interesting features from us.
              </p>

              <button className="getstarted-btn">Get Started</button>
              <div className="emptydiv-shadow"></div>
            </div>
            <div className="about_img">
              <img src="about.png" alt=""></img>
            </div>
          </div>

          <div className="user_box">
            <div className="one">
              <img src="iconuser.svg" alt="User Icon"></img>
              <div className="text_of_userbox">
                <span className="count">90+</span>
                <span>Users</span>
              </div>
              <img className="sep_line" src="sep-line.svg" alt="Arrow Right"></img>
            </div>
            <div className="one">
              <img src="iconlocation.svg" alt="User Icon"></img>
              <div className="text_of_userbox">
                <span className="count">30+</span>
                <span>Locations</span>
              </div>
              <img className="sep_line" src="sep-line.svg" alt="Arrow Right"></img>
            </div>
            <div className="one">
              <img src="iconserver.svg" alt="User Icon"></img>
              <div className="text_of_userbox">
                <span className="count">50+</span>
                <span>Servers</span>
              </div>
            </div>
          </div>

          <div className="shadowbox"></div>
        </section>

        <section id="features">
          <div className="about features">
            <div className="about_img">
              <img src="feautures.png" alt=""></img>
            </div>
            <div className="about_text feature_text">
              <h3 className="feature_title">We Provide Many Features You Can Use</h3>
              <p className="about_desc feature_desc">You can explore the features that we provide with fun and have
                their own
                functions each feature.</p>
              <div className="feature_list">
                <ul>
                  <li>
                    <img src="greencheck.svg" alt=""></img>
                    Powerfull online protection.
                  </li>
                  <li>
                    <img src="greencheck.svg" alt=""></img>
                    Internet without borders.
                  </li>
                  <li>
                    <img src="greencheck.svg" alt=""></img>
                    Supercharged VPN
                  </li>
                  <li>
                    <img src="greencheck.svg" alt=""></img>
                    No specific time limits.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="plans">
          <div className="plans">
            <div className="plan_head">
              <h3 className="title">
                Choose Your Plan
              </h3>
              <p className="desc">
                Let's choose the package that is best for you and explore it happily and cheerfully.
              </p>
            </div>
            <div className="plan_boxes">
              <div className="plan_single_box">
                <img src="planbox.png" alt=""></img>
                <h5 className="plan_type">Free Plan</h5>
                <div>
                  <ul>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Unlimited Bandwitch
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Encrypted Connection
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      No Traffic Logs
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Works on All Devices
                    </li>
                  </ul>
                </div>
                <div className="plan_price">Free</div>
                <button type="button" className="btn btn-outline-danger">Select</button>

              </div>
              <div className="plan_single_box">
                <img src="planbox.png" alt=""></img>
                <h5 className="plan_type">Standard Plan</h5>
                <div>
                  <ul>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Unlimited Bandwitch
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Encrypted Connection
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      No Traffic Logs
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Works on All Devices
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Connect Anyware
                    </li>
                  </ul>
                </div>
                <div className="plan_price">$9 <span>/ mo</span></div>
                <button type="button" className="btn btn-outline-danger">Select</button>
              </div>
              <div className="plan_single_box .plan_selected">
                <img src="planbox.png" alt=""></img>
                <h5 className="plan_type">Premium Plan</h5>
                <div>
                  <ul>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Unlimited Bandwitch
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Encrypted Connection
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      No Traffic Logs
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Works on All Devices
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Connect Anyware
                    </li>
                    <li>
                      <img src="plancheck.svg" alt=""></img>
                      Get New Features
                    </li>
                  </ul>
                </div>
                <div className="plan_price">$12 <span>/ mo</span></div>
                <button type="button" className="btn btn-outline-danger">Select</button>

              </div>
            </div>

          </div>
        </section>

        <section id="location">
          <div className="location">
            <div className="location_head">
              <h3 className="title">
                Huge Global Network of Fast VPN
              </h3>
              <p className="desc">
                See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.
              </p>
            </div>
            <div className="map_image">
              <img src="huge-global.svg" alt=""></img>
            </div>
            <div className="sponsard_image">
              <img src="sponsored.png" alt=""></img>
            </div>
          </div>
        </section>

        <section id="testimonial">
          <div className="testmonial">
            <div className="testimonial_head">
              <div className="testimonial_head">
                <h3 className="title">
                  Trusted by Thousands of Happy Customer
                </h3>
                <p className="desc">
                  These are the stories of our customers who have joined us with great pleasure when using
                  this crazy feature.
                </p>
              </div>
            </div>
            <div className="testimonial_cards">
              <div className="single_card">
                <div className="img_txt_star">
                  <img src="first-review.png" alt=""></img>
                  <div className="name">
                    <span>Viezh Robert</span>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="rating">4.5<img src="star-review.svg" alt=""></img></div>
                </div>
                <div className="review">
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and
                  so far there have been no problems. LaslesVPN always the best”.
                </div>
              </div>
              <div className="single_card">
                <div className="img_txt_star">
                  <img src="second-Review.png" alt=""></img>
                  <div className="name">
                    <span>Yessica Christy</span>
                    <p>Shanxi, China</p>
                  </div>
                  <div className="rating">4.5<img src="star-review.svg" alt=""></img></div>
                </div>
                <div className="review">
                  “I like it because I like to travel far and still can connect with high speed.”
                </div>
              </div>
              <div className="single_card">
                <div className="img_txt_star">
                  <img src="third-review.png" alt="" id="resize_img"></img>
                  <div className="name">
                    <span>Kim Young Jou</span>
                    <p>Seoul, South Korea</p>
                  </div>
                  <div className="rating">4.5<img src="star-review.svg" alt=""></img></div>
                </div>
                <div className="review">
                  “This is very unusual for my business that currently requires a virtual private network that
                  has high security.”.
                </div>
              </div>
            </div>
            <div className="points_btns">
              <div className="points">
                <img className="union-icon" alt="" src="points.svg"></img>
                <div className="ellipse-div"></div>
                <div className="ellipse-div"></div>
                <div className="ellipse-div"></div>
              </div>
              <div className="left_right">
                <img src="left-button.svg" alt=""></img>
                <img src="right-button.svg" alt=""></img>
              </div>
            </div>
          </div>
        </section>

        <div className="subscribe">
          <div className="subscribe_text">
            <h4 className="subscribe_head">
              Subscribe Now for Get Special Features!
            </h4>
            <p className="subscribe_desc">
              Let's subscribe with us and find the fun
            </p>

          </div>
          <div className="subscribe_button">
            <button className="getstarted-btn">Subscribe Now</button>
            <div className="emptydiv-shadow"></div>
          </div>
        </div>
      </main>

      <footer>
        <section id="footer">
          <div className="footer">
            <div className="footer_items">
              <div className="logoandlinks">
                <li className="nav-item active">
                  <a className="nav-link logotext" href="#"><img src="logo.svg"
                    alt=""></img><span>Lasles<b>VPN</b></span></a>
                </li>
                <p className="desc"><span id="bold">LaslesVPN</span> is a private virtual network that has unique
                  features and has high
                  security
                </p>
                <div className="icons">
                  <img src="facebook.svg" alt=""></img>
                  <img src="twitter.svg" alt=""></img>
                  <img src="instagram.svg" alt=""></img>
                </div>
                <p className="textlowopacity">
                  ©2020LaslesVPN
                </p>
              </div>
              <div className="footer_subitems">
                <div className="lists">
                  <ul>
                    <li className="list_head">Product</li>
                    <li className="listitems">Download</li>
                    <li className="listitems">Pricing</li>
                    <li className="listitems">Locations</li>
                    <li className="listitems">Server</li>
                    <li className="listitems">Countries</li>
                    <li className="listitems">Blog</li>
                  </ul>
                </div>
                <div className="lists">
                  <ul>
                    <li className="list_head">Engage</li>
                    <li className="listitems">LaslesVPN ?</li>
                    <li className="listitems">FAQ</li>
                    <li className="listitems">Tutorials</li>
                    <li className="listitems">About Us</li>
                    <li className="listitems">Privacy Policy</li>
                    <li className="listitems">Terms of Service</li>
                  </ul>
                </div>
                <div className="lists">
                  <ul>
                    <li className="list_head">Earn Money</li>
                    <li className="listitems">Affiliate</li>
                    <li className="listitems">Become Partner</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div >
  );
};

export default Landingpage;
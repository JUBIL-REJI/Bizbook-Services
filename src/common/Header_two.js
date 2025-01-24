import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header_two() {
  const banner = {
    backgroundImage: "url(images/promo.jpg)",
  };

  const [isClicked, setIsClicked] = useState(false);

  const navClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="Header">
      <div className="str">
        <div className={"hom-top-two"}>
          <div className="container">
            <div className="row">
              <div className="hom-nav  db-open ">
                <a href="index.html" className="top-log">
                  <Link to="/Main">
                    <img src="images/home/logo-b.png" alt="" className="ic-logo" />
                  </Link>
                </a>
                <div
                  className={isClicked ? "menu ani" : "menu"}
                  onClick={navClick}
                >
                  <h4>All Category</h4>
                </div>
                <div
                  className={isClicked ? "pop-menu ani" : "pop-menu"}
                  onClick={navClick}
                >
                  <div className="container">
                    <div className="row">
                      
                      <i className="material-icons clopme">close</i>
                      <div className="pmenu-spri">
                        <ul>
                          <li>
                            <Link to="/service">
                              <img src="images/icon/shop.png" alt="" />
                              All Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/Events">
                              <img src="images/icon/calendar.png" alt="" />
                              Events
                            </Link>
                          </li>
                          <li>
                            <Link to="/Products">
                              <img src="images/icon/cart.png" alt="" />
                              Products
                            </Link>
                          </li>
                          <li>
                            <Link to="/Coupons">
                              <img src="images/icon/coupons.png" alt="" />
                              Coupon & deals
                            </Link>
                          </li>
                          <li>
                            <Link to="/Blogs">
                              <img src="images/icon/blog1.png" alt="" />
                              Blogs
                            </Link>
                          </li>
                          <li>
                            <Link to="/Community">
                              <img src="images/icon/11.png" alt="" />
                              Community
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="pmenu-cat">
                        <h4>All Categories</h4>
                        <input
                          type="text"
                          id="pg-sear"
                          placeholder="Search category"
                        />
                        <ul id="pg-resu">
                          <li>
                            <Link to="/Halls">
                              Wedding halls - <span>03</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Hotel & Food - <span>01</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Pet shop - <span>12</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Digital Products - <span>31</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Spa and Facial - <span>10</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Real Estate - <span>23</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Sports - <span>05</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Education - <span>02</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Electricals - <span>05</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Automobiles - <span>06</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Transportation - <span>02</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Hospitals - <span>08</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Halls">
                              Hotels And Resorts - <span>09</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="dir-home-nav-bot">
                        <ul>
                          <li>
                            A few reasons you’ll love Online Business Directory
                            <span>Call us on: +01 6214 6548</span>
                          </li>
                          <li>
                            <a
                              href="post-your-ads.html.html"
                              className="waves-effect waves-light btn-large"
                            >
                              <i className="material-icons">font_download</i>
                              Advertise with us
                            </a>
                          </li>
                          <li>
                            <a
                              href="pricing-details.html.html"
                              className="waves-effect waves-light btn-large"
                            >
                              
                              <i className="material-icons">store</i> Add your
                              business
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--END MOBILE MENU--> */}
                <div className="top-ser">
                  <form name="filter_form" id="filter_form" className="filter_form">
                    <ul>
                      <li className="sr-sea">
                        {/* <!--                                            <input type="text"  id="-->
												<!--" className="autocomplete"-->
												<!--                                                   placeholder="-->
												<!--">--> */}
                        <input
                          type="text"
                          autocomplete="off"
                          id="top-select-search"
                          placeholder="Search for services and business..."
                        />
                        <ul id="tser-res1" className="tser-res tser-res2">
                          <li>
                            <div>
                              <h4>The Royal Spa Center For Womens</h4>
                              <span>
                                No:2, 4th Avenue, Newyork, USA, Near to Airport
                              </span>
                              <a href="all-listing.html"></a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h4>Real estate</h4>
                              <span>Chennai, India</span>
                              <a href="all-listing.html"></a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h4>Education</h4>
                              <span>
                                Schools, university, colleges, online classes,
                                tution centers, distance education..
                              </span>
                              <a href="all-listing.html"></a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h4>Hotel and resort booking</h4>
                              <span>
                                hotel booking online, hotel reservation, holiday
                                room booking
                              </span>
                              <a href="all-listing.html"></a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h4>Import and export</h4>
                              <span>
                                Import and export to other countrys with low
                                cost
                              </span>
                              <a href="all-listing.html"></a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h4>Properties in Illunois</h4>
                              <span>Villas, Plots, House rent and buy</span>
                              <a href="all-listing.html"></a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h4>Schools in Adyar</h4>
                              <span>schools, adyar, education, </span>
                              <a href="all-listing.html"></a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h4>Laptop services near you</h4>
                              <span>laptop services, computer services</span>
                              <a href="all-listing.html"></a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h4>Hospital and medical services near you</h4>
                              <span>
                                Hospital and medical services near you
                              </span>
                              <a href="all-listing.html"></a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="sbtn">
                        <button
                          type="button"
                          className="btn btn-success"
                          id="top_filter_submit"
                        >
                          <i className="material-icons">&nbsp;</i>
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className="al">
                  <Link to="/Dashboard">
                    <div className="head-pro">
                      <img src="images/user/62736rn53themes.png" alt="" />
                      <b>Profile by</b>
                      <br />
                      <h4>Rn53 Themes</h4>
                      <a href="dashboard.html" className="fclick"></a>
                    </div>
                  </Link>
                  <div className="db-menu">
                    <ul>
                      <li>
                        <Link to="/Dashboard">
                          
                          <img src="images/icon/dbl1.png" alt="" />
                          My Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/All_Listing">
                          <img src="images/icon/dbl7.png" alt="" />
                          All Listings
                        </Link>
                      </li>
                      <li>
                        <Link to="/AddNewListing">
                          <img src="images/icon/dbl3.png" alt="" />
                          Add New Listing
                        </Link>
                      </li>
                      <li>
                        <Link to="/AllProducts">
                          <img src="images/icon/dbl14.png" alt="" />
                          Lead enquiry
                        </Link>
                      </li>
                      <li>
                        <Link to="/MyEvents">
                          <img src="images/icon/dbl4.png" alt="" />
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link to="/BlogPost">
                          <img src="images/icon/dbl10.png" alt="" />
                          Blog posts
                        </Link>
                      </li>
                      <li>
                        <a href="db-review.html">
                          <img src="images/icon/dbl13.png" alt="" />
                          Reviews
                        </a>
                      </li>
                      <li>
                        <a href="db-my-profile.html">
                          <img src="images/icon/dbl6.png" alt="" />
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="images/icon/dbl12.png" alt="" />
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!--MOBILE MENU--> */}
                <div className="mob-menu">
                  <div className="mob-me-ic">
                    <i className="material-icons">menu</i>
                  </div>
                  <div className="mob-me-all">
                    <div className="mob-me-clo">
                      <i className="material-icons">close</i>
                    </div>
                    <div className="mv-pro ud-lhs-s1">
                      <img src="images/user/62736rn53themes.png" alt="" />
                      <h4>Rn53 Themes</h4>
                      <b>Join on 26, Mar 2021</b>
                    </div>
                    <div className="mv-pro-menu ud-lhs-s2">
                      <ul>
                        <li>
                          <a href="dashboard.html" className="">
                            <img src="images/icon/dbl1.png" alt="" />
                            My Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="db-all-listing.html" className="">
                            <img src="images/icon/shop.png" alt="" />
                            All Listings
                          </a>
                        </li>
                        <li>
                          <a href="add-listing-start.html">
                            <img src="images/icon/dbl3.png" alt="" />
                            Add New Listing
                          </a>
                        </li>
                        <li>
                          <a href="db-enquiry.html" className="">
                            <img src="images/icon/tick.png" alt="" />
                            Lead enquiry
                          </a>
                        </li>
                        <li>
                          <a href="db-products.html" className="">
                            <img src="images/icon/cart.png" alt="" />
                            All Products
                          </a>
                        </li>
                        <li>
                          <a href="db-events.html" className="">
                            <img src="images/icon/calendar.png" alt="" />
                            Events
                          </a>
                        </li>
                        <li>
                          <a href="db-blog-posts.html" className="">
                            <img src="images/icon/blog1.png" alt="" />
                            Blog posts
                          </a>
                        </li>
                        <li>
                          <a href="db-coupons.html" className="">
                            <img src="images/icon/coupons.png" alt="" />
                            Coupons
                          </a>
                        </li>
                        <li>
                          <a href="db-promote.html" className="">
                            <img src="images/icon/promotion.png" alt="" />
                            Promotions
                          </a>
                        </li>
                        <li>
                          <a href="db-seo.html" className="">
                            <img src="images/icon/seo.png" alt="" />
                            SEO
                          </a>
                        </li>
                        <li>
                          <a href="db-review.html" className="">
                            <img src="images/icon/dbl13.png" alt="" />
                            Reviews
                          </a>
                        </li>
                        <li>
                          <a href="db-message.html" className="">
                            <img src="images/icon/dbl14.png" alt="" />
                            Messages
                          </a>
                        </li>
                        <li>
                          <a href="db-my-profile.html" className="">
                            <img src="images/icon/dbl6.png" alt="" />
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a href="db-like-listings.html" className="">
                            <img src="images/icon/dbl15.png" alt="" />
                            Liked Listings
                          </a>
                        </li>
                        <li>
                          <a href="db-followings.html" className="">
                            <img src="images/icon/dbl18.png" alt="" />
                            Followings
                          </a>
                        </li>
                        <li>
                          <a href="db-post-ads.html" className="">
                            <img src="images/icon/dbl11.png" alt="" />
                            Ad Summary
                          </a>
                        </li>
                        <li>
                          <a href="db-payment.html" className="">
                            <img src="images/icon/dbl9.png" alt="" />
                            Payment & plan
                          </a>
                        </li>
                        <li>
                          <a href="db-invoice-all.html" className="">
                            <img src="images/icon/dbl16.png" alt="" />
                            Payment invoice
                          </a>
                        </li>
                        <li>
                          <a href="db-notifications.html" className="">
                            <img src="images/icon/dbl19.png" alt="" />
                            Notifications
                          </a>
                        </li>
                        <li>
                          <a href="how-to.html" className="" target="_blank">
                            <img src="images/icon/dbl17.png" alt="" />
                            How to's
                          </a>
                        </li>
                        <li>
                          <a href="db-setting.html" className="">
                            <img src="images/icon/dbl210.png" alt="" />
                            Setting
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/icon/dbl12.png" alt="" />
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mv-cate">
                      <h4>All Categories</h4>
                      <ul>
                        <li>
                          
                          <a href="all-listing.html">Wedding halls</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Hotel & Food</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Pet shop</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Digital Products</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Spa and Facial</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Real Estate</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Sports</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Education</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Electricals</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Automobiles</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Transportation</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Hospitals</a>
                        </li>
                        <li>
                          
                          <a href="all-listing.html">Hotels And Resorts</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!--END MOBILE MENU--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_two;

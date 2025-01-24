import React from 'react'
import { Link } from 'react-router-dom'

function Marginleft() {
  return (
    <div>
      <div class="ud-lhs">
				<div class="ud-lhs-s1">
					<Link to="/MyProfile"><img src="images/user/62736rn53themes.png" alt=""/>
					<h4>Rn53 Themes</h4>
					<b>Join on 26, Mar 2021</b>
					<a class="ud-lhs-view-pro" target="_blank" href="profile.html">My profile</a></Link>
				</div>
				<div class="ud-lhs-s2">
					<ul>
						<li>
							
								<Link to="/Dashboard"><img src="images/icon/dbl1.png" alt="" />My Dashboard</Link>
						</li>
						<li>
							
                        <Link to="/All_listing"><img src="images/icon/shop.png" alt="" />All Listings</Link>
						</li>
						<li>
							
								<Link to="/AddNewListing"><img src="images/icon/dbl3.png" alt="" />Add New Listing</Link>
						</li>
						<li>
							
								<Link to="/Enquiry"><img src="images/icon/tick.png" alt="" />Lead enquiry</Link>
						</li>
						<li>
							
								<Link to="/AllProducts"><img src="images/icon/cart.png" alt="" />All Products</Link>
						</li>
						<li>
							
								<Link to="/MyEvents"><img src="images/icon/calendar.png" alt="" />Events</Link>
						</li>
						<li>
							
								<Link to="/BlogPost"><img src="images/icon/blog1.png" alt="" />Blog posts</Link>
						</li>
						<li>
							
								<Link to="/MyCoupons"><img src="images/icon/coupons.png" alt="" />Coupons</Link>
						</li>
						<li>
							
								<Link to="/Promotions"><img src="images/icon/promotion.png" alt="" />Promotions</Link>
						</li>
						<li>
							<a href="db-seo.html" class="">
								<img src="images/icon/seo.png" alt="" />SEO</a>
						</li>
						<li>
							<a href="db-point-history.html" class="">
								<img src="images/icon/point.png" alt="" />Points History</a>
						</li>
						<li>
							<a href="db-review.html" class="">
								<img src="images/icon/dbl13.png" alt="" />Reviews</a>
						</li>
						{/* <!--<li>
                        <a href="db-message" class=""><img src="images/icon/dbl14.png" alt="" />Messages</a>
                    </li>--> */}
						<li>
							<a href="db-my-profile.html" class="">
								<img src="images/icon/dbl6.png" alt="" />My Profile</a>
						</li>
						<li>
							<a href="db-like-listings.html" class="">
								<img src="images/icon/dbl15.png" alt="" />Liked Listings</a>
						</li>
						<li>
							<a href="db-followings.html" class="">
								<img src="images/icon/dbl18.png" alt="" />Followings</a>
						</li>
						<li>
							<a href="db-post-ads.html" class="">
								<img src="images/icon/dbl11.png" alt="" />Ad Summary</a>
						</li>
						<li>
							<a href="db-payment" class="">
								<img src="images/icon/dbl9.png" alt=""/>Payment & plan</a>
						</li>
						<li>
							<a href="db-invoice-all.html" class="">
								<img src="images/icon/dbl16.png" alt="" />Payment invoice</a>
						</li>
						<li>
							<a href="db-notifications.html" class="">
								<img src="images/icon/dbl19.png" alt="" />Notifications</a>
						</li>
						<li>
							<a href="how-to.html" class="" target="_blank">
								<img src="images/icon/dbl17.png" alt="" />How to's</a>
						</li>
						<li>
							<a href="db-setting.html" class="">
								<img src="images/icon/dbl210.png" alt="" />Setting</a>
						</li>
						<li>
							<a href="#">
								<img src="images/icon/dbl12.png" alt="" />Log Out</a>
						</li>
					</ul>
				</div>
			</div>

    </div>
  );
}

export default Marginleft;

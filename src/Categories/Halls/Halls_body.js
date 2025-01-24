import React from 'react'

function Halls_body() {
  return (

      
		<div class="all-listing all-listing-pg">
			{/* <!--FILTER ON MOBILE VIEW--> */}
			<div class="fil-mob fil-mob-act">
				<h4>Listing filters <i class="material-icons">filter_list</i></h4>
			</div>
			<div class="all-list-bre">
				<div class="container sec-all-list-bre">
					<div class="row">
						<h1>Real Estate</h1>
						<ul>
							<li><a href="index.html">Home</a>
							</li>
							<li><a href="all-category.html">All category</a>
							</li>
							<li> <a href="all-listing.html">Real Estate</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-3 fil-mob-view">
						<div class="all-filt"> <span class="fil-mob-clo"><i class="material-icons">close</i></span>
							{/* <!--START--> */}
							<div class="filt-alist-near">
								<div class="tit">
									<h4>Top Service Providers</h4>
								</div>
								<div class="near-ser-list top-ser-secti-prov">
									<ul>
										<li>
											<div class="near-bx">
												<div class="ne-1">
													<img src="images/services/1.jpg"/>
												</div>
												<div class="ne-2">
													<h5>Core real estates</h5>
													<p>City: No:2, 4th Avenue, Newyork, USA, Near to Airport</p>
												</div>
												<div class="ne-3"> <span>5.0</span>
												</div>
												<a href="listing-details.html"></a>
											</div>
										</li>
										<li>
											<div class="near-bx">
												<div class="ne-1">
													<img src="images/services/12.jpeg"/>
												</div>
												<div class="ne-2">
													<h5>Rolexo Villas in California</h5>
													<p>City: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
												</div>
												<div class="ne-3"> <span>4.0</span>
												</div>
												<a href="listing-details.html"></a>
											</div>
										</li>
										<li>
											<div class="near-bx">
												<div class="ne-1">
													<img src="images/services/13.jpg"/>
												</div>
												<div class="ne-2">
													<h5>Orange pet shop</h5>
													<p>City: No:2, 4th Avenue, Newyork, USA, Near to Airport</p>
												</div>
												<div class="ne-3"> <span>5.0</span>
												</div>
												<a href="listing-details.html"></a>
											</div>
										</li>
										<li>
											<div class="near-bx">
												<div class="ne-1">
													<img src="images/services/14.jpg"/>
												</div>
												<div class="ne-2">
													<h5>Best villas near you</h5>
													<p>City: No:2, 4th Avenue, Newyork, USA, Near to Airport</p>
												</div>
												<div class="ne-3"> <span>5.0</span>
												</div>
												<a href="listing-details.html"></a>
											</div>
										</li>
										<li>
											<div class="near-bx">
												<div class="ne-1">
													<img src="images/services/20.jpeg"/>
												</div>
												<div class="ne-2">
													<h5>Ac services near you</h5>
													<p>City: testapro 456</p>
												</div>
												<div class="ne-3"> <span>4.0</span>
												</div>
												<a href="listing-details.html"></a>
											</div>
										</li>
									</ul>
								</div>
							</div>
							{/* <!--END-->
							<!--START--> */}
							<div class="filt-com lhs-cate">
								<h4>Categories</h4>
								<div class="dropdown">
									<select class="chosen-select">
										<option value="">Select Category</option>
										<option value="1">Hotels And Resorts</option>
										<option value="15">Spa and Facial</option>
										<option value="16">Digital Products</option>
										<option value="17">Pet shop</option>
										<option value="18">Hotel & Food</option>
										<option value="19">Wedding halls</option>
										<option selected value="10">Real Estate</option>
										<option value="8">Sports</option>
										<option value="7">Education</option>
										<option value="3">Transportation</option>
										<option value="6">Electricals</option>
										<option value="5">Automobiles</option>
										<option value="2">Hospitals</option>
									</select>
								</div>
							</div>
							{/* <!--END-->
							<!--START--> */}
							<div class="sub_cat_section filt-com lhs-sub">
								<h4>Sub category</h4>
								<ul>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="22" id="Villas" />
											<label for="Villas">Villas</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="21" id="Indepentant House" />
											<label for="Indepentant House">Indepentant House</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="20" id="Plots and Lands" />
											<label for="Plots and Lands">Plots and Lands</label>
										</div>
									</li>
								</ul>
							</div>
							{/* <!--END-->
							<!--START--> */}
							<div class="filt-com lhs-featu">
								<h4>Features</h4>
								<ul>
									<li>
										<div class="chbox">
											<input type="checkbox" value="trusted" class="feature_check" id="trusted" />
											<label for="trusted">Trusted services provider</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" value="premium" class="feature_check" id="premium" />
											<label for="premium">Premium services</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" value="verified" class="feature_check" id="verified" />
											<label for="verified">Verified services</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" value="trending" class="feature_check" id="trending" />
											<label for="trending">Trending services</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" value="offers" class="feature_check" id="offers" />
											<label for="offers">Offers and discounts</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" value="latest" class="feature_check" id="latest" />
											<label for="latest">Latest updated</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" value="likes" class="feature_check" id="likes" />
											<label for="likes">Most likes</label>
										</div>
									</li>
								</ul>
							</div>
							{/* <!--END-->
							<!--START--> */}
							<div class="filt-com lhs-rati">
								<h4>Ratings</h4>
								<ul>
									<li>
										<div class="rbbox">
											<input type="radio" value="5" name="rating_check" class="rating_check" id="rb1" />
											<label for="rb1"> <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
											</label>
										</div>
									</li>
									<li>
										<div class="rbbox">
											<input type="radio" value="4" name="rating_check" class="rating_check" id="rb2" />
											<label for="rb2"> <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star_border</i>
											</label>
										</div>
									</li>
									<li>
										<div class="rbbox">
											<input type="radio" value="3" name="rating_check" class="rating_check" id="rb3" />
											<label for="rb3"> <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star_border</i>
												<i class="material-icons">star_border</i>
											</label>
										</div>
									</li>
									<li>
										<div class="rbbox">
											<input type="radio" value="2" name="rating_check" class="rating_check" id="rb4" />
											<label for="rb4"> <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star_border</i>
												<i class="material-icons">star_border</i>
												<i class="material-icons">star_border</i>
											</label>
										</div>
									</li>
									<li>
										<div class="rbbox">
											<input type="radio" value="1" name="rating_check" class="rating_check" id="rb5" />
											<label for="rb5"> <i class="material-icons">star</i>
												<i class="material-icons">star_border</i>
												<i class="material-icons">star_border</i>
												<i class="material-icons">star_border</i>
												<i class="material-icons">star_border</i>
											</label>
										</div>
									</li>
								</ul>
							</div>
							{/* <!--END-->
							<!--START--> */}
							<div class="filt-com lhs-ads">
								<ul>
									<li>
										<div class="ads-box">
											<a href=""> <span>Ad</span>
												<img src="images/ads/ads1.jpg" alt=""/>
											</a>
										</div>
									</li>
									{/* <!--                                    <li>-->
									<!--                                        <div class="ads-box">-->
									<!--                                            -->
									<!--                                            <a href="-->
									<!--">-->
									<!--                                                <span>Ad</span>-->
									<!---->
									<!--                                                <img-->
									<!--                                                    src="images/ads/-->
									<!--" alt="">-->
									<!--                                            </a>-->
									<!--                                        </div>-->
									<!--                                    </li>--> */}
								</ul>
							</div>
							{/* <!--END--> */}
							<div class="all-list-filt-form">
								<div class="tit">
									<h3>What service do you need? <span>BizBook will help you</span></h3>
								</div>
								<div class="hom-col-req">
									<div id="home_slide_enq_success" class="log" style={{display: "none"}}>
										<p>Your Enquiry Is Submitted Successfully!!!</p>
									</div>
									<div id="home_slide_enq_fail" class="log" style={{display: "none"}}>
										<p>Something Went Wrong!!!</p>
									</div>
									<div id="home_slide_enq_same" class="log" style={{display: "none"}}>
										<p>You cannot make enquiry on your own listing</p>
									</div>
									<form name="home_slide_enquiry_form" id="home_slide_enquiry_form" method="post" enctype="multipart/form-data">
										<input type="hidden" class="form-control" name="listing_id" value="0" placeholder="" required/>
										<input type="hidden" class="form-control" name="listing_user_id" value="0" placeholder="" required/>
										<input type="hidden" class="form-control" name="enquiry_sender_id" value="" placeholder="" required/>
										<input type="hidden" class="form-control" name="enquiry_source" value="Website" placeholder="" required/>
										<div class="form-group">
											<input type="text" name="enquiry_name" value="" required="required" class="form-control" placeholder="Enter name*"/>
										</div>
										<div class="form-group">
											<input type="email" class="form-control" placeholder="Enter email*" required="required" value="" name="enquiry_email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address"/>
										</div>
										<div class="form-group">
											<input type="text" class="form-control" value="" name="enquiry_mobile" placeholder="Enter mobile number *" pattern="[7-9]{1}[0-9]{9}" title="Phone number starting with 7-9 and remaing 9 digit with 0-9" required=""/>
										</div>
										<div class="form-group">
											<textarea class="form-control" rows="3" name="enquiry_message" placeholder="Enter your query or message"></textarea>
										</div>
										<input type="hidden" id="source"/>
										<button type="submit" id="home_slide_enquiry_submit" name="home_slide_enquiry_submit" class="btn btn-primary">Submit Requirements</button>
									</form>
								</div>
							</div>
							{/* <!-- END --> */}
						</div>
					</div>
					<div class="col-md-9">
						<div class="f2">
							<div class="vfilter"> <i class="material-icons ic1 " title="Grid view">apps</i>
								<i class="material-icons ic2 act" title="List view">format_list_bulleted</i>
								<i class="material-icons ic3" title="Map view">location_on</i>
							</div>
						</div>
						{/* <!-- LISTING INN FILTER --> */}
						<div class="list-filt-v2">
							<ul>
								<li>
									<div class="chbox">
										<input type="checkbox" name="lfv2-all" class="lfv2-all" value="1" id="lfv2-all" checked="checked" />
										<label for="lfv2-all">All</label>
									</div>
								</li>
								<li>
									<div class="chbox">
										<input type="checkbox" name="lfv2-pop" class="lfv2-pop" id="lfv2-pop" />
										<label for="lfv2-pop">Popular</label>
									</div>
								</li>
								<li>
									<div class="chbox">
										<input type="checkbox" name="lfv2-op" class="lfv2-op" id="lfv2-op" />
										<label for="lfv2-op">Open</label>
									</div>
								</li>
								<li>
									<div class="chbox">
										<input type="checkbox" name="lfv2-tru" class="lfv2-tru" id="lfv2-tru" />
										<label for="lfv2-tru">Verified</label>
									</div>
								</li>
								<li>
									<div class="chbox">
										<input type="checkbox" name="lfv2-near" class="lfv2-near" id="lfv2-near" />
										<label for="lfv2-near">Nearby</label>
									</div>
								</li>
								<li>
									<div class="chbox">
										<input type="checkbox" name="lfv2-off" class="lfv2-off" id="lfv2-off" />
										<label for="lfv2-off">Offers</label>
									</div>
								</li>
							</ul>
						</div>
						{/* <!-- END LISTING INN FILTER -->
						<!--ADS--> */}
						<div class="ban-ati-com ads-all-list"> 
                            <a href="https://themeforest.net/item/bizbook-directory-listings-template/25391222"><span>Ad</span><img src="images/ads/1.png" alt=""/>
                            </a>
						</div>
						{/* <!--ADS-->
						<!-- Loader Image --> */}
						<div id="loadingmessage" style={{display:"none"}}>
							<div id="loadingmessage1">&nbsp;</div>
						</div>
						{/* <!-- Loader Image --> */}
						<div class="all-list-sh all-listing-total">
							<ul>
								<li>
									<div class="eve-box">
										{/* <!---LISTING IMAGE---> */}
										<div class="al-img"> <span class="open-stat">open</span>
											<a href="listing-details.html">
                                                <img src="images/services/2.jpeg" alt=""/>
                                            </a>
										</div>
										{/* <!---END LISTING IMAGE--->
										<!---LISTING NAME---> */}
										<div>
											<h4>
                                                <a href="listing-details.html">Rolexo Villas in California</a>
                                                <i class="li-veri"><img src="images/icon/svg/verified.png" alt=""/></i>
                                            </h4>
											<label class="rat"> 
                                                <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
											</label> 
                                            <span class="addr">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span>
											<span class="pho">7904462944</span>
											<span class="mail">thedirectoryfinder@gmail.com</span>
											<div class="links">
                                                <a href="#" data-toggle="modal" data-target="#quote" class="quo">Get quote</a>
												<a href="">View more</a>
												<a href="Tel:7904462944">Call Now</a>
												<a href="https://wa.me/7904462944" class="what" target="_blank">WhatsApp</a>
											</div>
										</div>
										{/* <!---END LISTING NAME--->
										<!---SAVE---> */} 
                                        <span class="enq-sav" data-toggle="tooltip" title=" Click to like this listing">
                                        <i class="l-like sav-act"><img src="images/icon/svg/like.svg" alt=""/></i></span>
										{/* <!---END SAVE---> */}
									</div>
								</li>
                                <li>
									<div class="eve-box">
										{/* <!---LISTING IMAGE---> */}
										<div class="al-img"> <span class="open-stat">open</span>
											<a href="listing-details.html">
                                                <img src="images/services/24.jpg" alt=""/>
                                            </a>
										</div>
										{/* <!---END LISTING IMAGE--->
										<!---LISTING NAME---> */}
										<div>
											<h4>
                                                <a href="listing-details.html">Village food street</a>
                                                <i class="li-veri"><img src="images/icon/svg/verified.png" alt=""/></i>
                                            </h4>
											<label class="rat"> 
                                                <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
											</label> 
                                            <span class="addr">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span>
											<span class="pho">7904462944</span>
											<span class="mail">village@gmail.com</span>
											<div class="links"> 
                                                <a href="#" data-toggle="modal" data-target="#quote" class="quo">Get quote</a>
												<a href="">View more</a>
												<a href="Tel:7904462944">Call Now</a>
												<a href="https://wa.me/7904462944" class="what" target="_blank">WhatsApp</a>
											</div>
										</div>
										{/* <!---END LISTING NAME--->
										<!---SAVE--->  */}
                                        <span class="enq-sav" data-toggle="tooltip" title=" Click to like this listing">
                                        <i class="l-like sav-act"><img src="images/icon/svg/like.svg" alt=""/></i></span>
										{/* <!---END SAVE---> */}
									</div>
								</li>
                                <li>
									<div class="eve-box">
										{/* <!---LISTING IMAGE---> */}
										<div class="al-img"> <span class="open-stat">open</span>
											<a href="listing-details.html">
                                                <img src="images/services/21.jpg" alt=""/>
                                            </a>
										</div>
										{/* <!---END LISTING IMAGE--->
										<!---LISTING NAME---> */}
										<div>
											<h4>
                                                <a href="listing-details.html">Honey 2 massage & facial </a>
                                                <i class="li-veri"><img src="images/icon/svg/verified.png" alt=""/></i>
                                            </h4>
											<label class="rat"> 
                                                <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons ratstar">star</i>
											</label> 
                                            <span class="addr">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span>
											<span class="pho">7904462944</span>
											<span class="mail">village@gmail.com</span>
											<div class="links"> 
                                                <a href="#" data-toggle="modal" data-target="#quote" class="quo">Get quote</a>
												<a href="Tel:7904462944">Call Now</a>
												<a href="https://wa.me/7904462944" class="what" target="_blank">WhatsApp</a>
											</div>
										</div>
										{/* <!---END LISTING NAME--->
										<!---SAVE--->  */}
                                        <span class="enq-sav" data-toggle="tooltip" title=" Click to like this listing">
                                        <i class="l-like sav-act"><img src="images/icon/svg/like.svg" alt=""/></i></span>
										{/* <!---END SAVE---> */}
									</div>
								</li>
                                <li>
									<div class="eve-box">
										{/* <!---LISTING IMAGE---> */}
										<div class="al-img"> <span class="open-stat">open</span>
											<a href="listing-details.html">
                                                <img src="images/services/17.jpeg" alt=""/>
                                            </a>
										</div>
										{/* <!---END LISTING IMAGE--->
										<!---LISTING NAME---> */}
										<div>
											<h4>
                                                <a href="listing-details.html">Orange pet shops</a>
                                                <i class="li-veri"><img src="images/icon/svg/verified.png" alt=""/></i>
                                            </h4>
											<label class="rat"> 
                                                <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons ratstar">star</i>
											</label> 
                                            <span class="addr">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span>
											<span class="pho">7904462944</span>
											<span class="mail">orange@gmail.com</span>
											<div class="links"> 
                                                <a href="#" data-toggle="modal" data-target="#quote" class="quo">Get quote</a>
												<a href="Tel:7904462944">Call Now</a>
												<a href="https://wa.me/7904462944" class="what" target="_blank">WhatsApp</a>
											</div>
										</div>
										{/* <!---END LISTING NAME--->
										<!---SAVE--->  */}
                                        <span class="enq-sav" data-toggle="tooltip" title=" Click to like this listing">
                                        <i class="l-like sav-act"><img src="images/icon/svg/like.svg" alt=""/></i></span>
										{/* <!---END SAVE---> */}
									</div>
								</li>
                                <li>
									<div class="eve-box">
										{/* <!---LISTING IMAGE---> */}
										<div class="al-img"> <span class="open-stat">open</span>
											<a href="listing-details.html">
                                                <img src="images/services/16.jpg" alt=""/>
                                            </a>
										</div>
										{/* <!---END LISTING IMAGE--->
										<!---LISTING NAME---> */}
										<div>
											<h4>
                                                <a href="listing-details.html">Ocean blue interier designs</a>
                                                <i class="li-veri"><img src="images/icon/svg/verified.png" alt=""/></i>
                                            </h4>
											<label class="rat"> 
                                                <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons ratstar">star</i>
											</label> 
                                            <span class="addr">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span>
											<span class="pho">7904462944</span>
											<span class="mail">blue@gmail.com</span>
											<div class="links"> 
                                                <a href="#" data-toggle="modal" data-target="#quote" class="quo">Get quote</a>
												<a href="Tel:7904462944">Call Now</a>
												<a href="https://wa.me/7904462944" class="what" target="_blank">WhatsApp</a>
											</div>
										</div>
										{/* <!---END LISTING NAME--->
										<!---SAVE--->  */}
                                        <span class="enq-sav" data-toggle="tooltip" title=" Click to like this listing">
                                        <i class="l-like sav-act"><img src="images/icon/svg/like.svg" alt=""/></i></span>
										{/* <!---END SAVE---> */}
									</div>
								</li>
                                <li>
									<div class="eve-box">
										{/* <!---LISTING IMAGE---> */}
										<div class="al-img"> <span class="open-stat">open</span>
											<a href="listing-details.html">
                                                <img src="images/services/30.jpg" alt=""/>
                                            </a>
										</div>
										{/* <!---END LISTING IMAGE--->
										<!---LISTING NAME---> */}
										<div>
											<h4>
                                                <a href="listing-details.html">Packy hospital & Health care</a>
                                                <i class="li-veri"><img src="images/icon/svg/verified.png" alt=""/></i>
                                            </h4>
											<label class="rat"> 
                                                <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons ratstar">star</i>
											</label> 
                                            <span class="addr">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span>
											<span class="pho">7904462944</span>
											<span class="mail">packy@gmail.com</span>
											<div class="links">
                                                <a href="#" data-toggle="modal" data-target="#quote" class="quo">Get quote</a>
												<a href="Tel:7904462944">Call Now</a>
												<a href="https://wa.me/7904462944" class="what" target="_blank">WhatsApp</a>
											</div>
										</div>
										{/* <!---END LISTING NAME--->
										<!---SAVE--->  */}
                                        <span class="enq-sav" data-toggle="tooltip" title=" Click to like this listing">
                                        <i class="l-like sav-act"><img src="images/icon/svg/like.svg" alt=""/></i></span>
										{/* <!---END SAVE---> */}
									</div>
								</li>
                                <li>
									<div class="eve-box">
										{/* <!---LISTING IMAGE---> */}
										<div class="al-img"> <span class="open-stat">open</span>
											<a href="listing-details.html">
                                                <img src="images/services/22.jpeg" alt=""/>
                                            </a>
										</div>
										{/* <!---END LISTING IMAGE--->
										<!---LISTING NAME---> */}
										<div>
											<h4>
                                                <a href="listing-details.html">Maching wedding matrimoney</a>
                                                <i class="li-veri"><img src="images/icon/svg/verified.png" alt=""/></i>
                                            </h4>
											<label class="rat"> 
                                                <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons ratstar">star</i>
											</label> 
                                            <span class="addr">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span>
											<span class="pho">7904462944</span>
											<span class="mail">matemoney@gmail.com</span>
											<div class="links">
                                                <a href="#" data-toggle="modal" data-target="#quote" class="quo">Get quote</a>
												<a href="Tel:7904462944">Call Now</a>
												<a href="https://wa.me/7904462944" class="what" target="_blank">WhatsApp</a>
											</div>
										</div>
{/* 									<!---END LISTING NAME--->
										<!---SAVE---> */} 
                                        <span class="enq-sav" data-toggle="tooltip" title=" Click to like this listing">
                                        <i class="l-like sav-act"><img src="images/icon/svg/like.svg" alt=""/></i></span>
										{/* <!---END SAVE---> */}
									</div>
								</li>
                                <li>
									<div class="eve-box">
										{/* <!---LISTING IMAGE---> */}
										<div class="al-img"> <span class="open-stat">open</span>
											<a href="listing-details.html">
                                                <img src="images/services/10.jpg" alt=""/>
                                            </a>
										</div>
										{/* <!---END LISTING IMAGE--->
										<!---LISTING NAME---> */}
										<div>
											<h4>
                                                <a href="listing-details.html">The Royal Blue Resort & Hotels</a>
                                                <i class="li-veri"><img src="images/icon/svg/verified.png" alt=""/></i>
                                            </h4>
											<label class="rat"> 
                                                <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons ratstar">star</i>
											</label> 
                                            <span class="addr">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span>
											<span class="pho">7904462944</span>
											<span class="mail">royalblu@gmail.com</span>
											<div class="links">
                                                <a href="#" data-toggle="modal" data-target="#quote" class="quo">Get quote</a>
												<a href="Tel:7904462944">Call Now</a>
												<a href="https://wa.me/7904462944" class="what" target="_blank">WhatsApp</a>
											</div>
										</div>
										{/* <!---END LISTING NAME--->
										<!---SAVE--->  */}
                                        <span class="enq-sav" data-toggle="tooltip" title=" Click to like this listing">
                                        <i class="l-like sav-act"><img src="images/icon/svg/like.svg" alt=""/></i></span>
										{/* <!---END SAVE---> */}
									</div>
								</li>
                                <li>
									<div class="eve-box">
{/* 										<!---LISTING IMAGE---> */}
										<div class="al-img"> <span class="open-stat">open</span>
											<a href="listing-details.html">
                                                <img src="images/services/4.jpg" alt=""/>
                                            </a>
										</div>
										{/* <!---END LISTING IMAGE--->
										<!---LISTING NAME---> */}
										<div>
											<h4>
                                                <a href="listing-details.html">Original bike services</a>
                                                <i class="li-veri"><img src="images/icon/svg/verified.png" alt=""/></i>
                                            </h4>
											<label class="rat"> 
                                                <i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons">star</i>
												<i class="material-icons ratstar">star</i>
											</label> 
                                            <span class="addr">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span>
											<span class="pho">7904462944</span>
											<span class="mail">bikeser@gmail.com</span>
											<div class="links">
                                                <a href="#" data-toggle="modal" data-target="#quote" class="quo">Get quote</a>
												<a href="Tel:7904462944">Call Now</a>
												<a href="https://wa.me/7904462944" class="what" target="_blank">WhatsApp</a>
											</div>
										</div>
										{/* <!---END LISTING NAME--->
										<!---SAVE--->  */}
                                        <span class="enq-sav" data-toggle="tooltip" title=" Click to like this listing">
                                        <i class="l-like sav-act"><img src="images/icon/svg/like.svg" alt=""/></i></span>
										{/* <!---END SAVE---> */}
									</div>
								</li>
							</ul>
							{/* <!--ADS--> */}
							<div class="ban-ati-com ads-all-list"> 
                                <a href="https://themeforest.net/item/bizbook-directory-listings-template/25391222"><span>Ad</span><img src="images/ads/3.png" alt=""/></a>
							</div>
							{/* <!--ADS--> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	
    
    
  );
}

export default Halls_body;

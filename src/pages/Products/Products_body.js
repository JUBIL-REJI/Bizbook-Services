import React from 'react'

function Products_body() {
  return (
    <div>
      <div>
		<div class="all-list-bre all-pro-bre">
			<div class="container sec-all-list-bre">
				<div class="row">
					<h1>All Categories</h1>
					<ul>
						<li><a href="index">Home</a>
						</li>
						<li><a href="all-products">All category</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	  </div>
      <div>
		<div class="all-listing all-products">
			{/* <!--FILTER ON MOBILE VIEW--> */}
			<div class="fil-mob fil-mob-act">
				<h4>Product filters <i class="material-icons">filter_list</i></h4>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-3 fil-mob-view">
						<div class="all-filt"> <span class="fil-mob-clo"><i class="material-icons">close</i></span>
							{/* <!--START--> */}
							<div class="filt-com lhs-cate">
								<h4>Categories</h4>
								<div class="dropdown">
									{/* <!--                                <button id="dLabel" class="dropdown-select" type="button" data-toggle="dropdown"-->
									<!--                                        aria-haspopup="true" aria-expanded="false">-->
									<!--                                    All categories-->
									<!--                                </button>-->
									<!--                                <ul class="dropdown-menu" aria-labelledby="dLabel">-->
									<!--                                    -->
									<!--                                    <li>-->
									<!--</li>-->
									<!--                                    -->
									<!--                                </ul>--> */}
									<select onChange="ProductSubcategoryFilter(this.value);" class="cat_check" name="cat_check" id="cat_check" section="chosen-select ">
										<option value="">Select Category</option>
										<option value="15">Clothings</option>
										<option value="16">Footwear</option>
										<option value="17">Shoes</option>
										<option value="18">Jewellery</option>
										<option value="19">Toys</option>
										<option value="20">Baby care</option>
										<option value="21">Fruits</option>
										<option value="22">Mens</option>
										<option value="23">Health</option>
										<option value="8">Sports</option>
										<option value="7">Education</option>
										<option value="6">Electricals</option>
										<option value="5">Automobilers</option>
									</select>
                                    
								</div>
							</div>
							{/* <!--END-->
							<!--START--> */}
							<div class="filt-com sub_cat_section pro-fil-sub">
								<h4>Sub category</h4>
								<ul>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="44" id="KRISHNA" />
											<label for="KRISHNA">KRISHNA</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="43" id="Electric toys" />
											<label for="Electric toys">Electric toys</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="42" id="Soft toys" />
											<label for="Soft toys">Soft toys</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="41" id="Diet food" />
											<label for="Diet food">Diet food</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="40" id="Health products" />
											<label for="Health products">Health products</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="39" id="Protein" />
											<label for="Protein">Protein</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="38" id="Food" />
											<label for="Food">Food</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="37" id="Tshirts" />
											<label for="Tshirts">Tshirts</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="36" id="Smart watches" />
											<label for="Smart watches">Smart watches</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="35" id="Camera lense" />
											<label for="Camera lense">Camera lense</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="34" id="Camera light" />
											<label for="Camera light">Camera light</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="33" id="Camera pouch" />
											<label for="Camera pouch">Camera pouch</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="32" id="Camera holder" />
											<label for="Camera holder">Camera holder</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="31" id="Fruits and vegitables" />
											<label for="Fruits and vegitables">Fruits and vegitables</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="30" id="Vegitables" />
											<label for="Vegitables">Vegitables</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="29" id="Fruits" />
											<label for="Fruits">Fruits</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="28" id="Digital products" />
											<label for="Digital products">Digital products</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="27" id="Digital books" />
											<label for="Digital books">Digital books</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="26" id="Books" />
											<label for="Books">Books</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="25" id="Jeans" />
											<label for="Jeans">Jeans</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="24" id="Shirts" />
											<label for="Shirts">Shirts</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="23" id="T-shirts" />
											<label for="T-shirts">T-shirts</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="22" id="PC games" />
											<label for="PC games">PC games</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="21" id="Playstations games" />
											<label for="Playstations games">Playstations games</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="20" id="Drone toys" />
											<label for="Drone toys">Drone toys</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="19" id="Brain games" />
											<label for="Brain games">Brain games</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="18" id="Educations toys" />
											<label for="Educations toys">Educations toys</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="17" id="Puma" />
											<label for="Puma">Puma</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="16" id="Nike" />
											<label for="Nike">Nike</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="15" id="Adidas" />
											<label for="Adidas">Adidas</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="14" id="Smart Tech" />
											<label for="Smart Tech">Smart Tech</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="13" id="Tablets" />
											<label for="Tablets">Tablets</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="12" id="Camera" />
											<label for="Camera">Camera</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="11" id="Speakers" />
											<label for="Speakers">Speakers</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="10" id="Laptop" />
											<label for="Laptop">Laptop</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="9" id="Smart TV" />
											<label for="Smart TV">Smart TV</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" class="sub_cat_check" name="sub_cat_check" value="8" id="Mobiles" />
											<label for="Mobiles">Mobiles</label>
										</div>
									</li>
								</ul>
							</div>
							{/* <!--END-->
							<!--START--> */}
							<div class="filt-com pro-fil-pri">
								<h4>Price</h4>
								<ul>
									<li>
										<div class="chbox">
											<input type="checkbox" name="price_check" value="10000" class="price_check" id="price_check5" />
											<label for="price_check5">Above $1000</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" name="price_check" value="1000" class="price_check" id="price_check4" />
											<label for="price_check4">$501 - $1000</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" name="price_check" value="500" class="price_check" id="price_check3" />
											<label for="price_check3">$251 - $500</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" name="price_check" value="250" class="price_check" id="price_check2" />
											<label for="price_check2">$101 - $250</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" name="price_check" value="100" class="price_check" id="price_check1" />
											<label for="price_check1">Below $100</label>
										</div>
									</li>
								</ul>
							</div>
							{/* <!--END--> */}
							<div class="filt-com pro-fil-dis">
								<h4>Discounts</h4>
								<ul>
									<li>
										<div class="chbox">
											<input type="checkbox" name="discount_check" value="100" class="discount_check" id="discount_check5" />
											<label for="discount_check5">Above 70%</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" name="discount_check" value="70" class="discount_check" id="discount_check4" />
											<label for="discount_check4">51% - 70%</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" name="discount_check" value="50" class="discount_check" id="discount_check3" />
											<label for="discount_check3">26% - 50%</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" name="discount_check" value="25" class="discount_check" id="discount_check2" />
											<label for="discount_check2">11% - 25%</label>
										</div>
									</li>
									<li>
										<div class="chbox">
											<input type="checkbox" name="discount_check" value="10" class="discount_check" id="discount_check1" />
											<label for="discount_check1">Below 10%</label>
										</div>
									</li>
								</ul>
							</div>
							{/* <!--START--> */}
							<div class="filt-com lhs-ads">
								<ul>
									<li>
										<div class="ads-box">
											<a href="https://themeforest.net/item/bizbook-directory-listings-template/25391222"> <span>Ad</span>
												<img src="images/ads/ads1.jpg" alt=""/>
											</a>
										</div>
									</li>
									<li>
										<div class="ads-box">
											<a href="https://themeforest.net/item/bizbook-directory-listings-template/25391222"> <span>Ad</span>
												<img src="images/ads/ads2.jpg" alt=""/>
											</a>
										</div>
									</li>
								</ul>
							</div>
							{/* <!--END--> */}
						</div>
					</div>
					<div class="col-md-9">
						<div class="all-list-sh all-product-total">
							<ul>
								<li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/1.jpg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/2.jpeg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/4.jpeg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/5.jpeg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/6.jpeg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/7.jpeg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/7.jpg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/8.jpg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/1.jpg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/2.jpeg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/4.jpeg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/5.jpeg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/6.jpeg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/7.jpeg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/7.jpg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
                                <li>
									<div class="all-pro-box">
										<div class="all-pro-img">
											<img src="images/products/8.jpg"/>
										</div>
										<div class="all-pro-txt">
											<h4>Audi q3</h4>
											<span class="pri"><b class="pro-off">$32400</b>0% off </span>
											<div class="links"> <a href="#" data-toggle="modal" data-target="#quote">Get quote</a>
											</div>
										</div>
										<a href="product-details.html" class="pro-view-full"></a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
     
    </div>
  );
}

export default Products_body;

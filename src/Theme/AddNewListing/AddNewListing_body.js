import React from 'react'

function AddNewListing_body() {
  return (
    <div>
      <div class=" login-reg">
		<div class="container">
			<div class="row">
				<div class="login-main add-list">
					<div class="log-bor">&nbsp;</div> <span class="steps">Create new</span>
					<div class="log">
						<div class="login">
							<h4>Add New Listing</h4>
							<div class="row cre-dup">
								<div class="col-md-6"> <a href="add-listing-step-1.html">Create listing from scratch</a>
								</div>
								<div class="col-md-6"> <span class="cre-dup-btn">Create duplicate listing</span>
								</div>
							</div>
							<form name="duplicate_listing_form" action="duplicate_listing_insert.html" id="duplicate_listing_form" method="post" class="cre-dup-form cre-dup-form-show">
								{/* <!--FILED START--> */}
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<select name="listing_id" id="listing_id" class="chosen-select form-control" required="required">
												<option value="" disabled selected>Listing Name</option>
												<option value="LIST395">test</option>
												<option value="LIST394">dfzhfhd</option>
												<option value="LIST393">Iei</option>
												<option value="LIST392">phoenix mall</option>
												<option value="LIST391">Ocha Thai Cuisine</option>
												<option value="LIST389">Core real estates</option>
												<option value="LIST384">Gill Automobiles and Services</option>
												<option value="LIST381">Titan Wedding Hall</option>
												<option value="LIST380">Taj Hotels</option>
												<option value="LIST378">ccc</option>
												<option value="LIST375">Hello</option>
												<option value="LIST268">Premium gardens</option>
												<option value="LIST267">Beach luxury villa gardens</option>
												<option value="LIST266">GOS Villas</option>
												<option value="LIST247">Super bike showroom</option>
												<option value="LIST238">Benz cars showroom</option>
												<option value="LIST207">Smith Luxury Villas</option>
												<option value="LIST164">Ø§Ø¨Ù†Ù‰ Ù…ÙˆÙ‚Ø¹Ùƒ Ù…Ø¹Ù†Ø§</option>
												<option value="LIST163">BizBookBusiness Directory Template</option>
												<option value="LIST130">Tour and Travel html Template</option>
												<option value="LIST129">Smart Digital Products</option>
											</select>
										</div>
									</div>
								</div>
								{/* <!--FILED END-->
								<!--FILED START--> */}
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<input type="text" name="listing_name" required="required" class="form-control" placeholder="New Listing Name*"/>
										</div>
									</div>
								</div>
								{/* <!--FILED END--> */}
								<button type="submit" name="listing_submit" class="btn btn-primary">Create Now</button>
							</form>
							<div class="col-md-12"> <a href="dashboard.html" class="skip">Go to user dashboard </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    </div>
  );
}

export default AddNewListing_body;

import React from 'react'

function Sectionseven() {
  return (
    <div>
      <div class="hom-ads">
			<div class="container">
				<div class="row">
					<div class="filt-com lhs-ads">
						<div class="ads-box">
							<a href="#"> <span>Ad</span>
								<img src="images/ads/ads2.jpg" alt=""/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ani-quo">
		<div class="ani-q1">
			<h4>What you looking for?</h4>
			<p>We connect you to service experts.</p> <span>Get experts</span>
		</div>
		<div class="ani-q2">
			<img src="images/quote.png" alt=""/>
		</div>
	</div>
	{/* <!-- END -->
	<!-- START --> */}
<span class="btn-ser-need-ani">Help & Support</span>
	<div class="ani-quo-form"> <i class="material-icons ani-req-clo">close</i>
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
					<select name="enquiry_category" id="enquiry_category" class="form-control">
						<option value="">Select Category</option>
						<option value="19">Wedding halls</option>
						<option value="18">Hotel & Food</option>
						<option value="17">Pet shop</option>
						<option value="16">Digital Products</option>
						<option value="15">Spa and Facial</option>
						<option value="10">Real Estate</option>
						<option value="8">Sports</option>
						<option value="7">Education</option>
						<option value="6">Electricals</option>
						<option value="5">Automobiles</option>
						<option value="3">Transportation</option>
						<option value="2">Hospitals</option>
						<option value="1">Hotels And Resorts</option>
					</select>
				</div>
				<div class="form-group">
					<textarea class="form-control" rows="3" name="enquiry_message" placeholder="Enter your query or message"></textarea>
				</div>
				<input type="hidden" id="source"/>
				<button type="submit" id="home_slide_enquiry_submit" name="home_slide_enquiry_submit" class="btn btn-primary">Submit Requirements</button>
			</form>
		</div>
	</div>
    </div>
  );
}

export default Sectionseven;

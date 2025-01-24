import React from 'react'

function AllProducts_body() {
  return (
    <div>
      <div class="ud-cen">
				<div class="log-bor">&nbsp;</div> <span class="udb-inst">All Products</span>
				<div class="ud-cen-s2">
					<h2>Product Details</h2>
					<a href="add-new-product" class="db-tit-btn">Add new Product</a>
					<table class="responsive-table bordered">
						<thead>
							<tr>
								<th>No</th>
								<th>Product Name</th>
								{/* <!--                    <th>Rating</th>--> */}
								<th>Views</th>
								{/* <!--									<th>Expiry on</th>--> */}
								<th>Status</th>
								<th>Edit</th>
								<th>Delete</th>
								<th>Preview</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>
									<img src="images/products/3466audi_png1737.png"/>Audi q3 <span>26, Mar 2021</span>
								</td>
{/* 								<!--                        <td><span class="db-product-rat">-->
								<!--</span></td>--> */}
								<td><span class="db-list-rat">8</span>
								</td>
{/* 								<!--									<td><span class="db-product-ststus">8 June 2020</span></td>--> */}
								<td><span class="db-list-ststus">Active</span>
								</td>
								<td><a href="edit-product.html?code=PROD036" class="db-list-edit">Edit</a>
								</td>
								<td><a href="#">Delete</a>
								</td>
								<td><a href="product-details.html" class="db-list-edit" target="_blank">Preview</a>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>
									<img src="images/products/20234fp-263d-royal-protton-alpha-steel_interior.png"/>WHIRLPOOL FRIDGE <span>12, Mar 2021</span>
								</td>
								{/* <!--                        <td><span class="db-product-rat">-->
								<!--</span></td>--> */}
								<td><span class="db-list-rat">12</span>
								</td>
{/* 								<!--									<td><span class="db-product-ststus">8 June 2020</span></td>--> */}
								<td><span class="db-list-ststus">Active</span>
								</td>
								<td><a href="edit-product.html?code=PROD034" class="db-list-edit">Edit</a>
								</td>
								<td><a href="#">Delete</a>
								</td>
								<td><a href="product-details.html" class="db-list-edit" target="_blank">Preview</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td>
									<img src="images/products/6743281s+9npa5ol._ac_ul320_.jpg"/>DELL <span>12, Mar 2021</span>
								</td>
								{/* <!--                        <td><span class="db-product-rat">-->
								<!--</span></td>--> */}
								<td><span class="db-list-rat">9</span>
								</td>
								{/* <!--									<td><span class="db-product-ststus">8 June 2020</span></td>--> */}
								<td><span class="db-list-ststus">Active</span>
								</td>
								<td><a href="edit-product.html?code=PROD033" class="db-list-edit">Edit</a>
								</td>
								<td><a href="#">Delete</a>
								</td>
								<td><a href="product-details.html" class="db-list-edit" target="_blank">Preview</a>
								</td>
							</tr>
							<tr>
								<td>4</td>
								<td>
									<img src="images/products/6009download.jfif"/>samsung m31 <span>12, Mar 2021</span>
								</td>
								{/* <!--                        <td><span class="db-product-rat">-->
								<!--</span></td>--> */}
								<td><span class="db-list-rat">11</span>
								</td>
								{/* <!--									<td><span class="db-product-ststus">8 June 2020</span></td>--> */}
								<td><span class="db-list-ststus">Active</span>
								</td>
								<td><a href="edit-product.html?code=PROD032" class="db-list-edit">Edit</a>
								</td>
								<td><a href="#">Delete</a>
								</td>
								<td><a href="product-details.html" class="db-list-edit" target="_blank">Preview</a>
								</td>
							</tr>
							<tr>
								<td>5</td>
								<td>
									<img src="images/products/48373ac-hot-n-cold-final.png"/>LG AC <span>11, Mar 2021</span>
								</td>
								{/* <!--                        <td><span class="db-product-rat">-->
								<!--</span></td>--> */}
								<td><span class="db-list-rat">8</span>
								</td>
{/* 								<!--									<td><span class="db-product-ststus">8 June 2020</span></td>--> */}
								<td><span class="db-list-ststus">Active</span>
								</td>
								<td><a href="edit-product.html?code=PROD031" class="db-list-edit">Edit</a>
								</td>
								<td><a href="#">Delete</a>
								</td>
								<td><a href="product-details.html" class="db-list-edit" target="_blank">Preview</a>
								</td>
							</tr>
							<tr>
								<td>6</td>
								<td>
									<img src="images/products/763861bdef4927c04d3674fa22e88df97ca754db8f83e.jpeg"/>lenova yoga 510 <span>21, Feb 2021</span>
								</td>
								{/* <!--                        <td><span class="db-product-rat">-->
								<!--</span></td>--> */}
								<td><span class="db-list-rat">9</span>
								</td>
								{/* <!--									<td><span class="db-product-ststus">8 June 2020</span></td>--> */}
								<td><span class="db-list-ststus">Active</span>
								</td>
								<td><a href="edit-product.html?code=PROD030" class="db-list-edit">Edit</a>
								</td>
								<td><a href="#">Delete</a>
								</td>
								<td><a href="product-details.html" class="db-list-edit" target="_blank">Preview</a>
								</td>
							</tr>
							<tr>
								<td>7</td>
								<td>
									<img src="images/products/74749bizpro.jpeg"/>Engineered Shelving Unit <span>27, Apr 2020</span>
								</td>
								{/* <!--                        <td><span class="db-product-rat">-->
								<!--</span></td>--> */}
								<td><span class="db-list-rat">6</span>
								</td>
								{/* <!--									<td><span class="db-product-ststus">8 June 2020</span></td>--> */}
								<td><span class="db-list-ststus">Active</span>
								</td>
								<td><a href="edit-product.html?code=PROD018" class="db-list-edit">Edit</a>
								</td>
								<td><a href="#">Delete</a>
								</td>
								<td><a href="product-details.html" class="db-list-edit" target="_blank">Preview</a>
								</td>
							</tr>
							<tr>
								<td>8</td>
								<td>
									<img src="images/products/101211-ps4-slim-sony-yes-dualshock-4-original-imafmakaeu7xvz6a.jpeg"/>8 x 4 Metal Trailer - Exc Tyres <span>11, Apr 2020</span>
								</td>
								{/* <!--                        <td><span class="db-product-rat">-->
								<!--</span></td>--> */}
								<td><span class="db-list-rat">0</span>
								</td>
								{/* <!--									<td><span class="db-product-ststus">8 June 2020</span></td>--> */}
								<td><span class="db-list-ststus">Active</span>
								</td>
								<td><a href="edit-product.html?code=PROD012" class="db-list-edit">Edit</a>
								</td>
								<td><a href="#">Delete</a>
								</td>
								<td><a href="product-details.html" class="db-list-edit" target="_blank">Preview</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
    </div>
  );
}

export default AllProducts_body;

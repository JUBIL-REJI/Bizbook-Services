import React from 'react'

function Blogs_body() {
  return (
    <div>
      <div class=" blog-head">
		<div class="container">
			<div class="blog-head-inn">
				<h1>Blog posts</h1>
				<p>Here submit your blogs and make your own audiance.</p>
			</div>
			<div class="ban-search">
				<form>
					<ul>
						<li class="sr-sea">
							<input type="text" id="blog-search" class="autocomplete" placeholder="Search blog posts..."/>
						</li>
					</ul>
				</form>
			</div>
		</div>
	</div>
    <div class=" blog-body">
		<div class="container">
			<div class="us-ppg-com us-ppg-blog">
				<ul id="intseres">
					<li>
						<div class="pro-eve-box">
							<div>
								<img src="images/blogs/blog1.jpeg" alt=""/>
							</div>
							<div>
								<p>10, Dec 2019</p>
								<h2>Source and URL tracking</h2>
							</div> <a href="blog-details.html" class="fclick">&nbsp;</a>
						</div>
					</li>
                    <li>
						<div class="pro-eve-box">
							<div>
								<img src="images/blogs/blog2.jpg" alt=""/>
							</div>
							<div>
								<p>10, Dec 2019</p>
								<h2>Source and URL tracking</h2>
							</div> <a href="blog-details.html" class="fclick">&nbsp;</a>
						</div>
					</li>
                    <li>
						<div class="pro-eve-box">
							<div>
								<img src="images/blogs/blog3.jpg" alt=""/>
							</div>
							<div>
								<p>10, Dec 2019</p>
								<h2>Source and URL tracking</h2>
							</div> <a href="blog-details.html" class="fclick">&nbsp;</a>
						</div>
					</li>
                    <li>
						<div class="pro-eve-box">
							<div>
								<img src="images/blogs/blog4.jpg" alt=""/>
							</div>
							<div>
								<p>10, Dec 2019</p>
								<h2>Source and URL tracking</h2>
							</div> <a href="blog-details.html" class="fclick">&nbsp;</a>
						</div>
					</li>
                    <li>
						<div class="pro-eve-box">
							<div>
								<img src="images/blogs/blog5.jpg" alt=""/>
							</div>
							<div>
								<p>10, Dec 2019</p>
								<h2>Source and URL tracking</h2>
							</div> <a href="blog-details.html" class="fclick">&nbsp;</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
    </div>
  );
}

export default Blogs_body;

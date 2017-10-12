import React from 'react';
import Link from 'gatsby-link';

import '../css/style.css';
import '../css/layout.css';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
   
    return (
     <div>
       <div id="header">
			<div id="nav-wrapper"> 

				<nav id="nav">
					<ul>
						<li><a href="index.html">Homepage</a></li>
						<li><a href="left-sidebar.html">Left Sidebar</a></li>
						<li className="active"><a href="right-sidebar.html">Right Sidebar</a></li>
						<li><a href="no-sidebar.html">No Sidebar</a></li>
					</ul>
				</nav>
			</div>
			<div className="container"> 
				
				<div id="logo">
					<h1><a href="#">Linear</a></h1>
					<span className="tag">By TEMPLATED</span>
				</div>
			</div>
		</div>

		<div id="main">
			<div className="container">
				<div className="row">
					<div id="content" className="8u skel-cell-important">
						<section>
							{children()}
						</section>
					</div>

					<div id="sidebar" className="4u">
						<section>
							<header>
								<h2>Etiam malesuada</h2>
							</header>
							<div className="row">
								<section className="6u">
									<ul className="default">
										<li><a href="#">Donec facilisis tempor</a></li>
										<li><a href="#">Nulla convallis cursus</a></li>
										<li><a href="#">Integer congue euismod</a></li>
										<li><a href="#">Venenatis vulputate</a></li>
										<li><a href="#">Morbi ligula volutpat</a></li>
									</ul>
								</section>
								<section className="6u">
									<ul className="default">
										<li><a href="#">Donec facilisis tempor</a></li>
										<li><a href="#">Nulla convallis cursus</a></li>
										<li><a href="#">Integer congue euismod</a></li>
										<li><a href="#">Venenatis vulputate</a></li>
										<li><a href="#">Morbi ligula volutpat</a></li>
									</ul>
								</section>
							</div>
						</section>
						<section>
							<header>
								<h2>Mauris vulputate</h2>
							</header>
							<ul className="style">
								<li>
									<p className="posted">May 21, 2014  |  (10 )  Comments</p>
									<p><a href="#">Nullam non wisi a sem eleifend. Donec mattis libero eget urna. Pellentesque viverra enim.</a></p>
								</li>
								<li>
									<p className="posted">May 18, 2014  |  (10 )  Comments</p>
									<p><a href="#">Nullam non wisi a sem eleifend. Donec mattis libero eget urna. Pellentesque viverra enim.</a></p>
								</li>
							</ul>
						</section>
					</div>
					
				</div>
			</div>
		</div>

		<div id="tweet">
			<div className="container">
				<section>
					<blockquote>&ldquo;In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat.&rdquo;</blockquote>
				</section>
			</div>
		</div>

		<div id="footer">
			<div className="container">
				<section>
					<header>
						<h2>Get in touch</h2>
						<span className="byline">Integer sit amet pede vel arcu aliquet pretium</span>
					</header>
					<ul className="contact">
						<li><a href="#" className="fa fa-twitter"><span>Twitter</span></a></li>
						<li className="active"><a href="#" className="fa fa-facebook"><span>Facebook</span></a></li>
						<li><a href="#" className="fa fa-dribbble"><span>Pinterest</span></a></li>
						<li><a href="#" className="fa fa-tumblr"><span>Google+</span></a></li>
					</ul>
				</section>
			</div>
		</div>

		<div id="copyright">
			<div className="container">
				Design: <a href="http://templated.co">TEMPLATED</a> Images: <a href="http://unsplash.com">Unsplash</a> (<a href="http://unsplash.com/cc0">CC0</a>)
			</div>
		</div>

     </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template

import React from 'react';
import Link from 'gatsby-link';
import get from "lodash/get";
import RecentPosts from '../components/recentPosts';
import '../css/style.css';
import '../css/layout.css';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
		const posts = get(this, "props.data.allMarkdownRemark.edges");
    return (
     <div>
       <div id="header">
				<div id="nav-wrapper"> 
					<nav id="nav">
						<ul>
							<li><Link to="/">About</Link></li>
							<li><a href="contact.html">Contact</a></li>
							<li><a href="blog-posts.html">Blog</a></li>
						</ul>
					</nav>
				</div>
				<div className="container"> 
					<div id="logo">
						<h1><a href="#">Adam Pritzl</a></h1>
						<span className="tag">software developer/consultant</span>
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
								<RecentPosts posts={posts}/>
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
							<li><a href="#" className="fa fa-github"><span>GitHub</span></a></li>
							<li><a href="#" className="fa fa-linkedin"><span>LinkedIn</span></a></li>
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
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;

export const pageQuery = graphql`
query BlogQuery {
  site {
		siteMetadata {
			title
		}
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
		edges {
			node {
			excerpt
			frontmatter {
				path
				date(formatString: "DD MMMM, YYYY")
			}
			frontmatter {
				title
			}
			}
		}
  }
}
`;
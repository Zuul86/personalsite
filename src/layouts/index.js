import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import RecentPosts from '../components/recentPosts';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';


class Template extends React.Component {
	componentDidMount(){
		const s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
		const o = document.getElementsByTagName('script')[0];
		o.parentNode.insertBefore(s, o);
	}

	render() {

		const { location, children } = this.props;
		const posts = get(this, "props.data.allMarkdownRemark.edges");

		return (
		<div>
			<Helmet>
				<link href='//fonts.googleapis.com/css?family=Roboto:400,100,300,700,500,900' rel='stylesheet' type='text/css' />
			</Helmet>
			<div id="header">
				<div id="nav-wrapper"> 
					<nav id="nav">
						<ul>
							<li><Link to="/">About</Link></li>
							<li><a href="contact.html">Contact</a></li>
							<li><Link to="/blog-posts">Blog</Link></li>
						</ul>
					</nav>
				</div>
				<div className="container"> 
					<div id="logo">
						<h1><Link to="/">Adam Pritzl</Link></h1>
						<span className="tag">software developer/consultant</span>
					</div>
				</div>
			</div>

			<div id="main">
				<div className="container">
					<div className="row">
						<div id="content" className="col-md-8">
							<section>
								{children()}
							</section>
						</div>

						<div id="sidebar" className="col-md-4">
							{location.pathname != '/blog-posts' ? <RecentPosts posts={posts}/> : null}
							<section className="row">
								<header>
									<h2>Exams and Certifications</h2>
								</header>
								<section className="col-md-6">
									<div data-iframe-width="125" data-iframe-height="250" data-share-badge-id="cca5daee-5970-43f0-8fda-8ccf87bcf45e"></div>								  
								</section>

								<section className="col-md-6">
									<div data-iframe-width="125" data-iframe-height="250" data-share-badge-id="3286e2bb-2e0d-4766-8c0a-bd3f7bfe5e13"></div>								  
								</section>
							</section>
						</div>
						
					</div>
				</div>
			</div>

			<div id="tweet">
				<div className="container">
					<section>
						<blockquote>&ldquo;We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.&rdquo; Carl Sagan</blockquote>
					</section>
				</div>
			</div>

			<div id="footer">
				<div className="container">
					<section>
						<header>
							<h2>Get in touch</h2>
							<span className="byline">Visit me on Twitter, Github, and LinkedIn</span>
						</header>
						<ul className="contact">
							<li><a href="https://twitter.com/zuul86" className="fa fa-twitter" target="_blank"><span>Twitter</span></a></li>
							<li><a href="https://github.com/Zuul86" className="fa fa-github" target="_blank"><span>GitHub</span></a></li>
							<li><a href="https://www.linkedin.com/in/apritzl/" className="fa fa-linkedin" target="_blank"><span>LinkedIn</span></a></li>
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
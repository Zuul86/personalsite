import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import RecentPosts from '../components/recentPosts';
import SiteHeader from '../components/siteHeader';
import SiteFooter from '../components/siteFooter';


import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';


class Template extends React.Component {
	render() {

		const { location, children } = this.props;
		const posts = get(this, "props.data.allMarkdownRemark.edges");
		const isBlogPage = location.pathname === '/blog-posts/';

		return (
		<div>
			<Helmet>
				<link href='//fonts.googleapis.com/css?family=Roboto:400,100,300,700,500,900' rel='stylesheet' type='text/css' />
			</Helmet>
			
			<SiteHeader />

			<div id="main">
				<div className="container">
					<div>
						<div id="content" className="col-md-8">
							<section>
								{children()}
							</section>
						</div>

						<div id="sidebar" className="col-md-4">
							{isBlogPage ? null : <RecentPosts posts={posts}/>}
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

			<SiteFooter />

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
  location: React.PropTypes.object
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
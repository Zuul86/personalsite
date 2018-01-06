import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import RecentPosts from '../components/recentPosts';
import SiteHeader from '../components/siteHeader';
import SiteMain from '../components/siteMain';
import QuoteSection from '../components/quoteSection';
import SiteFooter from '../components/siteFooter';
import Copyright from '../components/copyright';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import '../css/main.css';

class Template extends React.Component {
	render() {

		return (
		<div>
			<Helmet>
				<link href='//fonts.googleapis.com/css?family=Roboto:400,100,300,700,500,900' rel='stylesheet' type='text/css' />
			</Helmet>
			
			<SiteHeader />

			<SiteMain {...this.props} />

			<QuoteSection />

			<SiteFooter />

			<Copyright />

		</div>
		);
	}
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object
};

export default Template;

export const blogQuery = graphql`
query BlogQuery {
    site {
          siteMetadata {
              title
          }
    }
    allMarkdownRemark(filter:{frontmatter:{published:{eq:true}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import RecentPosts from '../components/recentPosts.jsx';
import SiteHeader from '../components/siteHeader.jsx';
import SiteMain from '../components/siteMain.jsx';
import QuoteSection from '../components/quoteSection.jsx';
import SiteFooter from '../components/siteFooter.jsx';
import Copyright from '../components/copyright.jsx';

import '../css/bootstrap.css';
import '../css/style.css';
import '../css/main.css';

class Template extends React.Component {
	render() {

		return (
            <div>
                <Helmet>
                    <link href="//fonts.googleapis.com/css?family=Roboto:400,100,300,700,500,900" rel="stylesheet" type="text/css" />
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
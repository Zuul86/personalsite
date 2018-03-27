import React from "react";
import Helmet from "react-helmet";
import SiteHeader from "../components/siteHeader.jsx";
import SiteMain from "../components/siteMain.jsx";
import QuoteSection from "../components/quoteSection.jsx";
import SiteFooter from "../components/siteFooter.jsx";
import Copyright from "../components/copyright.jsx";


class Template extends React.Component {
  render() {
    return (
      <div>
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
        siteUrl
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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

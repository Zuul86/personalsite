import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

class AboutPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div>
        <Helmet title={siteTitle} />
        <p>
          Bio Here
        </p>
      </div>
    );
  }
}

AboutPage.propTypes = {
  route: React.PropTypes.object,
};

export default AboutPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

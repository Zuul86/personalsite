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
          The first time I saw code I was 10 years old.  My friends brother was writing something in BASIC on a Macintosh.  I was
          drawn to that blue screen, line numbers, and cryptic code that I did not understand. My obsession with computers and software was born.    
        </p>
        <p>
          In high school my education included BASIC and Pascal.
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

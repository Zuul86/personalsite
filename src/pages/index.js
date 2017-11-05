import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

class AboutPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div>
        <Helmet title={siteTitle} />
        <p>The first time I saw code I was 10 years old.  My friends brother was writing something in BASIC on a Macintosh.  I was drawn to that blue screen, line numbers, and cryptic code that I did not understand. My obsession with computers and software was born.</p>
        
        <p>Now 15+ years into my career, cryptic code is exactly what you don't want. My screen is white(I’m not a dark theme guy).  And yes, I do turn on line numbers.</p>
        
        <p>Clean Code, simplicity, and maintainability are my main goals when developing software.  It's so important to be able to understand what code is doing at a glance.  Keeping software simple is very important.  It should not be over engineered.  This is key for having others be able to quickly understand how the software works.</p>
        
        <p>Software that is maintainable can be change with confidence and minimal risk.  Components should do one thing and do it well, and also be covered by meaningful unit tests.</p>
        
        <p>Creating software with these core values in mind are key for success.</p>
        
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

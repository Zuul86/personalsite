import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/fontawesome-free-solid';
import { faLinkedin, faTwitter } from '@fortawesome/fontawesome-free-brands';
import '../css/contact.css';

class ContactPage extends React.Component {
  render() {

    const {title:siteTitle, email, author} = this.props.data.site.siteMetadata;

    return (
      <div>
        <Helmet title={siteTitle} />
        <div> 
          <div className="contactRow">
            <span className="contactIcon"><FontAwesomeIcon icon={faAt} size="4x" /></span>
            <span className="contactInfo"><a href={`mailto:${email}`}>{`${author} <${email}>`}</a></span>
          </div>
          <div className="contactRow">
            <span className="contactIcon"><FontAwesomeIcon icon={faLinkedin} size="4x" /></span>
            <span className="contactInfo"><a href="https://www.linkedin.com/in/apritzl" target="_blank">apritzl</a></span>
          </div>
          <div className="contactRow">
            <span className="contactIcon"><FontAwesomeIcon icon={faTwitter} size="4x" /></span>
            <span className="contactInfo"><a href="https://twitter.com/zuul86" target="_blank">zuul86</a></span>
          </div>
        </div>
      </div>
    );
  }
}

ContactPage.propTypes = {
  route: React.PropTypes.object,
};

export default ContactPage;

export const pageQuery = graphql`
query ContactQuery {
  site {
    siteMetadata {
      title
      email
      author
    }
  }
}
`;
import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

class ContactPage extends React.Component {
  render() {

    const {title:siteTitle, email, author} = this.props.data.site.siteMetadata;

    return (
      <div>
        <Helmet title={siteTitle} />
        <h1>
          Contact Info
        </h1>
        <address>
          Email: <a href={`mailto:${email}`}>{`${author} <${email}>`}</a>
        </address>
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
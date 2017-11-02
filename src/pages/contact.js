import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

class ContactPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div>
        <Helmet title={siteTitle} />
        <p>
          Contact Info
        </p>
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
    }
  }
}
`;
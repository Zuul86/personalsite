import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

class ContactPage extends React.Component {
  render() {

    const {title:siteTitle, email, author} = this.props.data.site.siteMetadata;

    return (
      <div>
        <Helmet title={siteTitle} />
        <p>
          Email: <a href={`mailto:${email}`}>{`${author} <${email}>`}</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/apritzl" target="_blank">LinkedIn</a>
        </p>
        <p>
          <a href="https://twitter.com/zuul86" target="_blank">Twitter</a>
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
      email
      author
    }
  }
}
`;
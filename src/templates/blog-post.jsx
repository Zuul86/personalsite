import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import '../css/blog.css';

class BlogPostTemplate extends React.Component {
  render() {
    const {markdownRemark: post} = this.props.data;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <div className="blog-page">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>
          {post.frontmatter.title}
        </h1>
        <p className="blog-date">
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import get from 'lodash/get';
import RecentPosts from '../components/recentPosts';

class BlogPage extends React.Component {
    render() {
      const siteTitle = this.props.data.site.siteMetadata.title;
      const posts = get(this, "props.data.allMarkdownRemark.edges");

      return (
        <div>
          <RecentPosts posts={posts}/>
        </div>
      );
    }
  }

  export default BlogPage;

  export const pageQuery = graphql`
  query BlogPageQuery {
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
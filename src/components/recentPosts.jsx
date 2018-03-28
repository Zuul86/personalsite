import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faRssSquare } from '@fortawesome/fontawesome-free-solid';
import { rhythm, scale } from "../utils/typography";

class RecentPosts extends React.Component {
  render() {
    const postedDate = {
      padding: `0 0 1em`,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '8pt',
      color: '#a2a2a2'
    };

    return (
      <section>
        <header>
          <h2 css={{...scale(3/4), color: '#777'}}>Recent Posts</h2>
        </header>
        <section css={{padding: 0}}>
        <ul css={{listStyle: "none", marginLeft: 0}}>
        {this.props.posts.map(post => {
          if (post.node.path !== "/404/") {
            const title = get(post, "node.frontmatter.title") || post.node.path;
            return (
              <li key={post.node.frontmatter.path}>
                <p css={postedDate}>{post.node.frontmatter.date}</p>
                <p key={post.node.frontmatter.path}>
                  <Link
                    css={{ boxShadow: "none", color: '#434343', textDecoration: 'none' }}
                    to={post.node.frontmatter.path}
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </p>
              </li>
            );
          }
        })}
        </ul>
        </section>
        <a href="rss.xml"><FontAwesomeIcon icon={faRssSquare} size="2x" /></a>
      </section>
    );
  }
}

RecentPosts.propTypes = {
  route: React.PropTypes.object,
};

export default RecentPosts;

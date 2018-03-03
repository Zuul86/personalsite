import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faRssSquare } from '@fortawesome/fontawesome-free-solid';

class RecentPosts extends React.Component {
  render() {

    return (
      <section>
        <header>
          <h2 style={{fontSize: '2.4em'}}>Recent Posts</h2>
        </header>
        <section>
        <ul className="style">
        {this.props.posts.map(post => {
          if (post.node.path !== "/404/") {
            const title = get(post, "node.frontmatter.title") || post.node.path;
            return (
              <li key={post.node.frontmatter.path}>
                <p className="posted">{post.node.frontmatter.date}</p>
                <p key={post.node.frontmatter.path}>
                  <Link
                    style={{ boxShadow: "none" }}
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

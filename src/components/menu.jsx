import React from 'react'
import Link from "gatsby-link";
import { rhythm, scale } from "../utils/typography";

class Menu extends React.Component {

  render() {

    const navStyle = {
      display: "inline-block",
      borderRight: "1px solid",
      borderColor: "rgba(255,255,255,.1)",
      ...scale(0.95),
      margin: 0,
      ":last-child": {
        paddingRight: 0,
        borderRight: "none"
      }
    };

    const navLinkStyle = {
      display: "inline-block",
      padding: "1.5em",
      letterSpacing: ".06em",
      textDecoration: "none",
      textTransform: "uppercase",
      ...scale(0.1),
      outline: 0,
      color: "#fff"
    };

    return (
      <nav>
        <ul css={{
          listStyle: "none",
          margin: 0
        }}>
          <li css={navStyle}>
            <Link css={navLinkStyle} to="/">
              About
            </Link>
          </li>
          <li css={navStyle}>
            <Link css={navLinkStyle} to="/contact/">
              Contact
            </Link>
          </li>
          <li css={navStyle}>
            <Link css={navLinkStyle} to="/blog-posts/">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
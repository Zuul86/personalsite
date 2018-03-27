import React from "react";
import Link from "gatsby-link";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { rhythm, scale } from "../utils/typography";
import headerImage from "./header.jpg";

class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const headerStyle = {
      position: `relative`,
      background: `url(${headerImage}) no-repeat bottom center`,
      backgroundAttachment: `fixed`,
      backgroundSize: `cover`,
      textAlign: `center`,
      padding: `${rhythm(6)} 0 ${rhythm(3)} 0`
    };

    const navWrapper = {
      background: "rgba(0,0,0,.1)",
      position: `absolute`,
      top: 0,
      left: 0,
      width: `100%`
    };

    const logoStyle = {
      fontWeight: 300,
      display: `block`,
      textDecoration: `none`,
      lineHeight: rhythm(1 / 4),
      ...scale(2.5),
      color: `#FFF`,
      letterSpacing: `-${rhythm(1 / 8)}`,
      margin: `0 0 ${rhythm(.5)} 0`
    };

    const subHeading = {
      color: "#FFF",
      ...scale(0.5),
      fontWeight: 400
    };

    const navStyle = {
      display: "inline-block",
      borderRight: "1px solid",
      borderColor: "rgba(255,255,255,.1)",
      ...scale(0.95),
      margin: 0,
      ":last-child" : {
        paddingRight: 0,
				borderRight: 'none'
      }
    };

    const navLinkStyle = {
      display: "inline-block",
      padding: "1.5em",
      letterSpacing: ".06em",
      textDecoration: "none",
      textTransform: "uppercase",
      ...scale(.1),
      outline: 0,
      color: "#fff"
    };

    return (
      <div css={headerStyle}>
        <div css={navWrapper}>
          <nav>
            <ul css={{ listStyle: "none", margin: 0 }}>
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
          <nav css={{ display: "none" }}>
            <Link className="link" to="/">
              About
            </Link>
            <Link className="link" to="/contact/">
              Contact
            </Link>
            <Link className="link" to="/blog-posts/">
              Blog
            </Link>
            <a
              className="icon"
              href="javascript:void(0);"
              onClick={this.handleClick}
            >
              <FontAwesomeIcon icon={faBars} />
            </a>
          </nav>
        </div>
        <div css={{ position: "relative", zIndex: 1 }}>
          <div className={this.state.isToggleOn ? "open" : ""}>
            <h1 css={{marginBottom: 0}}>
              <Link css={logoStyle} to="/">
                Adam Pritzl
              </Link>
            </h1>
            <span css={subHeading}>software developer/consultant</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SiteHeader;

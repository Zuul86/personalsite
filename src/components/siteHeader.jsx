import React from "react";
import Link from "gatsby-link";
import { rhythm, scale } from "../utils/typography";
import headerImage from "./header.jpg";
import media from "../utils/mediaQueries";
import Menu from "../components/menu";

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
      padding: `${rhythm(6)} 0 ${rhythm(3)} 0`,
      '&::before' : {
        content: "''",
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(64,64,64,.125)'
      },
      [media.small]: {
        padding: `${rhythm(3)} 0 ${rhythm(1)} 0`,
        backgroundPosition: '50%',
        height: rhythm(6),
        backgroundAttachment: 'scroll',
        padding: 0
      }
    };

    const navWrapper = {
      background: "rgba(0,0,0,.1)",
      position: `absolute`,
      top: 0,
      left: 0,
      width: `100%`,
      [media.small]: {
        display: 'none'
      }
    };

    const logoStyle = {
      fontWeight: 300,
      display: `block`,
      textDecoration: `none`,
      lineHeight: rhythm(1 / 4),
      ...scale(2.5),
      color: `#FFF`,
      letterSpacing: `-${rhythm(1 / 8)}`,
      margin: `0 0 ${rhythm(0.5)} 0`,
      [media.small]: { 
        ...scale(1.75),
      }
    };

    const subHeading = {
      color: "#FFF",
      ...scale(0.5),
      fontWeight: 400,
      [media.small]: {
        ...scale(1 / 64),
        fontWeight: 300,
      }
    };

    return (
      <div css={headerStyle}>
        <div css={navWrapper}>
          <Menu />
        </div>
        <div css={{ position: "relative", zIndex: 1, paddingTop: rhythm(1.2)}}>
          <div className={this.state.isToggleOn ? "open" : ""}>
            <h1 css={{ marginBottom: 0 }}>
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

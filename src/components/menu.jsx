import React from 'react'
import Link from "gatsby-link";
import {rhythm, scale} from "../utils/typography";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/fontawesome-free-solid";
import media from "../utils/mediaQueries";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    this.handleClick = this
      .handleClick
      .bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {

    const navStyle = {
      background: "rgba(0,0,0,.1)",
      ' ul': {
        listStyle: "none",
        margin: 0
      },
      [media.small]: {
        background: "rgba(0,0,0,.9)",
        position: 'absolute',
        right: '1px',
        transition: 'width 0.5s ease 0s',
        width: this.state.isToggleOn
          ? '0'
          : '100%',
        paddingTop: '30px'
      }
    };

    const navItemStyle = {
      display: "inline-block",
      borderRight: "1px solid",
      borderColor: "rgba(255,255,255,.1)",
      ...scale(0.95),
      margin: 0,
      ":last-child": {
        paddingRight: 0,
        borderRight: "none"
      },
      [media.small]: {
        display: 'block',
        textAlign: 'left',
        overflow: 'hidden'
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

    const hamburgerStyle = {
      display: 'none',  
      [media.small]: {
        display: 'block',
        position: 'absolute',
        right: 0,
        color: 'white',
        margin: '10px 10px 0 0',
        zIndex: 1
      }
    };

    return (
      <div>
        <div css={hamburgerStyle} onClick={this.handleClick}><FontAwesomeIcon icon={faBars} size="2x"/></div>
        <nav css={navStyle}>
          <ul>
            <li css={navItemStyle}>
              <Link css={navLinkStyle} to="/" onClick={this.handleClick}>
                About
              </Link>
            </li>
            <li css={navItemStyle}>
              <Link css={navLinkStyle} to="/contact/" onClick={this.handleClick}>
                Contact
              </Link>
            </li>
            <li css={navItemStyle}>
              <Link css={navLinkStyle} to="/blog-posts/" onClick={this.handleClick}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
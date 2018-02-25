import React from 'react';
import Link from 'gatsby-link';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';

class SiteHeader extends React.Component {
    constructor(props){
		super(props);
		this.state = {isToggleOn: false};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
        }));
	}
    
    render(){
        return (<div id="header">
            <div id="nav-wrapper"> 
                <nav id="nav">
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/contact/">Contact</Link></li>
                        <li><Link to="/blog-posts/">Blog</Link></li>
                    </ul>
                </nav>
                <nav id="navPanel" className={this.state.isToggleOn ? 'open' : ''}>
                    <Link className="link" to="/">About</Link>
                    <Link className="link" to="/contact/">Contact</Link>
                    <Link className="link" to="/blog-posts/">Blog</Link>
                    <a className="icon" href="javascript:void(0);" onClick={this.handleClick}><FontAwesomeIcon icon={faBars} /></a>
                </nav>
            </div>
            <div className="container"> 
                <div id="logo" className={this.state.isToggleOn ? 'open' : ''}>
                    <h1><Link to="/">Adam Pritzl</Link></h1>
                    <span className="tag">software developer/consultant</span>
                </div>
            </div>
        </div>);
    }
}

export default SiteHeader;
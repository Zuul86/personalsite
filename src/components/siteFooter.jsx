import React from 'react';
import Link from 'gatsby-link';

class SiteFooter extends React.Component {
    render(){
        const footerStyle = {
            position: 'relative',
            textAlign: 'center',
            padding: '6em 0em',
            marginTop: '1em'
        }

        return(
            <footer style={footerStyle}>
				<div className="container">
					<section>
						<header>
							<h2 style={{color: '#FFF'}}><Link to="/contact/">Get in touch</Link></h2>
							<span style={{color: 'rgba(255,255,255,.2)'}}>Visit me on Twitter, Github, and LinkedIn</span>
						</header>
						<ul className="contact">
							<li><a href="https://twitter.com/zuul86" target="_blank"><i className="fa fa-twitter"></i><span>Twitter</span></a></li>
							<li><a href="https://github.com/Zuul86" target="_blank"><i className="fa fa-github"></i><span>GitHub</span></a></li>
							<li><a href="https://www.linkedin.com/in/apritzl/" target="_blank"><i className="fa fa-linkedin"></i><span>LinkedIn</span></a></li>
						</ul>
					</section>
				</div>
			</footer>
        );
    }
}

export default SiteFooter;
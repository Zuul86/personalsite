import React from 'react';
import Link from 'gatsby-link';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands, { faLinkedin, faTwitter, faGithub } from '@fortawesome/fontawesome-free-brands';

class SiteFooter extends React.Component {
    render(){
        const footerStyle = {
            position: 'relative',
            textAlign: 'center',
            padding: '6em 0em',
			backgroundColor: '#000',
			' h2': {
				fontWeight: 400
			},
			' ul': {
				padding: '1.5em 0 0',
				marginLeft: '0',
				listStyle: 'none',
				' li': {
					display: 'inline-block',
					margin: '0 1em',
					' a':{
						color: 'rgba(173,173,173)'
					}
				}
			},
			' a': {
				textDecoration: 'none',
				color: '#FFF',
				fontSize: '1.75em',
				' span': {
					display: 'none'
				},
				' :hover': {
					color: '#FFF',
					transition: 'color .35s ease-in-out,background-color .35s ease-in-out',
				}
			}
        }

        return(
            <footer css={footerStyle}>
				<div className="container">
					<section>
						<header>
							<h2><Link to="/contact/">Get in touch</Link></h2>
							<span style={{color: 'rgba(173,173,173)'}}>Visit me on Twitter, Github, and LinkedIn</span>
						</header>
						<ul className="contact">
							<li><a href="https://twitter.com/zuul86" target="_blank"><FontAwesomeIcon icon={faTwitter} /><span>Twitter</span></a></li>
							<li><a href="https://github.com/Zuul86" target="_blank"><FontAwesomeIcon icon={faGithub} /><span>GitHub</span></a></li>
							<li><a href="https://www.linkedin.com/in/apritzl/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><span>LinkedIn</span></a></li>
						</ul>
					</section>
				</div>
			</footer>
        );
    }
}

export default SiteFooter;
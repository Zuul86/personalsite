import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

class AboutPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div>
        <Helmet title={siteTitle} />
        <p>The first time I saw code I was 10 years old.  My friend’s brother was writing something in BASIC on a Macintosh.  That blue screen, line numbers, and cryptic code that I did not understand drew me in. My obsession with computers and software was born.</p>
        
        <p>Now 15+ years into my career, cryptic code is exactly what you don't want. My screen is white  (I’m not a dark theme guy).  And yes, I do turn on line numbers</p>
        
        <p>I have another passion; I am a maker.  I love building gadgets, brewing beer, cooking food and I frequently mix all of these with writing code.  It’s amazing how far we’ve come where you can buy cheap devices you can program to help you do all of these things.</p>
        
        <p>One of my hobbies is brewing beer.  So of course I have to make gadgets to help me out with this.  I made a stir plate for making yeast starters,  and i also have had a work in progress automated brewing system going on for years now.  Yeah it’s one of those projects as you might see from my GitHub account.</p>
        
        <p>I don’t plan to stop making, building, and creating anytime soon.  I have a hunger for continuous learning and exploring new things though technology.  I’ve picked the the perfect career.  I can use my skills for both my profession and hobby.  Happy Making!</p>
        
      </div>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

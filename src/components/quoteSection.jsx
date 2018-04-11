import React from 'react';
import { rhythm, scale } from "../utils/typography";
import quoteBackground from '../components/header.jpg'
import media from '../utils/mediaQueries';

class QuoteSection extends React.Component {
    render(){
		const quoteStyle = {
			position: 'relative',
			textAlign: 'center',
			background: `url(${quoteBackground}) no-repeat center center`,
			backgroundAttachment: 'fixed',
			backgroundSize: 'cover',
			padding: `${rhythm(4)} 0`,
			...scale(.5),
			color: 'hsla(0,0%,100%,.6)'
		};

		const containerStyle = {
			display: 'flex',
			flexDirection: 'row',
			maxWidth: media.Medium,
			marginRight: 'auto',
			marginLeft: 'auto'
		};

        return (
            <div css={quoteStyle}>
				<div css={containerStyle}>
					<section>
						<blockquote css={{fontStyle: 'italic'}}>&ldquo;We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.&rdquo; Carl Sagan</blockquote>
					</section>
				</div>
			</div>
        );
    }
}

export default QuoteSection;
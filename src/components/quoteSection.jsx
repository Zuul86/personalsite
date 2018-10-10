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
			padding: `${rhythm(6)} 0`,
			...scale(.5),
			color: 'hsla(0,0%,100%,.6)',
			'&::before' : {
				content: "''",
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
				background: 'rgba(64,64,64,.125)'
			  },
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
						<blockquote css={{fontStyle: 'italic', fontWeight: 300}}>&ldquo;We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.&rdquo; Carl Sagan</blockquote>
					</section>
				</div>
			</div>
        );
    }
}

export default QuoteSection;
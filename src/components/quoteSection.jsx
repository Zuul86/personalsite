import React from 'react';
import '../css/quote.css';

class QuoteSection extends React.Component {
    render(){
        return (
            <div id="quote">
				<div className="container">
					<section>
						<blockquote>&ldquo;We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.&rdquo; Carl Sagan</blockquote>
					</section>
				</div>
			</div>
        );
    }
}

export default QuoteSection;
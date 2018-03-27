import React from 'react';
import get from 'lodash/get';
import { rhythm, scale } from "../utils/typography";
import RecentPosts from '../components/recentPosts';
import media from '../utils/mediaQueries';
import me from "./Adam_Pritzl.png";

class SiteMain extends React.Component {
    render(){

        const { location, children } = this.props;
		const posts = get(this, "props.data.allMarkdownRemark.edges");
        const isBlogPage = location.pathname !== '/contact/' && location.pathname !== '/';

		const containerStyle = {
			display: 'flex',
			flexDirection: 'row',
			maxWidth: media.Medium,
			marginRight: 'auto',
			marginLeft: 'auto'
		};

		const columnPadding = {
			paddingRight: '15px',
			paddingLeft: '15px'
		}

		const columnOne = {
			flex: 3
		};

		const columnTwo = {
			flex: 1
		};

		const myImage = {
			backgroundImage: `url(${me})`,
			width: '200px',
			height: '200px',
			boxShadow: '0 0 8px 8px white inset',
			margin: '0 auto 1em auto',
			borderRadius: '30px'
		};

        return(
            <div css={{padding: `${rhythm(2)} 0`}}>
				<div css={containerStyle}>
					<div css={{...columnOne, ...columnPadding}}>
						<section>
							{children()}
						</section>
					</div>
					{isBlogPage ? null :
					<div css={{...columnTwo, ...columnPadding}}>
						<div css={myImage} />
						<RecentPosts posts={posts} />
					</div>}
				</div>
			</div>
        );
    }
}

export default SiteMain;
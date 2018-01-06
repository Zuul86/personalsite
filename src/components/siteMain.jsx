import React from 'react';
import get from 'lodash/get';
import RecentPosts from '../components/recentPosts';

class SiteMain extends React.Component {
    render(){

        const { location, children } = this.props;
		const posts = get(this, "props.data.allMarkdownRemark.edges");
        const isBlogPage = location.pathname !== '/contact/' && location.pathname !== '/';

        return(
            <div id="main">
				<div className="container">
					<div>
						<div id="content" className={isBlogPage ? "col-md-12" : "col-md-8"}>
							<section>
								{children()}
							</section>
						</div>
						{isBlogPage ? null :
						<div id="sidebar" className="col-md-4">
							<div className="my-image" />
							<RecentPosts posts={posts}/>
						</div>}
						
					</div>
				</div>
			</div>
        );
    }
}

export default SiteMain;
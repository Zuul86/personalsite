import React from 'react';

class Copyright extends React.Component {
    render(){
        const containerStyle = {
            padding: '2em 0em',
            borderTop: '1px solid',
            borderColor: 'rgba(255,255,255,.05)',
            color:  'rgba(255,255,255,.2)',
            backgroundColor: '#000',
            fontWeight: '300'
        };

        return (<div css={{ textAlign: 'center' }}>
        <div css={containerStyle}>
            Design: <a style={{color:  'rgba(255,255,255,.2)'}} href="http://templated.co">TEMPLATED</a> Images: <a style={{color:  'rgba(255,255,255,.2)'}} href="http://unsplash.com">Unsplash</a> (CC0)
        </div>
    </div>);
    }
}

export default Copyright;
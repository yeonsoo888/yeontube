import React from 'react';

function VideoItem(props) {
    let snippet = props.video.snippet;
    return (
        <li className="youtube__item"> 
            <div className="youtube__imgWrap">
                <img src={snippet.thumbnails.medium.url} alt="" />
            </div>
            <div className="youtube__title">
                <strong >{snippet.title}</strong>
                <p >{snippet.channelTitle}</p>
            </div>
        </li>
    );
}

export default VideoItem;
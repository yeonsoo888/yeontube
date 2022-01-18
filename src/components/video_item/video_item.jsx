import React from 'react';

function VideoItem(props) {
    return (
        <li>
            <h1>
                {props.video.snippet.title}
            </h1>
        </li>
    );
}

export default VideoItem;
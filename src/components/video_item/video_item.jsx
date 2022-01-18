import React from 'react';

function VideoItem(props) {
    return (
        <h1>
            1
            {props.video.snippet.title}
        </h1>
    );
}

export default VideoItem;
import React from 'react';

function VideoItem(props) {
    let snippet = props.video.snippet;
    let itemDate = new Date(snippet.publishedAt);

    return (
        <li className="youtube__item" onClick={() => {
            props.setIsView(true);
            props.setSelectedVid({
                id: props.video.id,
                title: snippet.title,
                channelTitle: snippet.channelTitle,
                description : snippet.description,
                date : itemDate.toLocaleDateString(),
            })
        }}> 
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
import React from 'react';
import VideoItem from '../video_item/video_item';

function VideoList(props) {
    return (
        <div className="youtube">
            <div className="inner">
                <ul className="youtube__list">
                    {
                        props.videos.map((video) => {
                            return (
                                <VideoItem video={video} key={video.id}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default VideoList;
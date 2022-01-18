import React from 'react';
import VideoItem from '../video_item/video_item';

function VideoList(props) {
    return (
        <div>
            <ul>
                {
                    props.videos.map((video) => {
                        return (
                            <VideoItem video={video} key={video.id}/>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default VideoList;
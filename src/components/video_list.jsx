import {useState} from 'react';
import VideoItem from './video_item';
import { motion } from 'framer-motion'

function VideoList(props) {
    
    const [selectedVid,setSelectedVid] = useState({
        id: null,
        title : null,
        channelTitle : null,
        description : null,
        date : null,
    })

    return (
        <div className={`youtube ${
            props.isView ? 'view' : null
        }`}>
            <div className="inner">
                <ul className="youtube__list">
                    {
                        props.videos.map((video) => {
                            return (
                                <VideoItem video={video} key={video.id} setIsView={props.setIsView} setSelectedVid={setSelectedVid}/>
                            )
                        })
                    }
                </ul>
                {
                    props.isView && (
                        <motion.article 
                            initial={{width: 0}}
                            animate={{width: "calc(100% - 40rem)"}}
                            exit={{ width: 0}}
                            transition={{ duration: 0.5 }}
                            className='youtube__view'
                        >
                            <div className='viewInner'>
                                <div className="viewWrap">
                                    <iframe 
                                        id="player" 
                                        type="text/html"
                                        src={`http://www.youtube.com/embed/${selectedVid.id}?enablejsapi=1&origin=http://example.com`}
                                        frameBorder="0"
                                    ></iframe>
                                </div>
                                <div className='txtWrap'>
                                    <h4>{selectedVid.title}</h4>
                                    <strong>{selectedVid.channelTitle}</strong>
                                    <p>{selectedVid.description}</p>
                                    <span>{selectedVid.date}</span>
                                </div>
                            </div>
                        </motion.article>
                    )
                }
            </div>
        </div>
    );
}

export default VideoList;
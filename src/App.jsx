import React, { useEffect, useState } from 'react';
import './scss/style.scss';
import Header from './components/header';
import VideoList from './components/video_list';
import YoutubeServ from './servvice/youtube';

function App() {
  const [isView,setIsView] = useState(false);
  const [videos,setVideos] = useState([]);
  const [inputTxt,setInputTxt] = useState("");

  const youtube = new YoutubeServ(process.env.REACT_APP_YOUTUBE_KEY,{
    maxLength: 20,
  });

  useEffect( () => {
    youtube.mostPopular()
    .then(res => {
      setVideos([...res]);
    })
  },[]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    youtube.search(inputTxt)
    .then(res => {
      setVideos([...res]);
      setIsView(false);
    })
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} setInputTxt={setInputTxt} setIsView={setIsView}/>
      <VideoList videos={videos} setIsView={setIsView} isView={isView} />
    </div>
  );
}

export default App;

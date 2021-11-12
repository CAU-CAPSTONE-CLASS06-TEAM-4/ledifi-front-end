import React, { useState, useEffect } from "react"; 
import ReactPlayer from "react-player";
import VideoObserver from "./VideoObserver";

function VideoPlayer({videoFile}) {
    const ref = React.createRef();
   
    const moveSeek = (seek) => {
        ref.current.seekTo(seek);
    }
    useEffect(() => {
        VideoObserver.registerCallback(moveSeek);
      }, []);
    return (
        <>
        <ReactPlayer 
            ref={ref}
            url={videoFile} 
            playing={true}
            width="100%" 
            height="100%" 
            controls={true}
        />
        </>
    );
}export default VideoPlayer;
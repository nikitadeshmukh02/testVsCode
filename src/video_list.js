import React from 'react';
import VideoListItem  from './video_list_item';

const VideoList=(props)=>{
  //  debugger
   const videoItem= props.video.map((eachvideo)=>{
return <VideoListItem 
onVideoSelect={props.onVideoSelect} 
key={eachvideo.etag} video={eachvideo}/>
    });
    return (
        <ul className='col-sm-4 list-group'>
        {videoItem}
        </ul>
    )
    
}
export default VideoList;
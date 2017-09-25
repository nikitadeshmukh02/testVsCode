import React from 'react'
const VideoListItem=({video,onVideoSelect})=>{
    //debugger
//const video=video;
//debugger
const imageURL=video.snippet.thumbnails.default.url;
//let onVideoSelect=onVideoSelect
return(
    <li  onClick={()=>onVideoSelect(video)} className="list-group-item">
    <div className='video-list media'>
    <div className='media-left'>
    <img className='media-object' url={imageURL}>
</img>    
    </div>
    <div className='media-body'>    
    <div className='media-heading'>{video.snippet.title}
</div>        
    </div>    
    </div>
    </li>
)

}
export default VideoListItem;
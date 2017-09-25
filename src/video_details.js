import React from 'react'

const VideoDetail =(props)=>{
   // debugger

     if(!props.video)
     return <div>loading</div>
props.onHover(props.video.snippet.title)
     
    return(
        <div>
        <div className='embed-reponsive embed-reponsive-16by9'>
        <iframe className='embed-reponsive-item' src={props.video.url}>
        </iframe>
      </div>
        <div className='details'>
       
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
        </div>
        </div>
    )
}
export default VideoDetail;
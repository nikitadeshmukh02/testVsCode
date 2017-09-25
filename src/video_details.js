import React from 'react'

const VideoDetail =(props)=>{
   // debugger
     if(!props.video)
     return <div>loading</div>
    return(
        <div>
        <div className='embed-reponsive embed-reponsive-16by9'>
        <iframe className='embed-reponsive-item'></iframe>
      </div>
        <div className='details'>
       
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
        </div>
        </div>
    )
}
export default VideoDetail;
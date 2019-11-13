import React from 'react';
import video from './code.mp4'
import './VideoBackground.css';
const VideoBackground = props => (
  
  <div className="body">
      <div className="header conteiner">
        <div className="video_wrap">
            <video  autoPlay loop muted><source src={video} type="video/mp4"/></video>
        </div>
        <div className="header-overlay"></div>
        <div className="header_content">
            <h1>Hello Everyone</h1>
            <p>If you are reading this i have probably sent you my resume, 
              i had the idea to presenting myself here in a more fancy way, 
              and to show my skills in programing and front-end a bit.
              Please resize the brawser to see how it response...    </p>
        </div>
      </div> 
    </div>
    
);

export default VideoBackground;

import "./post.css"

import React from 'react'
import { Avatar } from "@material-ui/core"
import VerifiedIcon from '@mui/icons-material/Verified';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';


const Post = ({ displayName, userName, verified, text, avatar, image}) => {
  return (
    <>
      <div className="post">
      <div className="post-avatar">
      < Avatar src={avatar} />
      </div>

      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>{displayName} {" "} <span className="post-headerSpan"> {verified && <VerifiedIcon className="verified" />} @{userName} </span>  </h3>
          </div>

          <div className="post-headerDescription">
            <p> {text} </p>
          </div>
        </div>
    
        {/* image */}
        <img src={image} alt=""/>
    
        <div className="post-footer">
          < ChatBubbleOutlineOutlinedIcon fontSize="small"/>

          < RepeatIcon fontSize="small" />

          < FavoriteBorderOutlinedIcon fontSize="small" />

          < IosShareOutlinedIcon fontSize="small" />
        </div>
      </div>

    </div>


    </>
    
  )
}

export default Post

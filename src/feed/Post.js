import "./post.css"

import React, { forwardRef } from 'react'
import { Avatar } from "@material-ui/core"
import VerifiedIcon from '@mui/icons-material/Verified';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { database} from "../firebase"
import {collection, updateDoc, increment, doc } from "firebase/firestore";






const Post = forwardRef(({id, displayName, userName, verified, text, avatar, image, likes, retweet, createdAt}, ref) => {
  
  const handleRetweet = async (x) => {
    const docRef = doc(database, "76149494ABMICTU", x)
    await updateDoc(docRef, {
     retweet : increment(1)
    });

  }

  const handleLike = async(x) => {
    const docRef = doc(database, "76149494ABMICTU", x)
    await updateDoc(docRef, {
     likes : increment(1)
    });
  }


  return (
    <>
      <div className="post" ref={ref}>
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
        {
          image && <img src={image} alt=""/>
        }
    
        <div className="post-footer">
          < ChatBubbleOutlineOutlinedIcon id="icon" fontSize="small"/>

          <div className="post-footer-div" onClick={() => handleRetweet(id)}> < RepeatIcon id="icon" fontSize="small" /> {retweet} </div>

          < div className={` post-footer-div ${likes > 0 && "greaterThanZero"} `} onClick={() => handleLike(id)} > < FavoriteBorderOutlinedIcon id="icon" fontSize="small" /> {likes}</div>

          < IosShareOutlinedIcon id="icon" fontSize="small" />
        </div>
      </div>

    </div>


    </>
    
  )
})

export default Post

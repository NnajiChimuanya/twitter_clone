import "./post.css"

import React from 'react'
import { Avatar } from "@material-ui/core"
import VerifiedIcon from '@mui/icons-material/Verified';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';


const Post = () => {
  return (
    <>
      <div className="post">
      <div className="post-avatar">
      < Avatar src="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg" />
      </div>

      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3> Nnaji Chimuanya {" "} <span className="post-headerSpan"> <VerifiedIcon className="verified" /> @nnaji_chimuanya </span>  </h3>
          </div>

          <div className="post-headerDescription">
            <p> This is the first official tweet </p>
          </div>
        </div>
    
        {/* image */}
        <img src="https://i.gifer.com/QXLH.gif" alt=""/>
    
        <div className="post-footer">
          < ChatBubbleOutlineOutlinedIcon fontSize="small"/>

          < RepeatIcon fontSize="small" />

          < FavoriteBorderOutlinedIcon fontSize="small" />

          < IosShareOutlinedIcon fontSize="small" />
        </div>
      </div>

    </div>



    <div className="post">
      <div className="post-avatar">
      < Avatar src="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg" />
      </div>

      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3> Nnaji Chimuanya {" "} <span className="post-headerSpan"> <VerifiedIcon className="verified" /> @nnaji_chimuanya </span>  </h3>
          </div>

          <div className="post-headerDescription">
            <p> This is the first official tweet </p>
          </div>
        </div>
    
        {/* image */}
        <img src="https://i.gifer.com/QXLH.gif" alt=""/>
    
        <div className="post-footer">
          < ChatBubbleOutlineOutlinedIcon fontSize="small"/>

          < RepeatIcon fontSize="small" />

          < FavoriteBorderOutlinedIcon fontSize="small" />

          < IosShareOutlinedIcon fontSize="small" />
        </div>
      </div>

    </div>



    <div className="post">
      <div className="post-avatar">
      < Avatar src="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg" />
      </div>

      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3> Nnaji Chimuanya {" "} <span className="post-headerSpan"> <VerifiedIcon className="verified" /> @nnaji_chimuanya </span>  </h3>
          </div>

          <div className="post-headerDescription">
            <p> This is the first official tweet </p>
          </div>
        </div>
    
        {/* image */}
        <img src="https://i.gifer.com/QXLH.gif" alt=""/>
    
        <div className="post-footer">
          < ChatBubbleOutlineOutlinedIcon fontSize="small"/>

          < RepeatIcon fontSize="small" />

          < FavoriteBorderOutlinedIcon fontSize="small" />

          < IosShareOutlinedIcon fontSize="small" />
        </div>
      </div>

    </div>




    <div className="post">
      <div className="post-avatar">
      < Avatar src="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg" />
      </div>

      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3> Nnaji Chimuanya {" "} <span className="post-headerSpan"> <VerifiedIcon className="verified" /> @nnaji_chimuanya </span>  </h3>
          </div>

          <div className="post-headerDescription">
            <p> This is the first official tweet </p>
          </div>
        </div>
    
        {/* image */}
        <img src="https://i.gifer.com/QXLH.gif" alt=""/>
    
        <div className="post-footer">
          < ChatBubbleOutlineOutlinedIcon fontSize="small"/>

          < RepeatIcon fontSize="small" />

          < FavoriteBorderOutlinedIcon fontSize="small" />

          < IosShareOutlinedIcon fontSize="small" />
        </div>
      </div>

    </div>




    <div className="post">
      <div className="post-avatar">
      < Avatar src="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg" />
      </div>

      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3> Nnaji Chimuanya {" "} <span className="post-headerSpan"> <VerifiedIcon className="verified" /> @nnaji_chimuanya </span> </h3>
          </div>

          <div className="post-headerDescription">
            <p> This is the first official tweet </p>
          </div>
        </div>
    
        {/* image */}
        <img src="https://www.tweetgen.com/c/default-tweet-3.png" alt=""/>
    
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

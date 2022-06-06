import "./widget.css"
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Widgets = () => {
  return (
   <div className="widgets">
      <div className="widget-input">
        <SearchOutlinedIcon className="widget-input-search" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="widget-container">
        <h2> What's happening</h2>

        <TwitterTimelineEmbed 
          className="timeline-Embed"
          sourceType="profile" 
          screenName="nnaji_chimuanya" 
          options={{height : 400}} 
        />

        <TwitterTweetEmbed
          tweetId={'1410465812452945926'}
        />
      </div>

    </div>
  )
}

export default Widgets

import "./tweetBox.css"
import React from 'react'
import { Avatar, Button } from "@material-ui/core"

const TweetBox = () => {
  return (
   <div className="tweetBox">
        <form>
            <div className="tweetBox-input">
                < Avatar src="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg" />
                < input type="text" placeholder="What's happening?" />
                {/* < input type="file" /> */}
            </div>

            <input type="text" placeholder="Optional image url" />

            <Button className="tweetBox-tweet"> Tweet </Button>
        </form>
   </div>
  )
}

export default TweetBox

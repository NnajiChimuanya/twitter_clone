import "./feed.css"
import React, { useState, useEffect } from 'react'
import TweetBox from "./TweetBox"
import Post from "./Post"
import db from "../firebase"

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {

  }, [])

  return (
   <div className="feed">
      {/* Header */}
      <div className="feed-header">
        <h2> Home </h2>
      </div>

      < TweetBox />

      < Post 
      displayName="Nnaji Chimuanya"
      userName="nnaji_chimuanya"
      verified
      text="This is the first post"
      avatar="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg"
      image="https://i.gifer.com/QXLH.gif"
      />
     
      

      {/* posts */}
   </div>
  )
}

export default Feed

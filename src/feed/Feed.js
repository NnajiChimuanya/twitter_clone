import "./feed.css"
import React, { useState, useEffect } from 'react'
import TweetBox from "./TweetBox"
import Post from "./Post"
import { database} from "../firebase"
import {onSnapshot, collection } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([])

  const collectionRef = collection(database, "76149494ABMICTU")

  useEffect(() => {
    onSnapshot(collectionRef, (data) => {

      //fetching data
      // data.docs.map((item) => {
      //   setPosts(item.data())
      // })

      setPosts(data.docs.map(doc => doc.data()))
    })
  }, [])

  console.log(posts)
 

  return (
   <div className="feed">
      {/* Header */}
      <div className="feed-header">
        <h2> Home </h2>
      </div>

      < TweetBox />

      {posts.map(post => {
        return (
          < Post 
                displayName={post.displayName}
                userName={post.userName}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
              />
        )
      })}


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

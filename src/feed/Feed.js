import "./feed.css"
import React, { useState, useEffect } from 'react'
import TweetBox from "./TweetBox"
import Post from "./Post"
import { database} from "../firebase"
import {onSnapshot, collection, query, orderBy} from "firebase/firestore";
import FlipMove from 'react-flip-move';

const Feed = () => {
  const [posts, setPosts] = useState([])

  const collectionRef = collection(database, "76149494ABMICTU")
  const q = query(collectionRef, orderBy("createdAt", "desc"))
  useEffect(() => {
    onSnapshot(q, (data) => {

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

     <FlipMove>
      {posts.map(post => {
          return (
            < Post 
                  key={post.id}
                  displayName={post.displayName}
                  userName={post.userName}
                  verified={post.verified}
                  text={post.text}
                  avatar={post.avatar}
                  image={post.image}
                />
          )
        })}
     </FlipMove>


    
      {/* posts */}
   </div>
  )
}

export default Feed

import "./tweetBox.css"
import React, { useState } from 'react'
import { Avatar, Button } from "@material-ui/core"
import { database } from "../firebase"
import CollectionsIcon from '@mui/icons-material/Collections';
import {collection } from "firebase/firestore";

const TweetBox = () => {
  const collectionRef = collection(database, "76149494ABMICTU")

  const [tweet, setTweet] = useState("")
  const [image, setImage] = useState("")


  const sendTweet = (e) => {
    e.preventDefault()

  

    alert("Clicked")


    setTweet("")
    setImage("")
  }

  return (
   <div className="tweetBox">
        <form>
            <div className="tweetBox-input">
                < Avatar src="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg" />
                < input value={tweet} onChange={e => setTweet(e.target.value)} type="text" placeholder="What's happening?" />
                {/* < input type="file" /> */}
                <div className="image-upload">
              <label for="image">
                < CollectionsIcon />
              </label>
              <input id="image" type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
            </div>
            </div>

            <input value={image} onChange={e => setImage(e.target.value)} type="text" placeholder="Optional image url" />

      

            <Button onClick={sendTweet} className="tweetBox-tweet"> Tweet </Button>
        </form>
   </div>
  )
}

export default TweetBox

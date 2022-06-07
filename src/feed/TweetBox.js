import "./tweetBox.css"
import React, { useState } from 'react'
import { Avatar, Button } from "@material-ui/core"
import { database } from "../firebase"
import CollectionsIcon from '@mui/icons-material/Collections';
import {collection, addDoc, Timestamp} from "firebase/firestore";

const TweetBox = () => {
  const collectionRef = collection(database, "76149494ABMICTU")

  const [tweet, setTweet] = useState("")
  const [image, setImage] = useState("")


  const sendTweet = (e) => {
    e.preventDefault()

    addDoc(collectionRef, {
      createdAt : Timestamp.now().toMillis().toString(),
      displayName : "Nnaji Chimuanya",
      userName : "nnaji_chimuanya",
      text : "Testing out the flip move and ordering method",
      image : "https://images.squarespace-cdn.com/content/v1/55ee8615e4b077f58027f44a/1471703548148-HPYBR3WYG5FXJMN3V6AA/YAY_http-%3A%3Ai1361.photobucket.com%3Aalbums%3Ar666%3Akaramelkinema%3APosts%3A2013%3A07-July%3A03-DM2%3AMinions10_zpsdd28ca77.gif?format=500w",
      avatar : "https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg",
      verified : true

    }).then(() => console.log("Sent a tweet"))


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
              <input id="image" type="file" name="Image" accept="image/png, image/gif, image/jpeg" />
            </div>
            </div>

            <input value={image} onChange={e => setImage(e.target.value)} type="text" placeholder="Optional image url" />

      

            <Button onClick={sendTweet} className="tweetBox-tweet"> Tweet </Button>
        </form>
   </div>
  )
}

export default TweetBox

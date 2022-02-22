import React, { useState, useEffect, useRef } from 'react'
import "../styles/components/TweetBox.css"
import { Avatar, Button } from "@material-ui/core"
import {tributeMultipleTriggers} from "../classes/TributeMultipleTriggers.js"
import db from '../firebase';

export const TweetBox = () => {
    const inputTweet = useRef(); //Using a ref to get de p tag content and set state to send it to input value
    const [tweetImage, setTweetImage] = useState("");

    useEffect(() => {
        tributeMultipleTriggers.attach(document.querySelectorAll(".tribute-demo-input"));
    },[]);

    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Rafeh Qazi',
            username: 'cleverqazi',
            verified: true,
            text: inputTweet.current.innerHTML,
            image: tweetImage,
            avatar:"https://i.pravatar.cc/300"
        })
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://i.pravatar.cc/300" />
                    <p ref={inputTweet} id="testMultiple" className="tribute-demo-input" placeholder="What's happening" contentEditable="true" data-tribute="true"></p>
                    <input
                        value={tweetImage}
                        onChange={(e) => setTweetImage(e.target.value)}
                        className="tweetBox__imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                    />
                </div>
                <Button type="submit" onClick={(e)=>{sendTweet(e)}} className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

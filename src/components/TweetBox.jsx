import React, { useEffect } from 'react'
import "../styles/components/TweetBox.css"
import { Avatar, Button } from "@material-ui/core"
import {tributeMultipleTriggers} from "../classes/TributeMultipleTriggers.js"

export const TweetBox = () => {

    useEffect(() => {
        tributeMultipleTriggers.attach(document.querySelectorAll(".tribute-demo-input"));
    },[]);

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://i.pravatar.cc/300" />
                    <p id="testMultiple" className="tribute-demo-input" placeholder="What's happening" contentEditable="true" data-tribute="true"></p>
                </div>
                <Button className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

import React from 'react'
import "../styles/components/Widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

export const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text"  placeholder="Search Twitter"/>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed   tweetId={""} />
                <TwitterTimelineEmbed 
                   screenName="cleverqazi"
                   sourceType="profile"
                   options={{height: 400}}
                />
                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"} oprions={{ text: "#reactis awesome", via: "cleverqazi"}} />
            </div>
        </div>
    )
}

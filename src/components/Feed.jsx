import React from 'react'
import "../styles/components/Feed.css"
import { TweetBox } from './TweetBox';
import { Post } from './Post';

export const Feed = () => {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h3>Home</h3>
            </div>
            {/* Tweet Input */}
            <TweetBox />
            {/* Posts */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

import React, {useState,useEffect} from 'react'
import "../styles/components/Feed.css"
import { TweetBox } from './TweetBox';
import { Post } from './Post';
import db from '../firebase'
import FlipMove from "react-flip-move";

export const Feed = () => {
    const[posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            console.log(snapshot.docs)
            setPosts(snapshot.docs.map(doc=> doc.data()))
        })
    }, [])
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h3>Home</h3>
            </div>
            {/* Tweet Input */}
            <TweetBox />
            {/* Posts */}
            <FlipMove>
            {posts.map(post =>(
                <Post
                    key={post.id} 
                    displayName={post.displayName}
                    userName={post.userName}
                    verified={true}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
            </FlipMove>
        </div>
    )
}

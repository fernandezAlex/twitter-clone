import React from 'react'
import "../styles/components/Post.css"
import { Avatar } from "@material-ui/core"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

export const Post = ({
    displayName,
    userName,
    verified,
    timestamp,
    text,
    image,
    avatar
}) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://i.pravatar.cc/300"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Alex Fernández 
                            <span>
                                <VerifiedUserIcon className="post__badge" /> @alexfernandez
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="post_headerDescription">
                    <p>This is my first Post</p>   
                </div>
                <img src="https://via.placeholder.com/600x300" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

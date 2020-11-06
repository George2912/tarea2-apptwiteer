import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }

    render() {

        const {profile, profileUrl, username, content, comments, retweets, likes} = {
            profile: "",
            profileUrl: "",
            username: "",
            content: "",
            comments: "",
            retweets:"",
            likes:"",
        };

        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <Tweet
                                profile={tweet.profile}
                                profileUrl={tweet.profileUrl}
                                username={tweet.username}
                                content={tweet.content}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes} />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;
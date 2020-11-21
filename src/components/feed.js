import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';
import PostTweet from './postTweet/post-tweet'

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed,
            newTweet: ""
        }
    }

    
    likeSelected = (index) => {
        var tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
        if(tweetsClone[index].interaction.likes.selected === false){
            tweetsClone[index].interaction.likes.selected = true;
            tweetsClone[index].interaction.likes.count =
            tweetsClone[index].interaction.likes.count + 1; 
        }else {
            tweetsClone[index].interaction.likes.selected = false;
            tweetsClone[index].interaction.likes.count =
            tweetsClone[index].interaction.likes.count - 1;
        }

            
        this.setState({
            tweets : tweetsClone
        })

    };

    rtSelected = (index) => {
        var tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
        if(tweetsClone[index].interaction.retweets.selected === false){
            tweetsClone[index].interaction.retweets.selected = true;
            tweetsClone[index].interaction.retweets.count =
            tweetsClone[index].interaction.retweets.count + 1; 
        }else {
            tweetsClone[index].interaction.retweets.selected = false;
            tweetsClone[index].interaction.retweets.count =
            tweetsClone[index].interaction.retweets.count - 1;
        }

        this.setState({
            tweets : tweetsClone
        })

    };
    
    addNewTweet = () => {
        var tweetsClone2 = [...this.state.tweets];
        const newObj ={
            profile: "George Salcido",
            profileUrl:"https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2016/09/17/323680.jpg",
            username: "George_2912",
            content: this.state.newTweet,
            interaction: { comments: 800, retweets: 600, likes: 8500 }
        }
        tweetsClone2.push(newObj);


        this.setState({tweets : tweetsClone2, newTweet : ""})

    };
    submitForm = (event) => {
        event.preventDefault();
    }
    handleInput = (event) => {
        const tweet = event.target.value;
        this.setState({newTweet : tweet})
    };
    render() {
        return (
            
            <div>
                {
                    this.state.tweets.map( (tweet, index) => {
                        return (
                            <PostTweet
                                newTweet= {this.state.newTweet}
                                handleInput={this.handleInput}
                                addNewTweet={this.addNewTweet}
                                submitForm={this.submitForm}
                            />,
                            <Tweet
                                key={index}
                                profile={tweet.profile}
                                profileUrl={tweet.profileUrl}
                                username={tweet.username}
                                content={tweet.content}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets.count}
                                likes={tweet.interaction.likes.count}
                                likeSelected={tweet.interaction.likes.selected}
                                rtSelected={tweet.interaction.retweets.selected}  
                                index={index}
                                rtSelected={this.rtSelected}
                                likeSelected= {this.likeSelected} />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;
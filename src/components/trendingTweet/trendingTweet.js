import React from 'react';
import './styles.css';

class TrendingTweet extends React.Component{
    render(){
        return(
            <div className="trending-container">
                <div className="row">
                    <div className="category">
                        <span>{this.props.category}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="tittle">
                        <h4>{this.props.tittle}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="noTweets">
                        <span>{this.props.noTweets}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrendingTweet
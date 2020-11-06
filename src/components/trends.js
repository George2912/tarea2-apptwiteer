import React from 'react';
import {data} from '../source2';
import TrendingTweet from '../components/trendingTweet/trendingTweet';


class Trends extends React.Component {
    constructor() {
        super();
        this.state = {
            trends: data
        }
    }
    render() {

        const {category, tittle, noTweets} = {
            category: "",
            tittle: "",
            noTweets: "",
        };

        return (
            <div className="container-trends">
                <h3>Que esta pasando</h3>
            <div>
                {
                    this.state.trends.map( trend => {
                        return (
                            <TrendingTweet
                                category={trend.category}
                                tittle={trend.tittle}
                                noTweets={trend.noTweets}/>
                        )
                    })
                }
            </div>
            
            </div>
        );
    }
}

export default Trends;
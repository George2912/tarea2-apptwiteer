import React from 'react';
import './styles.css';

const PostTweet = (props) => {
    return (
        <div>
            <div className="t-row t-post-tweet">
                <div className="t-profile-img">
                    <img src={props.profileUrl}  alt="profile" />
                </div>
                <form onSubmit={props.submitForm}>
                    <input
                        type="text"  
                        className="i-post-tweet" 
                        placeholder="¿Qué está pasando?"
                        value={props.newTweet}
                        onChange={props.handleInput} 
                    />
                    <div className="t-post-options">
                        <button
                        type="submit"
                        onClick={props.addNewTweet}
                        >Twittear</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default PostTweet;
import React from "react";
import "./../about_css/Comment.css";

import nikeLogo from "./../../assets/nike-logo-comment.jpg";

const Comment = () => {
    return (
        <div className="comment">
            <div className="comment-parent">
                <div className="comment-heading">
                    <div className="nike-logo-comment">
                        <img src={nikeLogo} />
                    </div>
                    <div className="nike-logo-heading">
                        How Do You Feel About NIKE
                    </div>
                </div>
                <div className="comment-form">
                    <form>
                        <div className="comment-name">
                            <h2>Name</h2>
                            <input type="text" name="name" placeholder="Hey! John Doe"></input>
                        </div>
                        <div className="comment-email">
                            <h2>Email</h2>
                            <input type="text" name="email" placeholder="E-mail"></input>
                        </div>
                        <div className="comment-textbox">
                            <h2>Comment</h2>
                            <textarea name="comment" placeholder="Your Comment here" rows={4}></textarea>
                        </div>
                        <div className="comment-submit">SUBMIT</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Comment;
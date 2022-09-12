import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./../about_css/Comment.css";

// import { IoWarningOutline } from "react-icons/io5";

import nikeLogo from "./../../assets/nike-logo-comment.jpg";

const Comment = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const sendComment = async () => {

        if ( !name || !email || !comment) {
            window.alert("Fill all the blanks to submit.");
            return 
        }

        const res = await fetch("http://localhost:8000/comment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name, email, comment
            })
        })

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Entry");
            console.log("Invalid Entry");
        }
        else {
            window.alert("Comment Uploaded");
            console.log("Comment Uploaded Successfully");

            setName("");
            setEmail("");
            setComment("");
        }
    }

    // adding warning sign to unfilled cells.

    // const showWarning = (e) => {
    //     const ele = e.target.nextElementSibling;
    //     onfocusout={(e) => e.target.value ? null : showWarning(e)}
    //     // ele.style
    // <IoWarningOutline />
    // }

    return (
        <div className="comment">
            <div className="comment-parent">
                <div className="comment-heading">
                    <div className="nike-logo-comment">
                        <img src={nikeLogo} />
                    </div>
                    <div className="nike-logo-heading">
                        How Do You Feel About Us
                    </div>
                </div>
                <div className="comment-form">
                    <form>
                        <div className="comment-name">
                            <h2>Name</h2>
                            <input type="text" name="name" placeholder="Hey! John Doe" value={name} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        <div className="comment-email">
                            <h2>Email</h2>
                            <input type="text" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="comment-textbox">
                            <h2>Comment</h2>
                            <textarea name="comment" placeholder="Your Comment here" rows={4} value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                        </div>
                        <div className="comment-submit" onClick={sendComment}>SUBMIT</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Comment;
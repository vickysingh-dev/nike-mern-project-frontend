import React, { useState } from "react";
import "./../about_css/Comment.css";

import Loader from "../Loader";

import ModalAlert from "../modals/ModalAlert";

import nikeLogo from "./../../assets/nike-logo-comment.jpg";

const Comment = () => {
    const [loader, setLoader] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalProps, setModalProps] = useState({});

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const sendComment = async () => {
        if (!name || !email || !comment) {
            setModalProps({
                modalTitle: "Required Fields Empty",
                modalBody: "You need to fill all of the Fields, to Submit",
                modalFooter: "Okay",
            });
            setModalOpen(true);
            return;
        }

        setLoader(true);
        const res = await fetch("http://localhost:8000/comment", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                comment,
            }),
        });

        const data = await res.json();

        if (res.status === 422) {
            setModalProps({
                modalTitle: "Cannot Send Email",
                modalBody: "The Email Provided is invalid, please check again.",
                modalFooter: "Okay",
            });
            setModalOpen(true);
        } else {
            setModalProps({
                modalTitle: "Comment Uploaded Successfully",
                modalBody:
                    "Thank you for sharing your concern, we will reply to your mail soon",
                modalFooter: "Okay",
            });
            setModalOpen(true);
        }
        setName("");
        setEmail("");
        setComment("");
        setLoader(false);
    };

    return (
        <div className="comment">
            {loader && <Loader />}

            {modalOpen && (
                <ModalAlert setOpenModal={setModalOpen} props={modalProps} />
            )}

            <div className="comment-parent">
                <div className="comment-heading">
                    <div className="nike-logo-comment">
                        <img src={nikeLogo} />
                    </div>
                    <div className="nike-logo-heading">
                        Got A Query, Feel Free To Contact
                    </div>
                </div>
                <div className="comment-form">
                    <form>
                        <div className="comment-name">
                            <h2>Name</h2>
                            <input
                                type="text"
                                name="name"
                                placeholder="Hey! John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div className="comment-email">
                            <h2>Email</h2>
                            <input
                                type="text"
                                name="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="comment-textbox">
                            <h2>Your Query</h2>
                            <textarea
                                name="comment"
                                placeholder="Your Comment here"
                                rows={4}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="comment-submit" onClick={sendComment}>
                            SUBMIT
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Comment;

import React from "react";
import { useNavigate } from "react-router-dom";

import "./../modals_css/Modal.css";

const Modal = ({ setOpenModal, props, extraFunction = false }) => {
    const navigate = useNavigate();

    return (
        <div className="modalConfirm">
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                                {
                                    !extraFunction &&
                                        navigate(`${props.navigateOnCancel}`, {
                                            replace: true,
                                        });
                                }
                            }}
                        >
                            X
                        </button>
                    </div>
                    <div className="Modaltitle">
                        <h1>{props.modalTitle}</h1>
                    </div>
                    <div className="Modalbody">
                        <p>{props.modalBody}</p>
                    </div>
                    <div className="Modalfooter">
                        <button
                            onClick={() => {
                                {
                                    extraFunction && extraFunction();
                                }
                                setOpenModal(false);
                                {
                                    !extraFunction &&
                                        navigate(`${props.navigateOnCancel}`, {
                                            replace: true,
                                        });
                                }
                            }}
                            id="cancelBtn"
                        >
                            {props.cancelBtn}
                        </button>
                        <button
                            onClick={() => {
                                setOpenModal(false);
                                {
                                    !extraFunction &&
                                        navigate(`${props.navigateOnConfirm}`, {
                                            replace: true,
                                        });
                                }
                            }}
                            id="confirmBtn"
                        >
                            {props.confirmBtn}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

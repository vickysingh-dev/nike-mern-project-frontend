import React from "react";
import { useNavigate } from "react-router-dom";

import "./../modals_css/ModalAlert.css";

const ModalAlert = ({ setOpenModal, props }) => {
    const navigate = useNavigate();

    return (
        <div className="modalAlert">
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={() => setOpenModal(false)}>X</button>
                    </div>
                    <div className="Modaltitle">
                        <h1>{props.modalTitle}</h1>
                    </div>
                    {props.modalBody && (
                        <div className="Modalbody">
                            <p>{props.modalBody}</p>
                        </div>
                    )}
                    <div className="Modalfooter">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                                {
                                    props.navigateTo &&
                                        navigate(`${props.navigateTo}`, {
                                            replace: "true",
                                        });
                                }
                            }}
                            id="okBtn"
                        >
                            {props.modalFooter}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAlert;

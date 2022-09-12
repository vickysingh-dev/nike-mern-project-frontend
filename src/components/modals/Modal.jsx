import React from "react";
import { useNavigate } from "react-router-dom";

import "./../modals_css/Modal.css";

const Modal = ({ setOpenModal, props }) => {

    const navigate = useNavigate();

    return (
        <div className="modalConfirm">
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={() => setOpenModal(false)}>
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
                        <button onClick={() => { setOpenModal(false) }} id="cancelBtn">
                            {props.cancelBtn}
                        </button>
                        <button onClick={() => {navigate(`${ props.navigateTo }`)} } id="confirmBtn">
                            {props.confirmBtn}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
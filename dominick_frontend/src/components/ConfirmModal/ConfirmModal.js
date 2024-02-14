import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./ConfirmModal.css";
import "../ModalWithForm/ModalWithForm.css";

const ConfirmModal = ({ onClose, isOpen }) => {
  return (
    <ModalWithForm title="" onClose={onClose} isOpen={isOpen}>
      <div className="modal__confirm-title">
        Registration successfully completed!
      </div>
      <div className="modal__confirm">
        <button type="submit" className="modal__confirm-button"></button>
        <button type="text" className="signIn__button" onClick={onClose}>
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default ConfirmModal;

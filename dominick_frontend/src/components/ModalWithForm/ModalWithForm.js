import React, { useRef } from "react";
import "./ModalWithForm.css";
import { useEscape } from "../../hooks/useEscape";

export default function ModalWithForm({ children, title, onClose, onSubmit }) {
  const ref = useRef();

  const handleClickClose = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  };
  useEscape(onClose);
  return (
    <div onClick={handleClickClose} className={`modal`}>
      <div className="modal__content" ref={ref}>
        <button
          className="modal__close-button_add"
          type="button"
          onClick={onClose}
        />
        <form className="modal__form" onSubmit={onSubmit}>
          <h3 className="modal_title">{title}</h3>
          {children}
        </form>
      </div>
    </div>
  );
}

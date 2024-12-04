import React from "react";
import { Trade } from "../types/Trade";
import "./Modal.css";

interface ModalProps {
  trade: Trade;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ trade, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{trade.title}</h2>
        <img src={trade.image} alt={trade.title} />
        <p>{trade.modalDescription}</p>
      </div>
    </div>
  );
};

export default Modal;

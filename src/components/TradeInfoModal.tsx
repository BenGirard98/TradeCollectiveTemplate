import React from "react";
import { Trade } from "../types/Trade";
import "./TradeInfoModal.css";

interface ModalProps {
  trade: Trade;
  onClose: () => void;
  onLaunchInfo: (trade: Trade) => void;
}

const Modal: React.FC<ModalProps> = ({ trade, onClose, onLaunchInfo }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{trade.title}</h2>
        <img src={trade.image} alt={trade.title} />
        <div className="modal-info">
          <div className="modal-section">
            <div>
              <h3>Starting Salary</h3>
              <div className="modal-sub-section">
                <p>{trade.data.startingSalary}</p>
              </div>
            </div>
            <div className="modal-divider"></div>
            <div>
              <h3>Hiring Needs</h3>
              <div className="modal-sub-section">
                <p>{trade.data.currentHireNeeds}</p>
              </div>
            </div>
          </div>
          <div className="modal-section">
            <div>
              <h3>Requirements</h3>
              <ul>
                {trade.data.requirements
                  .slice(0, 3)
                  .map((req: string, index: number) => (
                    <li key={index}>{req}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <button className="info-button" onClick={() => onLaunchInfo(trade)}>
          Learn More About This Trade
        </button>
      </div>
    </div>
  );
};

export default Modal;

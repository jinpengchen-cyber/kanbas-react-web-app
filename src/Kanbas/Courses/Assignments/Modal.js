import React from 'react';
import './Modal.css';

function Modal({ isOpen, title, content, onCancel, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                <p>{content}</p>
                <div className="modal-actions">
                    <button onClick={onCancel} className="btn btn-light">Cancel</button>
                    <button onClick={onConfirm} className="btn btn-danger">Yes</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;

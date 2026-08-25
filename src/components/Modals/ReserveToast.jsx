import React from 'react';
import './ReserveToast.css';

const ReserveToast = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="reserve-toast-container">
      <div className="reserve-toast" role="status" aria-live="polite">
        You won't be charged yet
      </div>
    </div>
  );
};

export default ReserveToast;

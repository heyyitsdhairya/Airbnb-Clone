import React from 'react';
import ContentLeft from './ContentLeft';
import Sidebar from './Sidebar';
import './MainContent.css';

const MainContent = ({ onOpenAmenities, onReserveClick }) => {
  return (
    <div className="main-split">
      <div className="split-left">
        <ContentLeft onOpenAmenities={onOpenAmenities} />
      </div>
      <div className="split-right">
        <Sidebar onReserveClick={onReserveClick} />
      </div>
    </div>
  );
};

export default MainContent;

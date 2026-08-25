import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CalendarSection.css';

// Oct 2026 starts on Thursday (index 4 in Su Mo Tu We Th Fr Sa)
// Nov 2026 starts on Sunday (index 0)
const renderMonth = (year, month, monthName, selectedStart, selectedEnd, bookedDays = []) => {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="day empty" />);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isStart = selectedStart === dateStr;
    const isEnd = selectedEnd === dateStr;
    
    // Check if in range
    const startDate = new Date(selectedStart);
    const endDate = new Date(selectedEnd);
    const current = new Date(dateStr);
    const inRange = current > startDate && current < endDate;
    const isBooked = bookedDays.includes(d);

    let cls = 'day';
    if (isStart) cls += ' selected start';
    else if (isEnd) cls += ' selected end';
    else if (inRange) cls += ' in-range';
    else if (isBooked) cls += ' booked';

    days.push(
      <div key={d} className={cls}>
        <span className="day-text">{d}</span>
      </div>
    );
  }

  return days;
};

const CalendarSection = () => {
  // Booked days in November (showing strikethrough)
  const novBooked = [18,19,20,21,22,23,24,29,30];

  return (
    <section className="calendar-section border-bottom">
      <div className="calendar-header">
        <h2 className="section-title">5 nights in Candolim</h2>
        <div className="calendar-dates-subtitle">18 Oct 2026 – 23 Oct 2026</div>
      </div>

      <div className="calendar-container">
        {/* October 2026 */}
        <div className="month">
          <div className="month-header">
            <button className="nav-btn" aria-label="Previous month"><ChevronLeft size={18} /></button>
            <div className="month-title">October 2026</div>
            <div className="spacer" />
          </div>
          <div className="days-grid">
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
              <div key={d} className="day-name">{d}</div>
            ))}
            {renderMonth(2026, 9, 'October', '2026-10-18', '2026-10-23')}
          </div>
        </div>

        {/* November 2026 */}
        <div className="month">
          <div className="month-header">
            <div className="spacer" />
            <div className="month-title">November 2026</div>
            <button className="nav-btn" aria-label="Next month"><ChevronRight size={18} /></button>
          </div>
          <div className="days-grid">
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
              <div key={d} className="day-name">{d}</div>
            ))}
            {renderMonth(2026, 10, 'November', '', '', novBooked)}
          </div>
        </div>
      </div>

      <div className="calendar-footer">
        <button className="clear-dates-btn">Clear dates</button>
      </div>
    </section>
  );
};

export default CalendarSection;

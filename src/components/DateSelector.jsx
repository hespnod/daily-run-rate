import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({ startDate, endDate, onStartDateChange, onEndDateChange }) => {
    return (
        <div>
            <label>Start Date:</label>
            <DatePicker selected={startDate} onChange={onStartDateChange} />
            <label>End Date:</label>
            <DatePicker selected={endDate} onChange={onEndDateChange} />
        </div>
    );
};

export default DateSelector;
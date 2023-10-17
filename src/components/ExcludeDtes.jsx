import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ExcludeDates = ({ excludedDates, onExcludeDatesChange }) => {
    return (
        <div>
            <label>Exclude Dates:</label>
            <DatePicker
                selected={null} // null to reset date picker after each selection
                onChange={(date) => onExcludeDatesChange([...excludedDates, date])}
                excludeDates={excludedDates}
                inline
            />
        </div>
    );
};

export default ExcludeDates;
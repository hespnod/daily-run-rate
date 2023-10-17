import React, { useState } from 'react';
import DateSelector from './DateSelector'
import ExcludeDates from './ExcludeDtes'
import NumberOfDays from './NumberOfDays'
import LeadCountInput from './LeadCountInput'

const DRRScreen = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [excludedDates, setExcludedDates] = useState([]);
    const [numberOfLeads, setNumberOfLeads] = useState('');
    const [expectedLeadCount, setExpectedLeadCount] = useState(0);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleExcludeDatesChange = (dates) => {
        setExcludedDates(dates);
    };

    const handleNumberOfLeadsChange = (event) => {
        setNumberOfLeads(event.target.value);
    };

    const calculateExpectedLeadCount = () => {
        // Calculate expected lead count based on the formula you mentioned
        // For example, expectedLeadCount = numberOfLeads / numberOfDays;
        setExpectedLeadCount(/* calculated value */);
    };

    const handleSubmit = () => {
        // Implement Ajax request for data submission
        // I can use a library like axios for the Ajax request
        // axios.post('/api/submit-data', { startDate, endDate, excludedDates, numberOfLeads, expectedLeadCount })
        //   .then(response => {
        //     console.log('Data submitted successfully', response.data);
        //   })
        //   .catch(error => {
        //     console.error('Error submitting data', error);
        //   });
    };

    return (
        <div>
            <h1>DRR Screen</h1>
            {/* Date Selection */}
            <DateSelector
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={handleStartDateChange}
                onEndDateChange={handleEndDateChange}
            />

            {/* Exclude Dates */}
            <ExcludeDates
                excludedDates={excludedDates}
                onExcludeDatesChange={handleExcludeDatesChange}
            />

            {/* Display Number of Days */}
            <NumberOfDays startDate={startDate} endDate={endDate} excludedDates={excludedDates} />

            {/* Lead Count Input and Expected Lead Count */}
            <LeadCountInput
                numberOfLeads={numberOfLeads}
                onNumberOfLeadsChange={handleNumberOfLeadsChange}
                calculateExpectedLeadCount={calculateExpectedLeadCount}
                expectedLeadCount={expectedLeadCount}
            />

            {/* Submit Button */}
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
};

export default DRRScreen;
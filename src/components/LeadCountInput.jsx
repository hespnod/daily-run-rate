import React from 'react';

const LeadCountInput = ({ numberOfLeads, onNumberOfLeadsChange, calculateExpectedLeadCount, expectedLeadCount }) => {
    return (
        <div>
            <label>Number of Leads:</label>
            <input type="number" value={numberOfLeads} onChange={onNumberOfLeadsChange} />
            <button onClick={calculateExpectedLeadCount}>Calculate Expected Lead Count</button>
            <p>Expected Lead Count: {expectedLeadCount}</p>
        </div>
    );
};

export default LeadCountInput;
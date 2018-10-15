import React from 'react';
const ThankYou = ()=>{
    return (
    <div className = "thank-you-container d-flex flex-column justify-content-center align-items-center">
        <div className="mb-4">
            <i className="far fa-check-circle thank-you-check"></i>
        </div>
        <h2 className="thank-you">Thank you!</h2>
        <p className="text-center thank-you-message">We will keep you in the loop as we expand.</p>
    </div>
    )
}
export default ThankYou;

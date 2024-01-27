import React from 'react';

const SubmitButton = ({ buttonText }) => {
    return (
        <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">{buttonText}</button>
        </div>
    );
};

export default SubmitButton;
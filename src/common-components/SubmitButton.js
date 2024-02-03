import React from 'react';

const SubmitButton = ({ buttonText, loading }) => {

    const text = loading ? 'Loading ...' : buttonText;

    return (
        <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">{text}</button>
        </div>
    );
};

export default SubmitButton;
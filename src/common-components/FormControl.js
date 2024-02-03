import React, { forwardRef } from 'react';

const FormControl = forwardRef(function FormControl(props, ref) {
    return (
        <div className="form-control" >
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input ref={ref} type={props.type} placeholder={props.label} className="input input-bordered" required />
        </div >
    );
});

export default FormControl;
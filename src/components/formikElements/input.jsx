import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalError from "../PersonalError";


const Input = (props) => {
    const {name,type,label} = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField type={type} 
      className="form-control" 
      id={name}  
      name = {name}
      />
      <ErrorMessage name={name} 
      component={PersonalError} />
    </div>
  );
};

export default Input;

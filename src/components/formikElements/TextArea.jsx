import { ErrorMessage, FastField } from "formik";
import React from "react";
import PersonalError from "../PersonalError";


const TextArea = (props) => {
    const {name,label,validate} = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField as="textarea" 
      className="form-control" 
      id={name}  
      name = {name}
      validate = {validate}
      />
      <ErrorMessage name={name} 
      component={PersonalError} />
    </div>
  );
};

export default TextArea;

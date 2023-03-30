import { ErrorMessage, FastField } from "formik";
import React, { Fragment } from "react";
import PersonalError from "../PersonalError";

const Radio = (props) => {
  const { name, label, options } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField  className="form-control" id={name} name={name}>
        {(field)=>{
            return options.map(o=>(
                <Fragment key={o.id}>
                    <input 
                    className="form-check-input me-5"
                    type="radio"
                    id={`radio${o.id}`}
                    {...field}
                    value={o.id}
                    checked = {field.value == o.id}
                     />
                     <label htmlFor={`radio${o.id}`} 
                     className = "mx-1 ms-4"
                     >{o.value}</label>
                </Fragment>
            ))
        }}
      </FastField>
      <ErrorMessage name={name} component={PersonalError} />
    </div>
  );
};

export default Radio;

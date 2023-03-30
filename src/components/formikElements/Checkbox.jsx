import { ErrorMessage, FastField } from "formik";
import React, { Fragment } from "react";
import PersonalError from "../PersonalError";

const Checkbox = (props) => {
  const { name, label, options } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <FastField className="form-control" id={name} name={name}>
        {(field) => {
          return options.map((o) => (
            <Fragment key={o.id}>
              <input
                className="form-check-input me-5"
                type="checkbox"
                id={o.value}
                {...field}
                value={o.value}
                checked={field.value?.includes(o.value)}
              />
              <label htmlFor={o.value} className="mx-1 ms-4">
                {o.value}
              </label>
            </Fragment>
          ));
        }}
      </FastField>
      <ErrorMessage name={name} component={PersonalError} />
    </div>
  );
};

export default Checkbox;

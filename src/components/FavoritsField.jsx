import { ErrorMessage, Field } from "formik";
import React from "react";
import PersonalError from "./PersonalError";

const FavoritsField = (props) => {
  const { form, push, remove } = props;
  const { favorits } = form.values;
  //(f,i) fبه معنی عضو آرایه و i به معنی اندیس آرایه میباشد
  return (
    <>
      <i
        className="fas fa-plus text-success
      mx-3 pointer"
        onClick={() => push("")}
      ></i>
      <label htmlFor="telePhone" className="form-label">
        علایق
      </label>
      {favorits.map((f, i) => (
        <div key={i} className="position-relative">
          <Field type="text" className="form-control" name={`favorits[${i}]`} />
          {favorits.length > 1 ? (
            <i
              className="fas 
              fa-minus-circle text-danger 
              mx-1 pointer delete_icon"
              onClick={() => remove(i)}
            ></i>
          ) : null}
          <ErrorMessage name={`favorits[${i}]`} component={PersonalError} />
        </div>
      ))}
    </>
  );
};

export default FavoritsField;

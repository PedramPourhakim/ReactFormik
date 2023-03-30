import React from "react";
import {
  ErrorMessage,
  FastField,
  Field,
  Form,
  Formik,
  useFormik,
  FieldArray,
} from "formik";
import * as Yup from "yup";
import PersonalField from "./PersonalField";
import PersonalError from "./PersonalError";
import FavoritsField from "./FavoritsField";

const initialValues = {
  name: "Pedram",
  email: "",
  password: "",
  bio: "",
  address: {
    city: "",
    postalCode: "",
  },
  phone: ["", ""],
  favorits: [""],
};
const onSubmit = () => {};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "لطفا این قسمت را پر کنید";
  }
  if (!values.email) {
    errors.email = "لطفا این قسمت را پر کنید";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "لطفا قالب ایمیل را رعایت کنید مثال : shemuel1226@gmail.com";
  }
  if (!values.password) {
    errors.password = "لطفا این قسمت را پر کنید";
  }
  return errors;
};
const validationSchema = Yup.object({
  name: Yup.string().required("لطفا این قسمت را پر کنید"),
  email: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .email("لطفا قالب ایمیل را رعایت کنید مثال : shemuel1226@gmail.com"),
  password: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .min(8, "حداقل 8 کاراکتر وارد کنید"),
  address: Yup.object({
    city: Yup.string().required("لطفا این قسمت را پر کنید"),
    postalCode: Yup.string().required("لطفا این قسمت را پر کنید"),
  }),
  phone: Yup.array().of(Yup.string().required("لطفا این قسمت را پر کنید")),
  favorits: Yup.array().of(Yup.string().required("لطفا این قسمت را پر کنید")),
});
const validateBio = (value) => {
  let error;
  if (!value) {
    error = "ورود این فیلد اجباری است !";
  } else if (!/^[\u0600-\u06FF\s0-9a-zA-Z]+$/.test(value)) {
    error = "لطفا قالب نوشتاری را رعایت کنید...!";
  }
  return error;
};
const Registerform = () => {
  // const formik = useFormik({
  //  initialValues,
  //   onSubmit,
  //   // validate,
  //   validationSchema
  // });
  const attrs = {
    type: "text",
    className: "form-control",
    id: "name",
    name: "name",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnBlur={false}
      // validateOnChange={false}
    >
      {(formik) => {
        return (
          <div className="auth_container container container-fluid d-flex justify-content-center align-items-center w-100 h-100 p-0">
            <div className="row w-100 justify-content-center align-items-center">
              <div className="auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3">
                <Form className="row">
                  <h1 className="text-center">
                    <i className="fas fa-user-plus text-primary"></i>
                  </h1>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      نام
                    </label>
                    <FastField
                      {...attrs}
                      placeholder="لطفا از حروف لاتین استفاده کنید"
                    />
                    <ErrorMessage name="name" component={PersonalError} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      ایمیل
                    </label>
                    <FastField
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      // {...formik.getFieldProps("email")}
                    />
                    <ErrorMessage name="email">
                      {(error) => (
                        <small
                          className="d-block text-center 
                  text-danger"
                        >
                          {error}
                        </small>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      رمز عبور
                    </label>
                    <FastField name="password">
                      {(props) => <PersonalField {...props} />}
                    </FastField>
                    {/* <ErrorMessage name="password" /> */}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bio" className="form-label">
                      بیوگرافی
                    </label>
                    <FastField
                      type="text"
                      className="form-control"
                      id="bio"
                      name="bio"
                      component="textarea"
                      validate={validateBio}
                      // {...formik.getFieldProps("password")}
                    />
                    <ErrorMessage name="bio" component={PersonalError} />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="city" className="form-label">
                      شهر
                    </label>
                    <FastField
                      type="text"
                      className="form-control"
                      id="city"
                      name="address.city"
                    />
                    <ErrorMessage
                      name="address.city"
                      component={PersonalError}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="postalCode" className="form-label">
                      کد پستی
                    </label>
                    <FastField
                      type="text"
                      className="form-control"
                      id="postalCode"
                      name="address.postalCode"
                      // {...formik.getFieldProps("password")}
                    />
                    <ErrorMessage
                      name="address.postalCode"
                      component={PersonalError}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="mobilePhone" className="form-label">
                      شماره موبایل
                    </label>
                    <FastField
                      type="text"
                      className="form-control"
                      id="mobilePhone"
                      name="phone[0]"
                    />
                    <ErrorMessage name="phone[0]" component={PersonalError} />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="telePhone" className="form-label">
                      تلفن ثابت
                    </label>
                    <FastField
                      type="text"
                      className="form-control"
                      id="telePhone"
                      name="phone[1]"
                      // {...formik.getFieldProps("password")}
                    />
                    <ErrorMessage name="phone[1]" component={PersonalError} />
                  </div>
                  <div className="mb-3">
                    <FieldArray
                      type="text"
                      className="form-control"
                      name="favorits"
                    >
                      {(props) => <FavoritsField {...props} />}
                    </FieldArray>
                  </div>
                  <button
                    className="btn btn-info" type="button"
                    onClick={() => formik.validateField('bio')}
                  >
                    اعتبار سنجی بیوگرافی
                  </button>
                  <button
                    className="btn btn-info" type="button"
                    onClick={() => formik.validateForm()}
                  >
                    اعتبار سنجی فرم
                  </button>
                  <button
                    className="btn btn-success" type="button"
                    onClick={() => formik.setFieldTouched('bio')}
                  >
                     مشاهده بیوگرافی
                  </button>
                  <button
                    className="btn btn-success" type="button"
                    onClick={() => formik.setTouched({
                      name:true,
                      email:true
                    })}
                  >
                     مشاهده فرم
                  </button>
                  <div className="text-center w-100">
                    <button type="submit" className="btn btn-primary">
                      ثبت نام
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Registerform;

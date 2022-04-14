import React, { useState } from "react";

// form library
import { useFormik } from 'formik';

// valiator
import validator from 'validator';

import Recaptcha from "react-recaptcha";
import BookCallButton from "../../BookCallButton";

const domain = process.env.REACT_APP_ENDPOINT_API

const handleValidate = values => {
  let errors = {};
  if (!values.firstname)
    errors.firstname = 'Required'
  if (!values.lastname)
    errors.lastname = 'Required'
  if (!values.email) {
    errors.email = 'Required'
  } else if (!validator.isEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
}


const FormComponent = ({ isMobile, handleFormSubmit, smallerText }) => {
  const [isVerified, setIsVerified] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      // enquiryType: '',
      message: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      const data = {
        name: `${values.firstname} ${values.lastname}`,
        email: values.email,
        phone: "0987654321",
        enquiryType: '',
        message: values.message
      }
      fetch(`${domain}/web-mails`, {
        method: "POST",
        headers: {
          "Content-type":"application/json"
        },
        body: JSON.stringify(data)
      }).then(res => res.json()).then(res => {
        console.log(res);
        setSubmitting(false);
        window.open("/thank-you")
      }).catch(err => {
        console.log(err, formik.isSubmitting)
        setSubmitting(false)
      })
    },
    validate: handleValidate,
  })
  
  console.log(formik)

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-container-box">
          <div className="row">
            <div className={`${isMobile ? "col-12" : "col-6"}`}>
              <input
                className={`app-form-inputs sectionContent w-100 ${smallerText ? "small" : ""
                  }`}
                type="text"
                placeholder="First Name"
                name={"firstname"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
              />
              <label className="form-error">{formik.errors.firstname && formik.touched.firstname && formik.errors.firstname}</label>
            </div>
            <div className={`${isMobile ? "col-12 mt-4" : "col-6"}`}>
              <input
                className={`app-form-inputs sectionContent w-100 ${smallerText ? "small" : ""
                  }`}
                type="text"
                placeholder="Last Name"
                name="lastname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />
              <label className="form-error">{formik.errors.lastname && formik.touched.lastname && formik.errors.lastname}</label>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <input
                className={`app-form-inputs sectionContent w-100 ${smallerText ? "small" : ""
                  }`}
                placeholder="Email Address"
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            <label className="form-error">{formik.errors.email && formik.touched.email && formik.errors.email}</label>
          </div>
          {/* <div className="row mt-4">
            <div className="col-12">
              <input
                className={`app-form-inputs sectionContent w-100 ${smallerText ? "small" : ""
                  }`}
                type="text"
                placeholder="Type of enquiry"
                name="enquiryType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.enquiryType}
              />
              <label className="form-error">{formik.errors.enquiryType && formik.touched.enquiryType && formik.errors.enquiryType}</label>
            </div>
          </div> */}
          <div className="row mt-4">
            <div className="col-12">
              <textarea
                rows={3}
                className={`app-form-inputs sectionContent w-100 ${smallerText ? "small" : ""
                  }`}
                type="text"
                placeholder="Message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              <label className="form-error">{formik.errors.message && formik.touched.message && formik.errors.message}</label>
            </div>
          </div>
          <div className="row mt-4">
            {/* <div className={`${isMobile ? "col-12 text-start" : "col-6 my-auto"}`}>

              <Recaptcha
                sitekey="6Ld60JseAAAAALFiR6q0Q-6wrF6C7onyvA7ozBsh"
                render="explicit"
                onloadCallback={() => console.log("Recaptcha Loaded")}
                verifyCallback={() => setIsVerified(true)}
              />
            </div> */}
            <div
              className={`${isMobile ? "col-12 text-start mt-4" : "col-6 text-end my-auto"
                }`}
            >
              <BookCallButton
                type="submit"
                disabled={formik.isSubmitting}
                className={"common-section-1"}
                isColored={false}
                text={`Send details`}
                showImage={false}
                handleFunction={formik.handleSubmit}
              />
            </div>
          </div>
        </div>
      </form>
  </>);
};

export default FormComponent;

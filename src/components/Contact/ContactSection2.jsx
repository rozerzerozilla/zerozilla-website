import React, { useRef, useContext } from "react";
import { AppContext } from "../../context/Context";

// form library
import { useFormik, Field } from 'formik';

// valiator
import validator from 'validator';
import { IoCall, IoLocationOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
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

    if (!values.enquiryType)
        errors.enquiryType = 'Required'
    return errors;
}


const Section2 = () => {

    const [isMobile, setIsMobile] = useContext(AppContext);
    const ref = useRef(null);

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            enquiryType: '',
            message: '',
            phone:'',
        },
        onSubmit: (values, { setSubmitting }) => {
            const data = {
                name: `${values.firstname} ${values.lastname}`,
                email: values.email,
                phone: values.phone,
                enquiryType: values.enquiryType,
                message: values.message
            }
            fetch(`${process.env.REACT_APP_ENDPOINT_API}/web-mails`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
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


    return (
        <div className="container contact-card mb-5">
            <div className="row">
                {!isMobile ? <div className="col-4">
                    <div className="rectangle-4604">
                        <h3 className="color-white font600">Contact Information</h3>
                        <p>Fill up the form and our team will get back to you within 24 hours</p>
                        <div className="d-flex align-items-start justify-content-start">
                            <div className="me-2"><IoCall/></div>
                            <div>+91 98765 43210</div>
                        </div>
                        <div className="d-flex align-items-start justify-content-start pt-2">
                            <div className="me-2"><FiMail/></div>
                            <div>info@zerozilla.com</div>
                        </div>
                        <div className="d-flex align-items-start justify-content-start pt-2">
                            <div className="me-2"><IoLocationOutline style={{color: "white"}}/></div>
                            <div>Royal Avenue Gopalan Enterprises, 1st Cross Rd 3rd Stage, Banashankari, Bengaluru,<br/> 560085</div>
                        </div>
                        <div className="ellipse-13"></div>
                        <div className="ellipse-12"></div>
                    </div>
                </div> : null}
                <div className={isMobile ? "col-8 p-3" : "col-8 pt-3 ps-3 pb-3 pe-5"}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 col-xs-12 form-standard mb-3">
                                <div className="col-12">
                                    <label className="form-standard-label">Firstname</label>
                                </div>
                                <div className="col-12">
                                    <input
                                    className="form-standard-input"
                                        type="text"
                                        placeholder=""
                                        name="firstname"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstname}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 form-standard mb-3">
                                <div className="col-12">
                                    <label className="form-standard-label">Lastname</label>
                                </div>
                                <div className="col-12">
                                    <input
                                    className="form-standard-input"
                                        type="text"
                                        placeholder=""
                                        name="lastname"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastname}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 form-standard mb-3">
                                <div className="col-12">
                                    <label className="form-standard-label">Email</label>
                                </div>
                                <div className="col-12">
                                    <input
                                    className="form-standard-input"
                                        type="email"
                                        placeholder=""
                                        name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 form-standard mb-3">
                                <div className="col-12">
                                    <label className="form-standard-label">Phone No</label>
                                </div>
                                <div className="col-12">
                                    <input
                                    className="form-standard-input" type="number"
                                        placeholder=""
                                        name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone} />
                                </div>
                            </div>
                            {/* <div className="col-12">
                                <h6>What are the services you need?</h6>
                            </div> */}
                            {/* <div className="col-12 form-standard mb-4">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="enquiryType"
                                        id="inlineRadio1"
                                        value="Web Design & Development"
                                    />
                                    <label className="form-check-label" for="inlineRadio1">Web Design & Development</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="enquiryType"
                                        id="inlineRadio2"
                                        value="App Development"
                                    />
                                    <label className="form-check-label" for="inlineRadio2">App Development</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="enquiryType"
                                        id="inlineRadio2"
                                        value="Custom App"
                                    />
                                    <label className="form-check-label" for="inlineRadio2">Custom App</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="enquiryType"
                                        id="inlineRadio2"
                                        value="Digital Marketing"
                                    />
                                    <label className="form-check-label" for="inlineRadio2">Digital Marketing</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="enquiryType"
                                        id="inlineRadio2"
                                        value="Other"
                                    />
                                    <label className="form-check-label" for="inlineRadio2">Other</label>
                                </div>
                            </div> */}
                            <div className="col-12 form-standard mb-4">
                                <div className="col-12">
                                    <label className="form-standard-label">Message</label>
                                </div>
                                <div className="col-12">
                                    <textarea
                                        className="form-standard-input"
                                        type="text"
                                        placeholder=""
                                        name="message"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.message} />
                                </div>
                            </div>
                            <div className="col-12 form-standard mb-3 d-flex justify-content-end">
                                <button className="primary-btn">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Section2;
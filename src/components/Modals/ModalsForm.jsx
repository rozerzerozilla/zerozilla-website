import React,{useState} from "react";

// form library
import { useFormik } from 'formik';

// valiator
import validator from 'validator';

import { Button, Modal } from 'react-bootstrap';

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

    if (!values.enquiryType)
        errors.enquiryType = 'Required'
    return errors;
}

const JobApplyModal = ({ isMobile, title = 'Select Plan', ...rest}) => {

    const [isVerified, setIsVerified] = useState(false);
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            plan: '',
            message: '',
        },
        onSubmit: (values, { setSubmitting }) => {
            if (!isVerified) {
                alert(`Please confirm that you're not a Robot!`);
                return;
            }
            const data = {
                name: "name",
                email: values.email,
                phone: "0987654321",
                enquiryType: values.enquiryType,
                message: values.message
            }
            fetch(`${domain}/plan-mails`, {
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
        <Modal
            animation
            {...rest}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Get In Touch</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className={`${isMobile ? "col-12" : "col-6"}`}>
                                <input
                                    className={`app-form-inputs sectionContent w-100 small`}
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
                                    className={`app-form-inputs sectionContent w-100 small`}
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
                                    className={`app-form-inputs sectionContent w-100 small`}
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
                                <select className={`app-form-inputs sectionContent w-100 small`}
                                    placeholder="Select Plan"
                                    name="selectPlan"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.plan}
                                >
                                    <option value="" disabled>Select Plan</option>
                                    <option value="basic">Basic</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="premium">Premium</option>
                                </select>
                                <label className="form-error">{formik.errors.plan && formik.touched.plan && formik.errors.plan}</label>
                            </div>
                        </div> */}
                        <div className="row mt-4">
                            <div className="col-12">
                                <textarea
                                    rows={3}
                                    className={`app-form-inputs sectionContent w-100 small`}
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
                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer>
                {/* <Button variant="secondary"{...rest}>Close</Button> */}
                <button className="sliderBtns  colored"
                    type="submit" onClick={formik.handleSubmit}
                >
                    Submit
                </button>
                {/* <BookCallButton
                    type="submit"
                    disabled={formik.isSubmitting}
                    className={"common-section-1"}
                    isColored={false}
                    text={`Send details`}
                    showImage={false}
                    handleFunction={formik.handleSubmit}
                /> */}
            </Modal.Footer>
        </Modal>
    )
}

export default JobApplyModal;
import React, { useState } from "react";
// form library
import { useFormik } from 'formik';

// valiator
import validator from 'validator';

import { Button, Modal } from 'react-bootstrap'

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

const PlanModal = ({ isMobile, designation,onClose, ...rest }) => {

    const formik = useFormik({
        initialValues: {
            designation:'',
            name: '',
            phone: '',
            email: '',
            file:undefined,
        },
        onSubmit: (values, { setSubmitting }) => {
            const data = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                designation: designation
            }
            fetch(`${domain}/career/apply-job`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => {
                    // console.log(res);
                    setSubmitting(false);
                    onClose();
                window.open("/thank-you")
            }).catch(err => {
                console.log(err, formik.isSubmitting)
                setSubmitting(false)
            })
        },
    })

    // console.log(formik)

    return (
        <Modal
            animation
            onHide={onClose}
            {...rest}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{designation}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className={`${isMobile ? "col-12" : "col-6"}`}>
                                <input
                                    className={`app-form-inputs sectionContent w-100 small`}
                                    type="text"
                                    placeholder="Full Name"
                                    name={"name"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                            </div>
                            <div className={`${isMobile ? "col-12 mt-4" : "col-6"}`}>
                                <input
                                    className={`app-form-inputs sectionContent w-100 small`}
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <input
                                    className={`app-form-inputs sectionContent w-100 small`}
                                    placeholder="Phone No"
                                    type="number"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <input
                                    className={`app-form-inputs sectionContent w-100 small`}
                                    id="file" name="file" type="file"
                                    onChange={(event) => {
                                        // Create an object of formData
                                        const formData = new FormData();

                                        // Update the formData object
                                        formData.append(
                                            "myFile",
                                            event.currentTarget.files[0],
                                            event.currentTarget.files[0].name
                                        );

                                        // Details of the uploaded file
                                        console.log(event.currentTarget.files[0]);

                                        // Request made to the backend api
                                        // Send formData object
                                        // fetch('http://localhost:9000/apply-job', {
                                        //     method: "POST",
                                        //     headers: {
                                        //         "Content-type": "application/json"
                                        //     },
                                        //     body: JSON.stringify(formData)
                                        // }).then(res => {
                                        //     formik.setValues(prevState => ({
                                        //         ...prevState,
                                        //         file: res,
                                        //     }))
                                        // })
                                        // axios.post("api/uploadfile", formData);
                                    }}
                                    value={formik.values.file}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="success" type="submit" onClick={formik.handleSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PlanModal;
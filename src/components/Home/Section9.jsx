import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import { Container } from "react-bootstrap";
// form library
import { useFormik } from 'formik';

// valiator
import validator from 'validator';
const domain = process.env.REACT_APP_ENDPOINT_API

const handleValidate = values => {
    let errors = {};
    if (!validator.isEmail(values.email))
        errors.email = 'Required'
    if (!values.phone)
        errors.phone = 'Required'
    
    return errors
}
const Section9 = () => {
    const [isMobile] = useContext(AppContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
        },
        onSubmit: (values, { setSubmitting }) => {
            console.log("values")
            const data = {
                email: values.email,
                phone: values.phone,
            }
            fetch(`${domain}/enquiry-mails`, {
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

    console.log(formik)

    return (
        <form onSubmit={formik.handleSubmit}>
        <div className="Home-areaSEO py-4 my-3">
            <Container fluid="md">
                <div className="row">
                    <div
                        className="col-12 Home-main-areaSEO"
                        style={{
                            paddingLeft: !isMobile ? "70px" : "15px",
                            paddingRight: !isMobile && "70px",
                        }}
                    >
                        <div className="row">
                            <div
                                    className={"col-xs-12 col-md-8 mx-auto mb-3"}
                            >
                                <p className={`mb-0 seoHead text-center}`}>
                                        Confused on what suits best for your business growth?
                                        Let’s have a casual chat & see the possible opportunity!
                                </p>
                            </div>
                            <div  className={`${isMobile ? "col-12" : "col-12 mx-auto my-2"} ${!isMobile && "d-flex justify-content-between"
                                        }`}
                            >
                                    <div className={`w-100 ${isMobile && "col-12 mb-4 mt-5"}`}>
                                        <input placeholder="Name" name="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email} />
                                        {/* <label style={{ color: "white", fontSize: "12px" }}>{formik.errors.email && formik.touched.email && formik.errors.email}</label> */}
                                    </div>
                                    <div className={`w-100 ${isMobile && "col-12 mb-4"}`}>
                                        <input placeholder="Email" name="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email} />
                                        {/* <label style={{ color: "white", fontSize: "12px" }}>{formik.errors.email && formik.touched.email && formik.errors.email}</label> */}
                                    </div>
                                    <div className={`w-100 ${isMobile && "col-12 mb-4"}`}>
                                        <input placeholder="Phone No." name="phone"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.phone} />
                                        {/* <label style={{ color: "white", fontSize: "12px" }}>{formik.errors.phone && formik.touched.phone && formik.errors.phone}</label> */}
                                    </div>
                                    <div className={`mx-auto ${isMobile && "col-12"}`}>
                                        <button
                                            type="submit"
                                            onSubmit={formik.handleSubmit}
                                            className="sendSeo"
                                            style={{ padding: !isMobile && "15px", whiteSpace:"nowrap" }}
                                        >
                                            Let's Connect
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </form>);
};

export default Section9;

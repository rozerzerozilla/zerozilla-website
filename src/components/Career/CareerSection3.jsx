import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Context";
// form library
import { useFormik } from 'formik';

// valiator
import validator from 'validator';

// date time formatter
import moment from 'moment'

// modal form
import JobApplyModal from "../Modals/JobApplyModal"

// icons
import search from "../../assets/icons/career-search.svg";
import locationIcon from "../../assets/icons/career-location.svg";
import departmentIcon from "../../assets/icons/career-department.svg";
import workTypeIcon from "../../assets/icons/career-worktype.svg";

const careerList = [
    {
        id:1,
        post: "Social Media Content Manager/Trainee",
        remote: true,
        location: "Mysuru, Karnataka",
        department: "Social Media Management",
        fulltime: true,
        date_posted:"Posted Yesterday"
    },
    {
        id: 2,
        post: "Advertising Specialist",
        remote: true,
        location: "Bengaluru, Karnataka",
        department: "Marketing",
        fulltime: true,
        date_posted: "Posted 2 Days ago"
    },
    {
        id: 3,
        post: "Sales Consultant",
        remote: false,
        location: "Bengaluru, Karnataka",
        department: "Sales",
        fulltime: true,
        date_posted: "Posted 2 Days ago"
    },
    {
        id: 4,
        post: "Marketing Success Manager",
        remote: false,
        location: "Bengaluru, Karnataks",
        department: "Marketing",
        fulltime: true,
        date_posted: "Posted 3 Days ago"
    },
    {
        id: 5,
        post: "Social Media Management",
        remote: true,
        location: "Bengaluru, Karnataka",
        department: "Social Media Management",
        fulltime: false,
        date_posted: "Posted 14 Days ago"
    },
]

const domain = process.env.REACT_APP_ENDPOINT_API

const Section3 = () => {
    const [openModal, setModalShow] = useState(false);
    const [designation, setDesignation] = useState('');
    const [career, setCareer] = useState(careerList);
    const [searchText, setSearchText] = useState('');
    const [isMobile] = useContext(AppContext);
    const formik = useFormik({
        initialValues: {
            location: undefined,
            department: undefined,
            workType: undefined,
        },
        onSubmit: (values, { setSubmitting }) => {
            console.log("form submitted");
            fetch(`${domain}/career/job-serch-filters?location=${values.location}&department=${values.department}&worktype=${values.workType}`)
                .then(res => res.json())
                .then(res => {
                    // console.log(res);
                    const arr = [];
                    res.message.map((ele, index) => arr.push({
                        id: index,
                        post: ele.designation,
                        remote: ele.worktype === "Remote" ? true : false,
                        location: ele.location,
                        department: ele.department,
                        date_posted: moment(new Date(ele.posted_date).getTime()).format('MMMM Do YYYY, h:mm:ss a'),
                    }))
                    setCareer(arr);
                    setSubmitting(false);
                    // window.open("/thank-you")
                }).catch(err => {
                    console.log(err, formik.isSubmitting)
                    setSubmitting(false)
                })
        },
    });

    const handleSearchInput = (e) => {
        setSearchText(e.target.value);
        fetch(`${domain}/career/search-career?searchQuery=${e.target.value}`)
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                const arr = [];
                res.message.map((ele, index) => arr.push({
                    id: index,
                    post: ele.designation,
                    remote: ele.worktype === "Remote" ? true : false,
                    location: ele.location,
                    department: ele.department,
                    date_posted: moment(new Date(ele.posted_date).getTime()).format('MMMM Do YYYY, h:mm:ss a'),
                    ...ele,
                }))
                setCareer(arr);
            }).catch(err => {
                console.log(err)
            })
    }

    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`${domain}/career/search-career?searchQuery=${searchText}`)
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                const arr = [];
                res.message.map((ele, index) => arr.push({
                    id: index,
                    post: ele.designation,
                    remote: ele.worktype === "Remote" ? true : false,
                    location: ele.location,
                    department: ele.department,
                    date_posted: moment(new Date(ele.posted_date).getTime()).format('MMMM Do YYYY, h:mm:ss a'),
                    ...ele,
                }))
                setCareer(arr);
            }).catch(err => {
                console.log(err)
            })
    }
    
    useEffect(() => {
        
        fetch(`${domain}/career/job-serch-filters`)
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                const arr = [];
                res.message.map((ele, index) => arr.push({
                    id: index,
                    post: ele.designation,
                    remote: ele.worktype === "Remote" ? true : false,
                    location: ele.location,
                    department: ele.department,
                    date_posted: moment(new Date(ele.posted_date).getTime()).format('MMMM Do YYYY, h:mm:ss a'),
                    ...ele,
                }))
                setCareer(arr);
            }).catch(err => {
                console.log(err)
            })
    },[])

    return (
        <>
        <div className="container-fluid career-section-3" id="job-applying">
            <div className="container">
                <br/><br/>
                <div className="row align-items-center text-left mt-5">
                    <h2>Are You Ready To Make A Difference?</h2>
                    <div className="w-100">
                        <label className="career-subtitle">
                            We believe in marketing, we believe in entrepreneurship,
                            and we believe small businesses are the lifeblood of
                            our communities. If you have that spirit and you believe
                            in helping small businesses grow, we're looking for you!
                        </label>
                    </div>
                </div>

                <br />
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className={`career-form-inputs sectionContent w-100 d-flex align-items-center`}>
                            <img width={"20px"} height={"20px"} src={search} alt="icons" onClick={handleSearch} />
                            <input
                                className="ms-3"
                                type="text"
                                placeholder="eg: java developer or java or react js etc."
                                name={"search"}
                                onChange={handleSearchInput}
                                value={searchText}
                            />
                        </div>
                    </div>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className="row align-items-center">
                        <div className={`${isMobile ? "col-12" : "col-3"}`}>
                            <div className={`career-form-inputs sectionContent w-100 d-flex align-items-center`}>
                                <img width={"20px"} height={"20px"} src={locationIcon} alt="icons" />
                                <select className="ms-3"
                                    name="location"
                                    onChange={formik.handleChange}
                                    value={formik.values.location}>
                                    <option value={undefined}>All Location</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Mysore">Mysore</option>
                                    <option value="USA">USA</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${isMobile ? "col-12 mt-4" : "col-3"}`}>
                            <div className={`career-form-inputs sectionContent w-100 d-flex align-items-center`}>
                                <img width={"20px"} height={"20px"} src={departmentIcon} alt="icons" />
                                <select className="ms-3"
                                    name="department"
                                    onChange={formik.handleChange}
                                    value={formik.values.department}
                                >
                                    <option value={undefined}>All Department</option>
                                    <option value="IT">IT</option>
                                    <option value="HR">HR</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${isMobile ? "col-12" : "col-3"}`}>
                            <div className={`career-form-inputs sectionContent w-100 d-flex align-items-center`}>
                                <img width={"20px"} height={"20px"} src={workTypeIcon} alt="icons" />
                                <select className="ms-3"
                                    name="workType"
                                    onChange={formik.handleChange}
                                    value={formik.values.workType}
                                >
                                    <option value={undefined}>All Work Type</option>
                                    <option value="Office">Office</option>
                                    <option value="Remote">Remote</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${isMobile ? "col-12 mt-4" : "col-3"}`}>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" for="flexSwitchCheckDefault">Remote only</label>
                                </div>
                                <div className="ms-2">
                                    <button
                                        type="submit"
                                        className={"sliderBtns colored "}
                                        onClick={formik.handleSubmit}
                                        style={{ borderRadius: "10px" }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="row mt-5">
                    <div className="col-12 p-4 ">
                            <table className="career-table">
                                <thead>
                                    <tr>
                                        <th>Designation</th>
                                        <th>No of Positions</th>
                                        <th>Remote Type</th>
                                        <th>Location</th>
                                        <th>Department</th>
                                        <th></th>
                                    </tr>
                                </thead>
                            <tbody>
                                {career.map((career, idx) =>
                                    <tr key={idx}>
                                        <td>
                                            <div className="d-flex flex-column align-items-start py-3">
                                                <label className="career-postion-text">{career.post}</label>
                                                <label className="career-posted-text">{ career.date_posted}</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="py-3">
                                                <div className="">
                                                    {career.no_of_position}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="py-3">
                                                <div className={`color-label ${career.remote ? "primary-label" : "secondary-label"} `}>
                                                    {career.remote ? "Remote" : "Office"}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="py-3 ps-3">{career.location}</div>
                                        </td>
                                        <td>
                                            <div className="career-department-text py-3">{career.department}</div>
                                        </td>
                                        <td>
                                            <div className="py-3">
                                                <button type="button"
                                                    onClick={() => {
                                                        setDesignation(career.post)
                                                        setModalShow(true)
                                                    }}
                                                    style={{
                                                        border: "1px solid black",
                                                        fontSize:"14px",
                                                        padding: "3px 8px",
                                                        background: "transparent",
                                                        borderRadius:"5px",
                                                        "&:hover": {
                                                            color: "blue"
                                                        }
                                                    }}
                                                >Apply</button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
            {openModal && <JobApplyModal
                show={openModal}
                onClose={() => setModalShow(false)}
                designation={designation} />}
        </>
    )
}

export default Section3;
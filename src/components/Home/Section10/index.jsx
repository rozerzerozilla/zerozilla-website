import React from "react"
import { Container, Row } from "react-bootstrap"
import BlogCard,{Link} from "./BlogCard";
import {FiArrowRight } from "react-icons/fi";
import { AppContext } from "../../../context/Context";
const blogs = [
    {
        title: "Online Marketing Needs & Hacks Towards Success in Your Business!",
        imgsrc: "static-blog-1-cover.webp",
        desc: "It’s the Digital Age, whether we like or not! But why shouldn’t we like it? Things are so much easier and smoother in a technologically-enabled life? Now, let’s talk about Busin…..",
        link: "https://www.zerozilla.com/blog/online-marketing-needs-hacks-towards-success-in-your-business/",
        category: "Digital Marketing",
    },
    {
        title: "Best Practices for Google Shopping Feed Optimisation",
        imgsrc: "static-blog-2-cover.webp",
        desc: "With Shopping Ads as a platform that shapes every shape and size of businesses, several companies rely on the platform to scale their store. We can easily conclude the platform to be ...",
        link: "https://www.zerozilla.com/blog/best-practices-for-google-shopping-feed-optimisation/",
        category: "Digital Marketing",
    },
    {
        title: "Top 6 Ways You Can Improve Your Website Conversion Rate with SEO",
        imgsrc: "static-blog-3-cover.webp",
        desc: "Conversion Rate Optimization (CRO) and SEO (Search Engine Optimization) are practically two different processes in Digital Marketing but the results which they achieve complement …",
        link: "https://www.zerozilla.com/blog/top-6-ways-you-can-improve-your-website-conversion-rate-with-seo/",
        category: "SEO",
    }
]

export default function () {
    const [isMobile, setIsMobile] = React.useContext(AppContext);
    return (
        <Container className="mb-5">
            <Row>
                {blogs.map((blog, idx) => <div key={idx} className={`p-3 ${isMobile ? 'col-12':'col-4'}`}>
                    <BlogCard
                        image={blog.imgsrc}
                        desc={blog.desc}
                        title={blog.title}
                        link={blog.link}
                        category={blog.category}
                    />
                </div>)}
            </Row>
            <div className="d-flex flex-row-reverse w-100 mt-3">
                <Link href="https://www.zerozilla.com/blog/" target="_blank">Explore More Blogs <FiArrowRight /></Link>
            </div>
        </Container>
    )
}
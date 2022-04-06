import React from 'react'
import styled from "styled-components";
import {FiArrowRight} from "react-icons/fi"
const ImageBox = styled.div`
  position: relative;
  width: 100%;
`;
const Badge = styled.div`;
  transform: translateY(-50%);
  position: absolute;
  top: 100%;
  right: 20px;
  color: #C31F5D;
  background-color: #ffeaf2;
  border-radius: 19px;
  padding: 8px 20px;
  font-size: 13px;
  box-shadow: 3px 6px 15px #cccccc;
`;

export const Link = styled.a`
  text-align: right;
  color: #C31F5D;
`
const Image = styled.image`
  object-fit:cover;
  width:100%;
`;
export default function BlogCard({ image, desc, link, title, category}) {
  return (
    <div className="d-flex flex-column justify-content-between blogCard">
      <ImageBox>
        <img src={require(`../../../assets/images/blogs/${image}`)}
          width="100%"
          style={{ objectFt: "cover" }}
        />
        <Badge>{category}</Badge>
      </ImageBox>
      <div className="p-5 pb-0 mt-2 d-flex flex-column justify-content-center align-items-start">
        <p className="title">{title}</p>
        <p>{desc}</p>
      </div>
      <div className="w-100 d-flex flex-row-reverse px-5 pe-5 pb-5">
        <Link href={link} target="_blank">Read More <FiArrowRight/></Link>
      </div>
    </div>
  )
}

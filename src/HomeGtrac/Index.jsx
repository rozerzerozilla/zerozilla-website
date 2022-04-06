import React from 'react'

import Card from './Card';


const courses = [
    {
        title: "give the title",
        description: "the description",
        img: "image link",
    },
    {
        title: "give the title",
        description: "the description",
        img: "image link",
    },
    {
        title: "give the title",
        description: "the description",
        img: "image link",
    },
    {
        title: "give the title",
        description: "the description",
        img: "image link",
    },
    {
        title: "give the title",
        description: "the description",
        img: "image link",
    },
    {
        title: "give the title",
        description: "the description",
        img: "image link",
    },
]
export default function Index() {
    return courses.map((ele, idx) => <div key={idx} className="col-xs-12 col-md-4">
        <Card
            title={ele.title}
            description={ele.description}
            image={ele.img}
        />
  </div>)
}

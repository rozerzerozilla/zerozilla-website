import React from "react";




function Card({title, description, image, }) {
  return (
      <div className="d-flex flex-column w-100">
          <img src={image} style={{ height: "136px", objectFit: "cover" }} className="gtrac-card-image"/>
          <div className="gtrac-card">
              <div className="gtrac-card-title w-100">
                  {title}
              </div>
              <div className="gtrac-card-description">
                  {description}
              </div>
          </div>
    </div>
  )
}

export default Card
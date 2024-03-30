import React from 'react'
import "./imagecard.css"
const ImageCard = ({imageurl,color,heading}) => {
  return (
    <div className='parent-image-card-component'>
      <div className="image-container-card">
        <img src={imageurl} alt="" />
      </div>
      <div className="image-container-card-heading">
      <h2 className='CardHeading-second-specail poppins-light span-inital'>{heading} <br />
      <a className='read-more-btn-second poppins-regular specail-btn-show-on-hover'>READ MORE {">"}</a> </h2>
      </div>
    </div>
  )
}

export default ImageCard

import React from 'react'

const Banner = (props) => {
  const {title}=props.gentsFashion
  return (
    <div className='collectionSection'>
     <h2>{title}</h2>
    <div className='bannerSection'>
      <div className="bannerBox">
        <img src="assets/GentsBanner.gif" alt="banner" />
      </div>
    </div>
    </div>
  )
}

export default Banner

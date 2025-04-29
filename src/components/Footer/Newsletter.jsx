import React from 'react'
import "./Newsletter.css"
import { SubHeading } from '../SubHeading/SubHeading'


const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <SubHeading title = "Newsletter" />
      <h1 className="headtext_cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss updates</p>
      

    </div>
  )
}

export default Newsletter

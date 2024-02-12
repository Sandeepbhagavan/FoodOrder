import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <center>
        <h3>this is from about component</h3>
        <Link to={"/"}>back to home</Link>
      </center>
    </div>
  )
}

export default About

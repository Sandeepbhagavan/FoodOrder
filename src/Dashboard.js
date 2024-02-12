import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <ceneter>
        <h3>this is from Dashboard component</h3>
        <Link to={"/"}>Back to home</Link>
      </ceneter>
    </div>
  )
}

export default Dashboard

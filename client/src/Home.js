import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <React.Fragment><center>
            <h1>Welcome</h1>
            <h4><Link to='/login'>Click to login</Link></h4></center>
        </React.Fragment>
    )
}

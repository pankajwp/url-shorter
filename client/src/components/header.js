import React from 'react'
import {Link} from 'react-router-dom'

export default function header() {
    return (
    <>
    <nav className="navbar navbar-expand-sm bg-light">

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/stats">Stats</Link>
            </li>        
        </ul>

    </nav>
    </>
    )
}

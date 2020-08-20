import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

const TopNav = () => {
    const location = useLocation()

    return (
        <nav className="topNav">
            <ul>
                <li><Link to="/iphone" className={location.pathname === '/iphone' ? 'active' : ''}>iPhone</Link></li>
                <li><Link to="/macbook" className={location.pathname === '/macbook' ? 'active' : ''}>Macbook Pro</Link></li>
                <li><Link to="/watch" className={location.pathname === '/watch' ? 'active' : ''}>Watch</Link></li>
                <li><Link className="subscribeLink" to="/subscribe">Notify me</Link></li>
            </ul>
        </nav>
    )
}

export default TopNav
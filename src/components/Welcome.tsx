import * as React from 'react'
import { Link } from 'react-router-dom'
import appleIcon from '../images/appleIcon.png'
import TopNav from './TopNav'
import ProductIcons from './ProductIcons'

const Welcome = () => {
    return(
    <section className="welcomeContainer">
        <div className="apple">
            <img src={appleIcon} alt="Apple.com" />
        </div>
        <TopNav />
        <section className="contentBody">
            <div className="contentLogo">
                <img src="https://www.transparentpng.com/thumb/apple-logo/UyOL60-apple-logo-wonderful-picture-images.png" alt="Apple Logo" />    
            </div>
            <h1 className="welcome">Welcome To Apple</h1>
            <div className="products">
                <Link className="productsLink" to="/products">See our Products</Link>
                <ProductIcons />
            </div>
        </section>
    </section>
    )
}

export default Welcome
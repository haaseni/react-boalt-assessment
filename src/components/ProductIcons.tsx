import * as React from 'react'
import { Link } from 'react-router-dom'
import appleWatchIcon from '../images/appleWatchIcon.png'
import iphoneIcon from '../images/iphoneIcon.png'
import macbookIcon from '../images/macbookIcon.png'

const ProductIcons = () => {
    return (
        <div className="productIcons">
            <Link to="/iphone"><img className="iphoneIcon" src={iphoneIcon} alt="iPhone" /></Link>
            <Link to="/macbook"><img className="macbookIcon" src={macbookIcon} alt="Macbook" /></Link>
            <Link to="/watch"><img className="appleWatchIcon" src={appleWatchIcon} alt="Apple Watch" /></Link>
        </div>
    )
}

export default ProductIcons

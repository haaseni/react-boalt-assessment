import * as React from 'react'
import appleLogoWhite from '../images/appleLogoWhite.png'
import appleIcon from '../images/appleIcon.png'
import { useHistory } from 'react-router-dom'
import SpinningYear from './SpinningYear'

const Products = () => {
    React.useEffect(() => delayedRedirect())
    const history = useHistory();

    const delayedRedirect = () => {
        setTimeout(() => {
            history.push('/welcome')
        }, 4000)
    }

    return(
        <div className="productsContainer">
            <header>
                <img src={appleIcon} alt="Apple.com" />
            </header>
            <section className="productsSection">
                <div className="contentLogo">
                    <img src={appleLogoWhite} alt="Apple Logo" />
                </div>
                <h1>New Products Coming This Summer</h1>
            </section>
            <SpinningYear />
        </div>
    )
}

export default Products
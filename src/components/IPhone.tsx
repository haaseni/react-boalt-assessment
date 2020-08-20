import * as React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useScrollInfo from 'react-element-scroll-hook'
import * as Constants from '../utils/Constants'
import TopNav from './TopNav'
import appleIcon from '../images/appleIcon.png'
import appleWatchIcon from '../images/appleWatchIcon.png'
import iphoneIconActive from '../images/iphoneIconActive.png'
import macbookIcon from '../images/macbookIcon.png'
import iphoneFrontFullThumb from '../images/iphoneFrontFullThumb.png'
import iphoneBackTransThumb from '../images/iphoneBackTransThumb.png'
import iphoneFrontFull from '../images/iphoneFrontFull.png'
import appleLogoGray from '../images/appleLogoGray.png'

const IPhone = () => {
    const [productView, setProductView] = React.useState('front')
    const [scrollInfo, setRef] = useScrollInfo();
    const [shippingDate, setShippingDate] = React.useState('')

    const formatDate = (value:string) => {
        const date = new Date(value);
        return `${date.getMonth() + 1}\\${date.getDate()}\\${date.getFullYear()}`
    }
 
    React.useEffect(() => {
        async function fetchData() {
            const result = await axios.get(Constants.API_URL);
            const formattedDate = formatDate(result.data.iphone)
            setShippingDate(formattedDate)
        }
        fetchData();

        // Hard coding the data due to CORS Access-Control-Allow-Origin denial error coming from the API endpoint
        const data = JSON.parse(`{
            "iphone":"2020/02/21",
            "mackbook":"2020/08/04",
            "watch":"2020/11/16"
        }`);
        
        const formattedDate = formatDate(data.iphone)
        setShippingDate(formattedDate)
    }, [setShippingDate])

    const handleScroll = () => {
        if (scrollInfo.x.percentage > .50) {
            setProductView('back')
        } else {
            setProductView('front')
        }
    }

    return(
    <section className="iphoneContainer">
        <section className="apple">
            <img src={appleIcon} alt="Apple.com" />
        </section>
        <TopNav />
        <section className="iphoneBody">
            <div className = "iphoneBodyContent">
                <div className="productName">
                    <h2>iPhone</h2>
                </div>
                <div className="contentLogo">
                    <img className="appleLogo" src={appleLogoGray} alt="Apple Logo" />
                </div>
                <div className="productHeadline">
                    <h1>The ultimate iPhone</h1>
                </div>
                <div className="productTagline">
                    <h3>The future is here. Join the iPhone Upgrade Program to get the latest iPhone - NOW!</h3>
                </div>
                <div className="shippingDate">
                    Starts shipping {shippingDate}
                </div>
            </div>
        </section>
        <section className="iphoneImage">
            <img className={`${productView}`} src={iphoneFrontFull} alt="iPhone" />
        </section>
        <section className="buy">
            <div className="price">From $699</div>
            <div className="buyNow">Buy Now &gt;</div>
        </section>
        <section className="productView">
            <div className={`imageThumbs ${productView}`}>
                <img className="iphoneFront" src={iphoneFrontFullThumb} alt="iPhone front" />
                <img className="iphoneBack" src={iphoneBackTransThumb} alt="iPhone back" />
            </div>
            <div ref={setRef} className="slider" onScroll={handleScroll}>
                <div className="slide">
                </div>
                <div className="slide">
                    <img src={iphoneBackTransThumb} alt="back" />
                </div>
            </div>
            <div className="slidebar"></div>
        </section>
        <section className="products">
            <div className="verticalProductIcons">
                <div><Link to="/iphone"><img className="iphoneIcon" src={iphoneIconActive} alt="iPhone" /></Link></div>
                <div><Link to="/macbook"><img className="macbookIcon" src={macbookIcon} alt="Macbook" /></Link></div>
                <div><Link to="/watch"><img className="appleWatchIcon" src={appleWatchIcon} alt="Apple Watch" /></Link></div>
            </div>
        </section>
    </section>
    )
}

export default IPhone

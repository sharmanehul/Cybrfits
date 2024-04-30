import React from 'react';
import googlePlay from "../../../images/google-play-badge.png";
import appStore from "../../../images/appstore.png";
import "./Footer.css";

const Footer = () =>{
    return (
        <footer id='footer'>
            <div className='leftFooter'>
                <h4>Download Our App!</h4>
                <p>Download App for Android and IOS Mobile Phones</p>
                <img src={googlePlay} alt='playStore'/>
                <img src={appStore} alt='AppStore'/>
            </div>
            <div className='midFooter'>
                <h1>CYBRFITS</h1>
                <p>High Quality Is Our First Priority</p>

                <p>Copyrights 2024 &copy; SharmaNehul</p>

            </div>
            <div className='rightFooter'>
                <h4>Follow Us</h4>
                <a href="http://instagram.com/nonotnoahhh">Instagram</a>
                <a href="http://instagram.com/nonotnoahhh">Facebook</a>
                <a href="http://instagram.com/nonotnoahhh">Youtube</a>
            </div>
        </footer>
    )
}

export default Footer;
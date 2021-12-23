import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Get_In_Touch() {
    return (
        <div className="col-md-6">
            <h1 className="heading pb-3">Get in Touch</h1>
            <div className="pt-3">
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
                <ul className="list-none">
                    <li><span><LocationOnIcon /></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                    <li><span><PhoneIphoneIcon /></span> (617) 557-0089</li>
                    <li><span><MailOutlineIcon /></span> contact@example.com</li>
                </ul>
                <div className="row justify-content-center justify-content-md-start ">
                    <div className="social_icon">
                        <a href="https://www.facebook.com" target="_blank"><FacebookIcon /></a>
                    </div>
                    <div className="social_icon">
                        <a href="https://www.whatsapp.com" target="_blank"><WhatsAppIcon /></a>
                    </div>
                    <div className="social_icon">
                        <a href="https://www.instagram.com" target="_blank"> <InstagramIcon /></a>
                    </div>
                    <div className="social_icon">
                        <a href="https://www.twitter.com" target="_blank"> <TwitterIcon /></a>
                    </div>
                    <div className="social_icon">
                        <a href="https://www.linkedin.com" target="_blank">  <LinkedInIcon /></a>
                    </div>
                    <div className="social_icon">
                        <a href="https://www.github.com" target="_blank"> <GitHubIcon /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

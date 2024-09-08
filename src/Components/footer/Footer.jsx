import { assets } from '../../assets/assets'
import './footer.css'
export default function Footer() {
    return(
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, inventore ex explicabo quisquam molestiae eaque architecto natus asperiores qui quasi?</p>
                    <div className="footer-social">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About-us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+212-690-659-070</li>
                        <li>anastrying05@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
            copyright 2025 <span id='copy'>&copy; </span>
             <span id='site'>Tomato.com </span> 
            powered by <span id='me'>Anas-Bd</span>
            </p>
        </div>
    )
};

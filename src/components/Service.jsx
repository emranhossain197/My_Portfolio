import { BiLogoHtml5 } from 'react-icons/bi'
import { BsFileEarmarkCodeFill, BsWordpress } from "react-icons/bs"
import '../assets/css/Service.css'

const Service = () => {
    return (
        <div id='service' className="Service_contant">
            <h1 className="contant_title">My <span>Services</span></h1>
            <p>Meet my amazing services. 100% client satisfaction is my first priority. If you once take my service promise you will come again and again. If you don't find your desired service, You can also make a custom offer.</p>
            <div className="service_container">
                <div className="service_item">
                    <BiLogoHtml5 className='Icons_Class' />
                    <h2> PSD TO HTML</h2>
                    <p>I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                </div>
                <div className="service_item">
                   <BsFileEarmarkCodeFill className='Icons_Class' />
                    <h2> FRONT-END DEVELOPER</h2>
                    <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
                </div>
                <div className="service_item">
                    < BsWordpress className='Icons_Class' />
                    <h2>WORDPRESS DEVELOPER</h2>
                    <p>I love to develop WordPress websites. I developed more than 300 WordPress websites. It’s fun to create a WordPress website and you will be able to control the complete website from the admin panel.</p>
                </div>
            </div>
        </div>
    )
}
export default Service;
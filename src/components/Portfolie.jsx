import { BiLinkExternal } from "react-icons/bi";
import '../assets/css/Portfolie.css';
import Project1 from "../assets/images/project-1.png";
import Project2 from "../assets/images/project-2.png";
import Project3 from "../assets/images/project-3.png";
import Project4 from "../assets/images/project-4.png";


const Portfolie = () => {
    return (
        <div id='portfolie' className="Portfolie_contant">
            <h1 className='contant_title'>Creative <span>Portfolio</span></h1>
            <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            <div className='portfolio_container'>
                <div className='portfolio_item'>
                    <div className='item-side-1'>
                        <img src={Project1} alt='Portfolio Image' />
                    </div>
                    <div className='item-side-2'>
                        <h2> Modern E-commerce Website</h2>
                        <h6>Our e-commerce project aims to create a cutting-edge online shopping platform that provides an exceptional shopping experience for customers while offering robust tools and features for sellers. This platform will facilitate the buying and selling of a wide range of products, connecting consumers with trusted sellers seamlessly. Key features include a user-friendly interface, personalized product recommendations, secure payment processing, a seller dashboard for managing inventory and orders, and a reliable customer support system. Additionally, the project will focus on optimizing performance, security, and scalability to accommodate future growth. Our goal is to revolutionize online shopping and empower businesses of all sizes to thrive in the digital marketplace.</h6>

                        <div className='use_case_list'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                            <p>jQuery</p>
                            <p>Reactjs</p>
                            <p>Redux</p>
                        </div>
                        <a href='https://nimble-druid-f24f23.netlify.app/' target="_black"><BiLinkExternal /></a>
                    </div>
                </div>
                <div className='portfolio_item'>

                    <div className='item-side-2'>
                        <h2> Modern Breaking News Website</h2>
                        <h6>NewsMaticis your go-to destination for the latest breaking news, in-depth analysis, and comprehensive coverage of current events from around the world. Our news website project is committed to delivering accurate, unbiased, and up-to-the-minute news to keep you informed. Key features of NewsHub include a user-friendly and intuitive interface, real-time news updates, categorization by topics, multimedia integration with photos and videos, and a robust search function. We prioritize journalistic integrity and fact-checking to ensure the reliability of our content.</h6>

                        <div className='use_case_list'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>PHP</p>
                            <p>WordPress</p>

                        </div>
                        <a href='https://nimble-druid-f24f23.netlify.app/' target="_black"><BiLinkExternal /></a>
                    </div>
                    <div className='item-side-1'>
                        <img src={Project3} alt='Portfolio Image' />
                    </div>
                </div>

                <div className='portfolio_item'>

                    <div className='item-side-2'>
                        <h2> MAIZ</h2>
                        <h6> Maiz is a meticulously crafted restaurant website project designed to elevate your dining experience. Our platform serves as a digital gateway to culinary excellence, where patrons can explore our menu, ambiance, and special offerings. Key features include an aesthetically pleasing and user-friendly design, an interactive menu showcasing mouthwatering dishes, online reservation and order placement, detailed restaurant information (hours, location, contact details), and a gallery of tantalizing food and interior photos.</h6>

                        <div className='use_case_list'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>PHP</p>
                            <p>WordPress</p>
                        </div>
                        <a href='https://nimble-druid-f24f23.netlify.app/' target="_black"><BiLinkExternal /></a>
                    </div>
                    <div className='item-side-1'>
                        <img src={Project2} alt='Portfolio Image' />
                    </div>
                </div>
                <div className='portfolio_item'>

                    <div className='item-side-2'>
                        <h2> E-Commmerce of Woostify</h2>
                        <h6>Our e-commerce project is an online platform that enables users to buy and sell products and services over the internet. Through our website and mobile app, customers can easily browse through a diverse range of products, add items to their cart, and securely make payments using various payment methods. Sellers can create their online storefronts, list their products, manage inventory, and process orders, all within our user-friendly interface. Our project aims to provide a seamless and convenient shopping experience for customers while empowering businesses to reach a broader audience and expand their online presence. </h6>

                        <div className='use_case_list'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>WordPress</p>
                        </div>
                        <a href='https://nimble-druid-f24f23.netlify.app/' target="_black"><BiLinkExternal /></a>
                    </div>
                    <div className='item-side-1'>
                        <img src={Project4} alt='Portfolio Image' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolie;
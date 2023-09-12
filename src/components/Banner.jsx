import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import '../assets/css/Banner.css';
import Icon1 from '../assets/images/Ellipse12.png';
import Icon2 from '../assets/images/Ellipse15.png';
import Icon3 from '../assets/images/Polygon1.png';
import Icon4 from '../assets/images/Rectangle51.png';
import Icon5 from '../assets/images/Rectangle52.png';


const Banner = () => {


    return (
        <div id='banner' className="Banner_contant">
            <div className="Banner_Contant_left">
                <h1>Hello! I'm <span>Emran</span> Hossain</h1> <span className='Span_border'></span>
                <h2><span>I'm a </span> <Typewriter
                    options={{
                        strings: [' WordPress Developer', ' Front-End developer', ' WordPress Expert'],
                        autoStart: true,
                        loop: true,
                    }}
                /></h2>
                <p>I’m a highly motivated, ambitious, and creative person who can make you happy to develop an amazing website at an affordable price.</p>
                <button className='btn_my'><Link to='contact'>Hire Me <BiRightArrowAlt/></Link></button>
            </div>
            
            <img src={Icon1} alt="Icon" className='Icon_image1' />
            <img src={Icon2} alt="Icon" className='Icon_image2' />
            <img src={Icon3} alt="Icon" className='Icon_image3' />
            <img src={Icon4} alt="Icon" className='Icon_image4' />
            <img src={Icon5} alt="Icon" className='Icon_image5' />
            <img src={Icon5} alt="Icon" className='Icon_image6' />
        </div>
    )
}

export default Banner
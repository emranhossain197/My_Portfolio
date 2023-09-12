import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-scroll';
import '../assets/css/About.css';
const About = () => {
    return (
        <div id='about' className="About_contant">
            <h1 className='contant_title'>About <span>Me</span></h1>
            <h5>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</h5>
            <div className="about_container">
                <div className="about_container_left">
                    <h3>Get to know me!</h3>
                    <h2>Hi! I'm <b>Emran Hossain</b></h2>
                    <p>I am a professional <b> WordPress Developer </b>. Over the past years, I created 100s of websites for my clients. I pride myself on doing quality work and maintain excellent communication. Most of the time I work with WordPress but some technologies I enjoy working with include ReactJS, JavaScript as well as PHP.</p>
                    <button className='btn_my'><Link to='contact'>Contact<BiRightArrowAlt/></Link></button>
                </div>
                <div className="about_container_right">
                    <h2>My Skills</h2>
                    <div className='Skill_list_container'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>PHP</p>
                        <p>ReactJS</p>
                        <p>WordPress Theme Development</p>
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>Responsive Design</p>
                        <p>Photoshop & Illustrator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
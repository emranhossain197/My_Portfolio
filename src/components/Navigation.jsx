import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { FaHome, FaUsers } from 'react-icons/fa';
import { MdOutlineWork, MdPermContactCalendar } from 'react-icons/md';
import { Link } from 'react-scroll';
import '../assets/css/Navigation.css';

import { useEffect } from 'react';

const Navigation = () => {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.Small-devices-contant');
        const scrollTop = window.scrollY;
        scrollTop >= 200 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return (
        <>
            <div className='Small-devices-contant'>
                {['md'].map((expand) => (
                    <Navbar key={expand} bg="white" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand className='logo'><b>E</b>mran <b>H</b>ossain</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Emran Hossain
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Link to='banner'>Home</Link>
                                        <Link to='about'>About Me</Link>
                                        {/* <Link to='skill'>Skills</Link> */}
                                        <Link to='service'>Service</Link>
                                        <Link to='portfolie'>Portfolio</Link>
                                        <Link to='contact'>Contact</Link>

                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
            <div className='Extra-small-devices-contant'>
                <div className="mobile_menu">
                    <Link to='banner'><FaHome /> <p>Home</p></Link>
                    <Link to='about'><FaUsers /><p>About </p></Link>
                    <Link to='service'><MdOutlineWork /> <p>Service</p></Link>
                    <Link to='contact' ><MdPermContactCalendar /><p>Contact</p></Link>
                </div>
            </div>
        </>
    )
}
export default Navigation;
import { AiFillGithub } from "react-icons/ai";
import { BsDiscord } from 'react-icons/bs';
import "../assets/css/footer.css";

const Footer = () => {
    return (
        <div className="text-center bg-black p-5">
            <div className="social_media">
                <h4>FIND WITH ME</h4>
                <div className="social_media_icons">
                    <ul>
                        <li><a href="https://github.com/emranhossain197" target="_black"><AiFillGithub className="Social_icons"/></a></li>
                        <li><a href="https://discord.gg/8NmnUe65" target="_black"><BsDiscord className="Social_icons"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <p className="text-light">© Copyright 2023-2024 by <span>Emran Hossain</span> – All right reserved.</p>
            </div>
        </div>
    )
}
export default Footer;
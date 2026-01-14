import {Link} from "react-router-dom";
import {FaDiscord, FaFacebook, FaReddit, FaSearch, FaTwitter} from "react-icons/fa";
import { useTheme } from "../../hook/useTheme";

const Footer = (theme : any) => {
    return (
        <div className="">
            <Link to="/" className="flex relative card-hover">
                <img
                    src={
                        theme === "dark"
                            ? `${import.meta.env.BASE_URL}images/logo-dark.png`
                            : `${import.meta.env.BASE_URL}images/logo-light.png`
                    }
                    alt="Logo"
                    className="w-32 h-auto transition-opacity"
                />
            </Link>
        </div>
    )
}

export default Footer;
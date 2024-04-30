import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

import logo from "../../../../designs/img/argentBankLogo.png";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img src={logo} alt="Argen Bank's logo" />
            <ul>
                <li>
                    <Link to={"/sign-in"} target="_top">
                        <img src="" alt="Profil Icon" />
                        <p>Sign In</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

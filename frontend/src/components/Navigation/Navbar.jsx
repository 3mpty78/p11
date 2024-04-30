import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

import logo from "../../../../designs/img/argentBankLogo.png";
import profilIcon from "../../../../designs/img/profil-icon.svg";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link to={"/"} target="_top">
                <img
                    className={styles.logo}
                    src={logo}
                    alt="Argen Bank's logo"
                />
            </Link>
            <ul>
                <li>
                    <Link to={"/sign-in"} target="_top">
                        <img
                            className={styles.profil}
                            src={profilIcon}
                            alt="Profil Icon"
                        />
                        <p>Sign In</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

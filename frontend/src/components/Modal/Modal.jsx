import { useState } from "react";
import Field from "./Field";
import profilIcon from "../../../public/img/profil-icon.svg";
import styles from "./modal.module.css";
import { Link } from "react-router-dom";

const Modal = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    };

    const handleSubmit = () => null;

    return (
        <section className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.heading}>
                    <img src={profilIcon} alt="Profil icon" />
                    <h2>Sign In</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <Field
                        title={"username"}
                        value={email}
                        onChange={handleEmail}
                        classname={styles.field}
                    />
                    <Field
                        title={"password"}
                        value={password}
                        onChange={handlePassword}
                        classname={styles.field}
                    />
                    <div className={styles.remember}>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type="submit">Sign In</button>
                </form>
                <Link to={"/user"} target="_top">
                    Letsgo
                </Link>
            </div>
        </section>
    );
};

export default Modal;

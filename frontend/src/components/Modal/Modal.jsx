import { useState } from "react";
import { Link } from "react-router-dom";
import Field from "./Field";
import styles from "./modal.module.css";
import profilIcon from "/img/profil-icon.svg";

const Modal = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <section className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.heading}>
                    <img src={profilIcon} alt="Profil icon" />
                    <h2>Sign In</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <Field
                        type={"email"}
                        title={"email"}
                        value={email}
                        onChange={handleEmail}
                        classname={styles.field}
                    />
                    <Field
                        type={"password"}
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

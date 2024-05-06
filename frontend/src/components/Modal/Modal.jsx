import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions";
import Field from "./Field";
import profilIcon from "../../../public/img/profil-icon.svg";
import styles from "./modal.module.css";
import { Link } from "react-router-dom";

const Modal = () => {
    const dispatch = useDispatch();
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
        try {
            const response = await fetch(
                "http://localhost:3001/api/v1/user/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );
            if (!response.ok) {
                throw new Error("Erreur lors de la connexion.");
            }
            const responseData = await response.json();
            const { token } = responseData.body;
            dispatch(loginUser({ user: { email, password }, token }));
            console.log(`Logged in as : ${email}, ${password}`);
        } catch (error) {
            console.error("Erreur de connexion :", error);
        }
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

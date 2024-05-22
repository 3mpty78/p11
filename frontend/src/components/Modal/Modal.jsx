import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/slices/loginSlice";
import Field from "./Field";
import styles from "./modal.module.css";
import profilIcon from "/img/profil-icon.svg";

const Modal = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = JSON.parse(localStorage.getItem("token"));

    const login = useSelector((state) => state.signin.login);

    useEffect(() => {
        if (login && token) {
            navigate("/user");
        }
    }, [dispatch, login, token, navigate]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            dispatch(signInUser({ email, password }));
            return;
        }
    };

    const toggleChecked = () => {
        setChecked((state) => !state);
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
                        <input
                            type="checkbox"
                            id="remember"
                            defaultChecked={checked}
                            onChange={toggleChecked}
                        />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </section>
    );
};

export default Modal;

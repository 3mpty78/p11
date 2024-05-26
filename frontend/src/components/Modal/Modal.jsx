/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/slices/loginSlice";
import { signUpUser } from "../../redux/slices/signupSlice";
import Field from "./Field";
import styles from "./modal.module.css";
import profilIcon from "/img/profil-icon.svg";

const Modal = ({ signInOrSignUp }) => {
    // LOCAL STATES
    const [form, setForm] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        userName: "",
    });
    const [checked, setChecked] = useState(false);

    // REDUX
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector((state) => state.signin.login);

    // TOKEN
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        if (login && token) {
            navigate("/user");
        }
    }, [login, token, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        const { email, password } = form;
        if (!email || !password) {
            alert("Tout les champs sont requis !");
        } else {
            dispatch(signInUser({ email, password }));
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (
            !form.email ||
            !form.password ||
            !form.firstName ||
            !form.lastName ||
            !form.userName
        ) {
            alert("Tout les champs sont requis !");
        } else {
            dispatch(signUpUser(form));
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
                    <h2>
                        {signInOrSignUp === "signin" ? "Sign In" : "Sign Up"}
                    </h2>
                </div>
                <form
                    onSubmit={
                        signInOrSignUp === "signin"
                            ? handleSignIn
                            : handleSignUp
                    }>
                    <Field
                        type="email"
                        title="Email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        classname={styles.field}
                    />
                    <Field
                        type="password"
                        title="Password"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        classname={styles.field}
                    />
                    {signInOrSignUp === "signin" ? (
                        <>
                            <div className={styles.remember}>
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={checked}
                                    onChange={toggleChecked}
                                />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                        </>
                    ) : (
                        <>
                            <Field
                                type="text"
                                title="First Name"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleInputChange}
                                classname={styles.field}
                            />
                            <Field
                                type="text"
                                title="Last Name"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleInputChange}
                                classname={styles.field}
                            />
                            <Field
                                type="text"
                                title="Username"
                                name="userName"
                                value={form.userName}
                                onChange={handleInputChange}
                                classname={styles.field}
                            />
                        </>
                    )}
                    <button type="submit">
                        {signInOrSignUp === "signin" ? "Sign In" : "Sign Up"}
                    </button>
                    <p>or</p>
                    <button
                        style={{
                            backgroundColor: "#12002b",
                        }}
                        type="button"
                        onClick={() =>
                            signInOrSignUp === "signin"
                                ? navigate("/sign-up")
                                : navigate("/sign-in")
                        }>
                        {signInOrSignUp === "signin" ? "Sign Up" : "Sign In"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Modal;

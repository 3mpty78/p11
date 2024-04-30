import { useState } from "react";
import Field from "./Field";

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
        <div>
            <div className="heading">
                <img src="" alt="" />
                <h2>Sign In</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Field title={"email"} value={email} onChange={handleEmail} />
                <Field
                    title={"password"}
                    value={password}
                    onChange={handlePassword}
                />
            </form>
            <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </div>
        </div>
    );
};

export default Modal;

/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../../redux/slices/userUpdateSlice";
import { userPost } from "../../redux/slices/userSlice";

import styles from "../Modal/modal.module.css";
import profilIcon from "/img/profil-icon.svg";
import Field from "../Modal/Field";

const EditNameForm = ({ onClickToggleCancel, onClickToggleSave }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.userName);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    const token = JSON.parse(localStorage.getItem("token"));
    const [userName, setUserName] = useState("");

    useEffect(() => {
        setUserName(user);
    }, [user]);

    const saveUsername = (e) => {
        e.preventDefault();
        if (token) {
            dispatch(userUpdate({ token, userName }));
            dispatch(userPost({ token }));
        }
    };

    return (
        <>
            <section className={styles.container}>
                <div className={styles.modal}>
                    <div className={styles.heading}>
                        <img src={profilIcon} alt="Profil icon" />
                        <h2>Update username</h2>
                    </div>

                    <form>
                        <Field
                            title="userName"
                            value={userName}
                            type="text"
                            classname={styles.field}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <Field
                            title="firstName"
                            value={firstName}
                            type="text"
                            classname={styles.field}
                            onChange={() => {}}
                        />
                        <Field
                            title="lastName"
                            value={lastName}
                            type="text"
                            classname={styles.field}
                            onChange={() => {}}
                        />

                        <div className={styles.button} onClick={saveUsername}>
                            <button onClick={onClickToggleSave}>Save</button>
                        </div>
                        <div className={styles.button}>
                            <button
                                style={{
                                    backgroundColor: "#c40000",
                                    borderColor: "#c40000",
                                }}
                                onClick={onClickToggleCancel}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default EditNameForm;

import { useDispatch, useSelector } from "react-redux";
import BankAccountCard from "../components/BankAccountCard/BankAccountCard";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userPost } from "../redux/slices/userSlice";
import EditNameForm from "../components/EditForm/EditForm";

const User = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userName = useSelector((state) => state.user.userName);
    const token = JSON.parse(localStorage.getItem("token"));

    const [toggleEditForm, setToggleEditForm] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate("/user/signin");
            return;
        }
        dispatch(userPost({ token }));
    }, [token, navigate, dispatch]);

    const toggleEdit = () => {
        if (token) {
            setToggleEditForm((current) => !current);
        }
    };

    return (
        <Layout>
            <section className="bankAccounts">
                {toggleEditForm ? (
                    <EditNameForm
                        onClickToggleCancel={toggleEdit}
                        onClickToggleSave={toggleEdit}
                    />
                ) : (
                    <>
                        <h1>
                            Welcome back <br />
                            {`${userName}`}!
                        </h1>
                        <button onClick={toggleEdit}>Edit name</button>
                        <BankAccountCard
                            title="Argent Bank Checking (x8349)"
                            amount="2,082.79"
                            balance="Available Balance"
                        />
                        <BankAccountCard
                            title="Argent Bank Savings (x6712)"
                            amount="10,928.42"
                            balance="Available Balance"
                        />
                        <BankAccountCard
                            title="Argent Bank Credit Card (x8349)"
                            amount="184.30"
                            balance="Current Balance"
                        />
                    </>
                )}
            </section>
        </Layout>
    );
};

export default User;

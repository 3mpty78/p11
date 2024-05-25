import Layout from "../components/Layout";
import Modal from "../components/Modal/Modal";

const SignIn = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    return (
        <>
            <Layout>
                <Modal signInOrSignUp={"signin"} token={token} />
            </Layout>
        </>
    );
};

export default SignIn;

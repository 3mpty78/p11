import Layout from "../components/Layout";
import Modal from "../components/Modal/Modal";

const SignUp = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    return (
        <>
            <Layout>
                <Modal signInOrSignUp={"signup"} token={token} />
            </Layout>
        </>
    );
};

export default SignUp;

import Layout from "../components/Layout";
import Modal from "../components/Modal/Modal";

const SignUp = () => {
    return (
        <>
            <Layout>
                <Modal signInOrSignUp={"signup"} />
            </Layout>
        </>
    );
};

export default SignUp;

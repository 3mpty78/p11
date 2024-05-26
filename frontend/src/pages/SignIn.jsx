import Layout from "../components/Layout";
import Modal from "../components/Modal/Modal";

const SignIn = () => {
    return (
        <>
            <Layout>
                <Modal signInOrSignUp={"signin"} />
            </Layout>
        </>
    );
};

export default SignIn;

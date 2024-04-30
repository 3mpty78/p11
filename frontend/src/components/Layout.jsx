/* eslint-disable react/prop-types */
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            {children}
            <Footer />
        </>
    );
};

export default Layout;

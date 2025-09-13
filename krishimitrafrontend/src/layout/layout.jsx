import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const Layout = ({ children, showNavbar = true, showFooter = true }) => {
    return (
        <>
            {showNavbar && <Navbar />}
            <main>{children}</main>
            {showFooter && <Footer />}
        </>
    );
};

export default Layout;

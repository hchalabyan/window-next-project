import Header from "./Header";
import Footer from "@/components/footer";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;

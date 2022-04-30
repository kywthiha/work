import Footer from "./footer";
import Header from "./header";
import styles from "./layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

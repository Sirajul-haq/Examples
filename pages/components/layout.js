import Footer from "./footer";
import Navbar from "./navbar";
import styles from "../../styles/Home.module.css";


export default function Layout({children}) {
    return (
        
        <div className={styles.container}>

            <Navbar />

            {children}

            <Footer />

        </div>
    )
}
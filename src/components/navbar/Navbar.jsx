import Link from "next/link";
import Urls from "./links/Urls";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Helper
      </Link>
      <div>
        <Urls />
      </div>
    </div>
  );
};

export default Navbar;

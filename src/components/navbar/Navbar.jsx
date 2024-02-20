import Link from "next/link";
import Urls from "./links/Urls";
import styles from "./navbar.module.css";
import NextAuth from "next-auth/next";

const Navbar = async () => {
  const session = false;
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Helper
      </Link>
      <div>
        <Urls session={session} />
      </div>
    </div>
  );
};

export default Navbar;

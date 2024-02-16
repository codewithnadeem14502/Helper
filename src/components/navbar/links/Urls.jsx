"use client";
import styles from "./urls.module.css";
import NavLinks from "./navLinks/NavLinks";
import { useState } from "react";
import Image from "next/image";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
  {
    title: "blog",
    path: "/blog",
  },
];
const Urls = () => {
  const [open, setOpen] = useState(false);

  const session = false;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks items={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks items={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks items={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !open)}
        className={styles.menuButton}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLinks items={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Urls;

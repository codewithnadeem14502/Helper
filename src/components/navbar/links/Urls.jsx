"use client";
import styles from "./urls.module.css";
import NavLinks from "./navLinks/NavLinks";
import { useState } from "react";
import Image from "next/image";
import { HandleLogout } from "@/lib/action";
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
const Urls = ({ session }) => {
  const [open, setOpen] = useState(false);

  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks items={link} key={link.title} />
        ))}
        {session ? (
          <>
            {session?.user.isAdmin && (
              <NavLinks items={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={HandleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
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

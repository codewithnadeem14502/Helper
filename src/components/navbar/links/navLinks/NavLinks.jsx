"use client";
import Link from "next/link";
import styles from "./navLinks.module.css";
import { usePathname } from "next/navigation";
const NavLinks = ({ items }) => {
  // show as wheather link page is active or not
  const pathName = usePathname();
  return (
    <Link
      className={`${styles.container} 
    ${pathName === items.path && styles.active}
    `}
      href={items.path}
    >
      {items.title}
    </Link>
  );
};

export default NavLinks;

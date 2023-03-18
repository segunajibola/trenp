"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-2 md:py-4 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between`}>
      <Link href="/" className="text-3xl mb-5 text-white text-center leading-[30.24px]">
        TRENP
      </Link>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;

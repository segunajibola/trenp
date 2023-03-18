'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">

        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            TRENP
          </h4>
          <p className="font-normal text-[18px] text-white">
            Made with ❤, <a href="https://www.nextjs.org">Nextjs</a>  and <a href="https://tailwindcss.com">TailwindCSS</a> by Segun Ajibola.
          </p>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © {new Date().getFullYear()} Trenp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;

import type { FC, PropsWithChildren } from "react";
import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import config from "../../package.json";
import styles from "./layout.module.scss";
import "../styles/global.scss";
import { Disclaimer } from "../components/disclaimer";

const font = Montserrat({
  weight: ["700"],
  subsets: ["cyrillic", "latin"],
  variable: "--montserrat",
  display: "swap",
});

const currentYear = new Date().getFullYear();

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <html lang={"ru"} className={font.variable}>
    <body className={styles.body}>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>{currentYear}, пивной четверг ®</p>
      </footer>
      <Disclaimer
        text="Мы ни в коем случае никого и ни к чему не призываем, тем более не агитируем употреблять
      спиртные напитки! Всё это - постирония, не более!"
      />
      <Disclaimer text="Чрезмерное употребление алкоголя вредит вашему здоровью" />
    </body>
  </html>
);

const metadata: Metadata = {
  metadataBase: new URL(config.homepage),
};

export default Layout;
export { metadata };

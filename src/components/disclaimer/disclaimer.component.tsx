import type { FC } from "react";
import styles from "./disclaimer.module.scss";
import React from "react";

type Props = { text: string };
const Disclaimer: FC<Props> = ({ text }) => <p className={styles.disclaimer}>{text}</p>;

export { Disclaimer };

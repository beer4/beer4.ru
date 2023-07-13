import type { FC } from "react";
import styles from "./information.module.scss";

type Props = { text: string };

const Information: FC<Props> = ({ text }) => <p className={styles.information}>{text}</p>;

export { Information };

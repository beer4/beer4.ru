import type { FC } from 'react';
import React from 'react';
import styles from './disclaimer.module.scss';

type Props = { text: string };
const Disclaimer: FC<Props> = ({ text }) => <p className={styles.disclaimer}>{text}</p>;

export { Disclaimer };

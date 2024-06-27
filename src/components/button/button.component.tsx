import type { FC } from 'react';
import Link from 'next/link';
import styles from './button.module.scss';

type Props = { url: string; text: string };

const Button: FC<Props> = ({ url, text }) => (
  <Link href={url} target="_blank" className={styles.button}>
    {text}
  </Link>
);

export { Button };

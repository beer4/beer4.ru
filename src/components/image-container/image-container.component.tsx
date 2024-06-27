import type { FC } from 'react';
import styles from './image-container.module.scss';

type Props = { renderImage: FC<{ className: string }> };

const ImageContainer: FC<Props> = ({ renderImage: Child }) => (
  <a href="/" className={styles.imageContainer}>
    <Child className={styles.img} />
  </a>
);

export { ImageContainer };

import type { FC } from "react";
import { format } from "date-fns";
import styles from "./upcoming-event-information.module.scss";
import Link from "next/link";

type Props = {
  date: Date;
  place: string;
  location: string;
};

const UpcomingEventInformation: FC<Props> = ({ date, location, place }) => {
  const dateString = format(date, "dd.MM.yyyy");

  return (
    <p className={styles.upcomingEventInformation}>
      Следующий пивной четверг
      <br />
      будет в четверг
      <br />
      <br />
      <span className={styles.accent}>{dateString}</span>
      <br />
      <br />
      по адресу:
      <br />
      <Link href={location} target="_blank" rel="noopener noreferrer" className={styles.accent}>
        {place}
      </Link>
      <br />
      <br />
      Стартуем в 19:00
    </p>
  );
};

export { UpcomingEventInformation };

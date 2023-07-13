import type { Metadata } from "next";
import config from "../../package.json";
import { ImageContainer } from "../components/image-container";
import Image from "next/image";
import { Logo, LogoFooter } from "../assets";
import { Information } from "../components/information";
import { Button } from "../components/button";
import { UpcomingEventInformation } from "../components/upcoming-event-information";
import styles from "./page.module.scss";
import classNames from "classnames";
import { getData } from "../services/contentful";
import { DESCRIPTION, TELEGRAM_LINK, TITLE } from "../seo";

const Home = async () => {
  const { date, place, location } = await getData();

  return (
    <>
      <ImageContainer
        renderImage={({ className }) => (
          <Image className={classNames(className, styles.imgMain)} src={Logo} alt={TITLE} />
        )}
      />
      <Information text={DESCRIPTION} />

      <Button url={TELEGRAM_LINK} text="Вот наш чат в телеграме" />

      <UpcomingEventInformation date={date} place={place} location={location} />

      <ImageContainer
        renderImage={({ className }) => (
          <Image className={classNames(className, styles.imgFooter)} src={LogoFooter} alt={TITLE} />
        )}
      />
    </>
  );
};

const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: config.keywords,
};

export default Home;
export { metadata };

import { Metadata } from "next";
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

const TITLE = "Пивной Четверг";
const DESCRIPTION =
  "Пивной Четверг - это еженедельнейшая Самарская IT-конференция в одном из баров в районе центра, на которой все пьют пиво и разговаривают";
const TELEGRAM_LINK = "https://t.me/joinchat/Ew15LEePsg6RSO40ebtFrg";

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

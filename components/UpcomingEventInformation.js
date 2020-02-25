import React from 'react';

import * as moment from 'moment';

const UpcomingEventInformation = props => {
  const date = moment(props.date).format('DD.MM.YYYY');
  const location = props.location;
  const placeTitle = props.placeTitle;

  /**
   * YandexMaps Link example
   *
   * https://yandex.ru/maps/?pt=30.335429,59.944869&z=18&l=map
   *
   * 53,20326855803267
   * 50,125682186508165
   */

  return (
    <p className="upcoming-event-information">
      Следующий пивной четверг<br></br>будет проходить в четверг<br></br>
      <span>{date}</span>
      <br></br>
      по адресу:
      <br></br>
      <a href="http://yandex.ru">
        {location}, {placeTitle}
      </a>
      <br></br> c 7 часов вечера
      <style jsx>{`
        .upcoming-event-information {
          margin: auto;
          padding-bottom: 30px;
          font-size: 25px;
          width: 100%;
        }
        .upcoming-event-information a,
        span {
          color: #ff54b0;
        }
        @media (max-width: 570px) {
          .information {
            font-size: 13px;
          }
        }
      `}</style>
    </p>
  );
};

export default UpcomingEventInformation;

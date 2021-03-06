import React from 'react';
import PropTypes from 'prop-types';

import * as moment from 'moment';

const UpcomingEventInformation = props => {
  const { date, place, location } = props;
  const parsedDate = moment(date).format('DD.MM.YYYY');
  const yandexMapUrl = `https://maps.yandex.ru/?text=${location.lat},${location.lon}`;

  return (
    <p className="upcoming-event-information">
      Следующий пивной четверг
      <br />
      будет проходить в четверг
      <br />
      <span>{parsedDate}</span>
      <br />
      по адресу:
      <br />
      <a href={yandexMapUrl} target="_blank" rel="noopener noreferrer">
        {place}
      </a>
      <br />c 18:00 и до "последнего клиента"
      <style jsx>
        {`
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
        `}
      </style>
    </p>
  );
};

UpcomingEventInformation.propTypes = {
  date: PropTypes.string,
  place: PropTypes.string,
  location: PropTypes.instanceOf(Object),
};

UpcomingEventInformation.defaultProps = {
  date: String(new Date()),
  place: 'Полевая 55, Бар "Шишкин"',
  location: { lon: 50.125682186508165, lat: 53.20326855803267 },
};

export default UpcomingEventInformation;

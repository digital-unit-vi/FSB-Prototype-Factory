"use client";

import { ArrowRight, Typography } from "@vorwerk/fibre-react";
import styles from "./eventList.module.scss";

interface Event {
  dates: string[];
  title: string;
  url: string;
}

interface EventListProps {
  events: Event[];
}

const EventList = ({ events }: EventListProps) => {
  return (
    <div className={styles.eventList}>
      {events.map((event, index) => (
        <a href={event.url} key={index} className={styles.eventItem}>
          <div className={styles.eventDates}>
            {event.dates.map((date, dateIndex) => (
              <Typography
                key={dateIndex}
                variant="paragraph14"
                fontWeight="regular"
                className={styles.eventDate}
              >
                {date}
              </Typography>
            ))}
          </div>
          <div className={styles.separator} />
          <Typography
            variant="paragraph14"
            fontWeight="bold"
            className={styles.eventTitle}
          >
            {event.title}
          </Typography>
          <ArrowRight width={20} height={20} />
        </a>
      ))}
    </div>
  );
};

export default EventList;

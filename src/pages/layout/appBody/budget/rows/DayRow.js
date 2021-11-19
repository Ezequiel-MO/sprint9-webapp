import DinnerRows from "./DinnerRows";
import EventRows from "./EventRows";
import LunchRows from "./LunchRows";

const DayRow = ({ day, pax }) => {
  return (
    <>
      <EventRows pax={pax} date={day.date} events={day.events} />
      <LunchRows pax={pax} date={day.date} lunchOptions={day.lunch} />
      <DinnerRows pax={pax} date={day.date} dinnerOptions={day.dinner} />
    </>
  );
};

export default DayRow;

import Rows from "./Rows";

const DayRow = ({ day, pax }) => {
  return (
    <>
      <Rows pax={pax} date={day.date} options={day.events} cat='Event' />
      <Rows pax={pax} date={day.date} options={day.lunch} cat='Lunch' />
      <Rows pax={pax} date={day.date} options={day.dinner} cat='Dinner' />
    </>
  );
};

export default DayRow;

import Rows from "./Rows";

const DayRow = ({ day, pax }) => {
  return (
    <>
      {day.morningEvents.length > 0 ? (
        <Rows
          pax={pax}
          date={day.date}
          options={day.morningEvents}
          cat='Morning Event'
        />
      ) : null}
      {day.lunch.length > 0 ? (
        <Rows pax={pax} date={day.date} options={day.lunch} cat='Lunch' />
      ) : null}
      {day.afternoonEvents.length > 0 ? (
        <Rows
          pax={pax}
          date={day.date}
          options={day.afternoonEvents}
          cat='Afternoon Event'
        />
      ) : null}
      {day.dinner.length > 0 ? (
        <Rows pax={pax} date={day.date} options={day.dinner} cat='Dinner' />
      ) : null}
    </>
  );
};

export default DayRow;

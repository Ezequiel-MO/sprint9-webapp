import Rows from "./Rows";

const DayRow = ({ day, pax }) => {
  return (
    <>
      {day.morningEvents.length > 0 ? (
        <Rows
          pax={pax}
          date={day.date}
          options={day.morningEvents}
          cat='Morning Events'
          id='morningEvents'
        />
      ) : null}
      {day.lunch.length > 0 ? (
        <Rows
          pax={pax}
          date={day.date}
          options={day.lunch}
          cat='Lunch'
          id='lunch'
        />
      ) : null}
      {day.afternoonEvents.length > 0 ? (
        <Rows
          pax={pax}
          date={day.date}
          options={day.afternoonEvents}
          cat='Afternoon Event'
          id='afternoonEvents'
        />
      ) : null}
      {day.dinner.length > 0 ? (
        <Rows
          pax={pax}
          date={day.date}
          options={day.dinner}
          cat='Dinner'
          id='dinner'
        />
      ) : null}
    </>
  );
};

export default DayRow;

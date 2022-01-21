import Rows from "./Rows";

const DayRow = ({ day, pax }) => {
  return (
    <>
      {day.transfer_in?.length > 0 ? (
        <Rows
          pax={day.transfer_in.length}
          date='Arrival Day'
          options={day.transfer_in}
          description='Transfer Airport/ Hotel'
          id='transfer_in'
        />
      ) : null}
      {day.morningEvents?.length > 0 &&
      day.morningEvents[0].transfer.length > 0 ? (
        <Rows
          pax={day.morningEvents[0].transfer.length}
          date={day.date}
          options={day.morningEvents[0].transfer}
          description='Morning Transfer Service'
          id='transfers'
        />
      ) : null}
      {day.morningEvents?.length > 0 ? (
        <Rows
          pax={pax}
          date={day.date}
          options={day.morningEvents}
          cat='Morning Events'
          id='morningEvents'
        />
      ) : null}

      {day.lunch?.length > 0 ? (
        <Rows
          pax={day.lunch[0].transfer?.length}
          date={day.date}
          options={day.lunch}
          cat='Lunch'
          id='lunch'
        />
      ) : null}
      {day.afternoonEvents?.length > 0 &&
      day.afternoonEvents[0].transfer?.length > 0 ? (
        <Rows
          pax={day.afternoonEvents[0].transfer.length}
          date={day.date}
          options={day.afternoonEvents[0].transfer}
          description='Afternoon Transfer service'
          cat='Afternoon Events'
          id='transfers'
        />
      ) : null}
      {day.afternoonEvents?.length > 0 ? (
        <Rows
          pax={pax}
          date={day.date}
          options={day.afternoonEvents}
          cat='Afternoon Event'
          id='afternoonEvents'
        />
      ) : null}
      {day.dinner?.length > 0 ? (
        <Rows
          pax={pax}
          date={day.date}
          options={day.dinner}
          cat='Dinner'
          id='dinner'
        />
      ) : null}
      {day.transfer_out?.length > 0 ? (
        <Rows
          pax={day.transfer_out.length}
          date='Departure Day'
          options={day.transfer_out}
          description='Transfer Out to Airport'
          id='transfer_out'
        />
      ) : null}
    </>
  );
};

export default DayRow;

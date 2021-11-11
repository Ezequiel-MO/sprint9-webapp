import Event from "./events/Event";
import Lunch from "./lunchOptions/Lunch";
import Dinner from "./dinnerOptions/Dinner";

const Day = ({ day }) => {
  return (
    <div>
      <h4>{day.date}</h4>
      <div>
        {
          //Render the Events if any
          day.events?.map((event) => (
            <Event key={event._id} event={event} />
          ))
        }
      </div>
      <div>
        {
          //Render the Lunch Options if any
          day.lunch?.map((lunchOption) => (
            <Lunch key={lunchOption._id} lunchOption={lunchOption} />
          ))
        }
      </div>
      <div>
        {
          //Render the Dinner Options if any
          day.dinner?.map((dinnerOption) => (
            <Dinner key={dinnerOption._id} dinnerOption={dinnerOption} />
          ))
        }
      </div>
    </div>
  );
};

export default Day;

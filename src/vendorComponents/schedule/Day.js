import Event from "./events/Event";
import Lunch from "./lunchOptions/Lunch";
import Dinner from "./dinnerOptions/Dinner";
import VendorOptionsTab from "../utilComponents/tabs/VendorOptionsTab";

const Day = ({ day }) => {
  return (
    <div>
      <h2>{day.date}</h2>
      {day.events.length > 1 ? (
        <VendorOptionsTab tabList={day.events} category='events' />
      ) : (
        day.events?.map((event) => <Event key={event._id} event={event} />)
      )}
      <div>
        {day.lunch.length > 1 ? (
          <VendorOptionsTab tabList={day.lunch} category='lunch' />
        ) : (
          day.lunch?.map((lunchOption) => (
            <Lunch key={lunchOption._id} lunchOption={lunchOption} />
          ))
        )}
      </div>
      <div>
        {day.dinner.length > 1 ? (
          <VendorOptionsTab tabList={day.dinner} category='dinner' />
        ) : (
          day.dinner?.map((dinnerOption) => (
            <Dinner key={dinnerOption._id} dinnerOption={dinnerOption} />
          ))
        )}
      </div>
    </div>
  );
};

export default Day;

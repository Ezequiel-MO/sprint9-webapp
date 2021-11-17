import Hotel from "../../hotel/Hotel";
import Dinner from "../../schedule/dinnerOptions/Dinner";
import Event from "../../schedule/events/Event";
import Lunch from "../../schedule/lunchOptions/Lunch";

export const renderTab = (item, category) => {
  switch (category) {
    case "hotels":
      return <Hotel hotel={item} key={item._id} />;
    case "dinner":
      return <Dinner dinnerOption={item} key={item._id} />;
    case "events":
      return <Event event={item} key={item._id} />;
    case "lunch":
      return <Lunch lunchOption={item} key={item._id} />;
    default:
      return;
  }
};

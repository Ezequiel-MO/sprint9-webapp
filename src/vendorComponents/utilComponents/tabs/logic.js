import Hotel from "../../hotel/Hotel";
import Dinner from "../../schedule/dinnerOptions/Dinner";
import Event from "../../schedule/events/Event";
import Lunch from "../../schedule/lunchOptions/Lunch";

export const renderTab = (item, index, value, category) => {
  if (index === value) {
    switch (category) {
      case "hotels":
        return <Hotel hotel={item} key={item._id} />;
      case "dinner":
        return <Dinner dinnerOption={item} key={item._id} />;
      case "morning-events":
        return <Event event={item} key={item._id} />;
      case "afternoon-events":
        return <Event event={item} key={item._id} />;
      case "lunch":
        return <Lunch lunchOption={item} key={item._id} />;
      default:
        return;
    }
  }
};

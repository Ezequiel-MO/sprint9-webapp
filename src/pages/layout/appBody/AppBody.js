import { useLocation } from "react-router";
import Hotel from "../../../vendorComponents/hotel/Hotel";
import Day from "../../../vendorComponents/schedule/Day";
import { ScAppBodyRoot } from "../styles";

const AppBody = () => {
  //retrieve codeMatch from navigate() with useLocation()
  const {
    state: { codeMatch },
  } = useLocation();

  console.log("code match in app body=>", codeMatch);

  return (
    <ScAppBodyRoot elevation={2}>
      <div>
        {
          //if codeMatch is not null, then map the hotels array property of codeMatch and render the Hotel component
          codeMatch &&
            codeMatch.hotels?.map((hotel) => (
              <Hotel key={hotel._id} hotel={hotel} />
            ))
        }
      </div>
      <div>
        {
          //if codeMatch is not null, then map the schedule array property of codeMatch and render the Day component
          codeMatch &&
            codeMatch.schedule?.map((day) => <Day key={day._id} day={day} />)
        }
      </div>
    </ScAppBodyRoot>
  );
};

export default AppBody;

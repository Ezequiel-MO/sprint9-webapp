import { useLocation } from "react-router";
import Hotel from "../../vendorComponents/hotel/Hotel";

const AppBody = () => {
  //retrieve codeMatch from navigate() with useLocation()
  const {
    state: { codeMatch },
  } = useLocation();

  console.log("code match in app body=>", codeMatch);

  return (
    <div>
      {
        //if codeMatch is not null, then map the hotels array property of codeMatch and render the hotel component
        codeMatch &&
          codeMatch.hotels &&
          codeMatch.hotels.map((hotel) => (
            <Hotel key={hotel._id} hotel={hotel} />
          ))
      }
    </div>
  );
};

export default AppBody;

import Day from "../../../vendorComponents/schedule/Day";
import { ScAppBodyRoot } from "../styles";
import VendorOptionsTab from "../../../vendorComponents/utilComponents/tabs/VendorOptionsTab";
import Hotel from "../../../vendorComponents/hotel/Hotel";
import Budget from "./budget/Budget";

const AppBody = ({ codeMatch }) => {
  return (
    <ScAppBodyRoot elevation={2}>
      <div>
        {codeMatch && codeMatch.hotels.length > 1 ? (
          <VendorOptionsTab tabList={codeMatch.hotels} category='hotels' />
        ) : (
          <Hotel hotel={codeMatch.hotels[0]} />
        )}
      </div>
      <div>
        {
          //if codeMatch is not null, then map the schedule array property of codeMatch and render the Day component
          codeMatch &&
            codeMatch.schedule?.map((day) => <Day key={day._id} day={day} />)
        }
      </div>
      <div>
        {codeMatch && (
          <Budget
            pax={codeMatch?.nrPax}
            schedule={codeMatch?.schedule}
            hotels={codeMatch?.hotels}
          />
        )}
      </div>
    </ScAppBodyRoot>
  );
};

export default AppBody;

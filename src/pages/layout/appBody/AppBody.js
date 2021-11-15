import Day from "../../../vendorComponents/schedule/Day";
import { ScAppBodyRoot } from "../styles";
import VendorOptionsTab from "../../../vendorComponents/utilComponents/tabs/VendorOptionsTab";

const AppBody = ({ codeMatch }) => {
  console.log("code match in app body=>", codeMatch);

  return (
    <ScAppBodyRoot elevation={2}>
      <div>
        {codeMatch && (
          <VendorOptionsTab tabList={codeMatch.hotels} category='hotels' />
        )}
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

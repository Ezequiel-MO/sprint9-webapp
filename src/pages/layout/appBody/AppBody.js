import Day from "../../../vendorComponents/schedule/Day";
import { pageStyle, ScAppBodyRoot } from "../styles";
import VendorOptionsTab from "../../../vendorComponents/utilComponents/tabs/VendorOptionsTab";
import Hotel from "../../../vendorComponents/hotel/Hotel";
import Budget from "./budget/Budget";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../features/DarkModeSlice";
import Footer from "./footer/Footer";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const AppBody = ({ codeMatch }) => {
  const darkMode = useSelector(selectDarkMode);

  const budgetRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => budgetRef.current,
    //insert styles
    pageStyle: () => pageStyle,
  });

  return (
    <ScAppBodyRoot elevation={2} darkMode={darkMode}>
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
          <>
            <button onClick={handlePrint}>Print this out!</button>
            <Budget
              ref={budgetRef}
              pax={codeMatch?.nrPax}
              schedule={codeMatch?.schedule}
              hotels={codeMatch?.hotels}
            />
          </>
        )}
      </div>
      <Footer />
    </ScAppBodyRoot>
  );
};

export default AppBody;

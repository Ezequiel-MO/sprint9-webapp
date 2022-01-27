import { BtnMyLocaion, MapView, SearchBar } from "../components";

export const HomeScreen = ({ codeMatch }) => {
  return (
    <div>
      <MapView codeMatch={codeMatch} />
      <BtnMyLocaion />
      <SearchBar />
    </div>
  );
};

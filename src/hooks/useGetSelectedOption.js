import { useState, useEffect } from "react";

const useGetSelectedOption = (array, value) => {
  //finds if the value matches the name property of any object in the array, and returns the object or null
  const [selectedOption, setSelectedOption] = useState({});

  useEffect(() => {
    const selectedOption = array.find((option) => option.name === value);
    selectedOption
      ? setSelectedOption(selectedOption)
      : setSelectedOption(null);
  }, [array, value]);

  return { selectedOption };
};

export default useGetSelectedOption;

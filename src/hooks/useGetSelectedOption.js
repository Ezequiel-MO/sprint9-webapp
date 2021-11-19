import { useState, useEffect } from "react";

const useGetSelectedOption = (array, value) => {
  //finds if the value matches the namee property of any object in the array, and returns the object
  const [selectedOption, setSelectedOption] = useState({});

  useEffect(() => {
    const selectedOption = array.find((option) => option.name === value);
    setSelectedOption(selectedOption);
  }, [array, value]);

  return { selectedOption };
};

export default useGetSelectedOption;

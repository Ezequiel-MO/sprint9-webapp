import { useRef } from "react";
import "./styles.css";
import { Icon } from "@iconify/react";

export const SearchBar = () => {
  const debounceRef = useRef();

  const onQueryChange = (e) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      console.log("debounced value", e.target.value);
    }, 1000);
  };
  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Search locations...'
        className='form-control'
        onChange={onQueryChange}
      />
      <div className='search-icon'>
        <Icon icon='cil:magnifying-glass' />
      </div>
    </div>
  );
};

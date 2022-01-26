import { useContext, useRef } from "react";
import "./styles.css";
import { Icon } from "@iconify/react";
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const debounceRef = useRef();
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChange = (e) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(e.target.value);
    }, 500);
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
      <SearchResults />
    </div>
  );
};

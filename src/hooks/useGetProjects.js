import { useAxiosFetch } from "./useAxiosFetch";
import { useEffect, useState } from "react";
import { baseURL } from "../api/axios";

const useGetProjects = () => {
  //set state for the projects retrieved from the database
  const [projects, setProjects] = useState([]);

  const {
    data: { projects: fetchedProjects },
  } = useAxiosFetch(`${baseURL}/projects`);

  //update the state with the projects
  useEffect(() => {
    setProjects(fetchedProjects);
  }, [fetchedProjects]);

  return { projects };
};

export default useGetProjects;

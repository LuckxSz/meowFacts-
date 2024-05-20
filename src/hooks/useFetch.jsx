import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://meowfacts.herokuapp.com/?lang=por",
});

export const useFetch = (url) => {
  const [facts, setFacts] = useState({ data: "", loading: true, error: null });

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setFacts((prevState) => ({ ...prevState, data: response.data.data }));
      })
      .catch((err) => {
        setFacts((prevState) => ({ ...prevState, error: err }));
      })
      .finally(() => {
        setFacts((prevState) => ({ ...prevState, loading: false }));
      });
  }, []);
  return facts;
};

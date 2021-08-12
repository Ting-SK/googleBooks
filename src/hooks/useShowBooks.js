import { useEffect, useState } from "react";
import { useAppContext } from "../core/context";

export const useShowBooks = (book) => {
  const { getCategories, sorting } = useAppContext();
  const [booksData, setBooksData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = "AIzaSyBTHqvVcB27BfnbQBQDxEtjcQnqI75jS1Y";

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}+subject:${getCategories}&orderBy=${sorting}&${API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBooksData(result);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, [book, getCategories, sorting]);
  return [booksData, isLoading, error];
};

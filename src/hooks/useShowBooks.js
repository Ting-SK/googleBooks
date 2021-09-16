import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useShowBooks = (bookName) => {
  const categories = useSelector((state) => state.categories.categories);
  const sorting = useSelector((state) => state.sorting.sorting);
  const pageIndex = useSelector((state) => state.pageIndex.pageIndex);
  const [booksData, setBooksData] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyBTHqvVcB27BfnbQBQDxEtjcQnqI75jS1Y";

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}+subject:${categories}&startIndex=${pageIndex}&maxResults=40&orderBy=${sorting}&${API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        setBooksData(result);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, [bookName, categories, sorting, pageIndex]);
  return [booksData, isLoading, error];
};

import { useEffect, useState } from "react";

export const useShowBooks = (book) => {
  const [booksData, setBooksData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const API_KEY = "AIzaSyBTHqvVcB27BfnbQBQDxEtjcQnqI75jS1Y";
    setIsLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&${API_KEY}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBooksData(result);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, [book]);
  return [booksData, isLoading, error];
};

import { useEffect, useState } from "react";

export const useFindItem = (idFinded) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [findItem, setFindItem] = useState("");
  const API_KEY = "AIzaSyBTHqvVcB27BfnbQBQDxEtjcQnqI75jS1Y";

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes/${idFinded}?${API_KEY}`)
      .then((response) => response.json())
      .then((result) => {
        console.log("idResult", result);
        setFindItem(result);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, [idFinded]);

  return [findItem];
};

import { useEffect, useState } from "react";

export const useFindItem = (idFinded) => {
  const [findItem, setFindItem] = useState("");
  const API_KEY = "AIzaSyBTHqvVcB27BfnbQBQDxEtjcQnqI75jS1Y";

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${idFinded}?${API_KEY}`)
      .then((response) => response.json())
      .then((result) => {
        setFindItem(result);
      })
      .catch((error) => console.log(error));
  }, [idFinded]);

  return [findItem];
};

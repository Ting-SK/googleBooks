import React from "react";
import { useAppContext } from "../../../core/context";
import { useFindItem } from "../../../hooks/useFindItem";
import { useShowBooks } from "../../../hooks/useShowBooks";

export const BooksFound = () => {

  return (
    <div>

    </div>
  );
}
  //    let [findItem] = useFindItem()
//   return (
//     <div>
//       <img src={findItem.volumeInfo.imageLinks.thumbnail} />
//       <div>
//         <p isDecorate>{findItem.volumeInfo.categories}</p>
//         <p>{findItem.volumeInfo.title}</p>
//         <p>{findItem.volumeInfo.authors}</p>
//         <p>{findItem.volumeInfo.description}</p>
//       </div>
//     </div>
//   );
// };

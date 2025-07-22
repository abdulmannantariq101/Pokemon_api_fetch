// export  //named import/export

import seriesData from "../api/seriesData.json"; // Importing JSON data
import { SeriesCard } from "./SeriesCard";
import "./NetflixSeries.css";

const NetflixSerires = () => {
  //   const Name = "Queen of Tears";
  //   let age = 16;
  //   const canWatch = () => {
  //     if (age >= 18) {
  //       return "You can watch this series";
  //     } else {
  //       return "You cannot watch this series";
  //     }
  //   };

  //   const returnGenre = () => {
  //     const genre = "Drama";
  //     return genre;
  //   };

  return (
    <>
      <h1 className="topseries">TOP NETFLIX SERIES</h1>
    <ul className="card-container">
    

      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} /> //data= is a prop passed to SeriesCard component
      ))}
    </ul>
    </>
  );
};
export default NetflixSerires; // Exporting the component by default import/export

// export default NetflixSerires; //now using combined import/export

// export const Footer = () => {
//   return (
//     <div>
//       <h1>Footer</h1>
//       <p>Copyright © 2023</p>
//     </div>
//   );
// };

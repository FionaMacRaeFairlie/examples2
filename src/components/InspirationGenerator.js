// import * as React from "react";
// import quotes from "../data/quotes";
// import FancyText from "./FancyText";

// export default function InspirationGenerator({ children }) {
//   const [index, setIndex] = React.useState(0);
//   const quote = quotes[index];
//   const next = () => setIndex((index + 1) % quotes.length);

//   return (
//     <>

//       <div className="max-w-lg rounded overflow-hidden shadow-lg">
//         <div className="px-6 py-4">
//           <p className="text-gray-700 text-base">
//             Your inspirational quote is: <FancyText text={quote} />
//           </p>
//           <button
//             className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
//             onClick={next}
//           >
//             Inspire me again
//           </button>
//         </div>
//       </div>
//       {children}
//     </>
//   );
// }

import * as React from "react";
import inspirations from "../data/Inspirations";
import FancyText from "./FancyText";
import Color from "./Color";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = React.useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <div className="max-w-lg rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base"></p>
          <p>Your inspirational {inspiration.type} is:</p>
          {inspiration.type === "quote" ? (
            <FancyText text={inspiration.value} />
          ) : (
            <Color value={inspiration.value} />
          )}

          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={next}
          >
            Inspire me again
          </button>
        </div>
      </div>
      {children}
    </>
  );
}

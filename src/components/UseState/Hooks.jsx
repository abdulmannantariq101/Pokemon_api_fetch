import  { useState } from 'react';

export const Hooks = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
};



 
// another way
// import React, { useState } from 'react';
// export const Hooks = () => {
//   const [count, setCount] = useState(0);
//   const handleWork = () => {
//     setCount(() => count + 1);
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleWork}>Click Me</button>
//     </>
//   );
// };

// import { useState, useEffect } from "react";
// // #2 update
// export default function useLocalStorageState(key, defaultVal) {
//   const [state, setState] = useState(() => {
//     let val;
//     try {
//       val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
//     } catch (e) {
//       val = defaultVal;
//     }
//     return val;
//   });
//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   });
//   return [state, setState];
// }

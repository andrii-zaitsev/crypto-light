// import { useState, useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { Stack, Box } from "@mui/material";
// import Header from "@/components/Header";
// import Search from "@/components/Search";
// import SelectedTicker from "@/components/SelectedTicker";
// import MobileSelectedTicker from "@/components/MobileSelectedTicker.tsx";
// import Tickers from "@/components/Tickers";
// import { displayMobileSelectedTickerState } from "@/state";

// const App = () => {
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//   const [displayMobileTicker, setDisplayMobileTicker] = useRecoilState(
//     displayMobileSelectedTickerState
//   );

//   useEffect(() => {
//     if (!window.onresize) {
//       window.onresize = () => setScreenWidth(window.innerWidth);
//     }
//   }, []);

//   useEffect(() => {
//     if (screenWidth >= 900 && displayMobileTicker) {
//       setDisplayMobileTicker(false);
//     }
//   }, [screenWidth, displayMobileTicker, setDisplayMobileTicker]);

//   return (
//     <Box width="100%" height="100%">
//       {!displayMobileTicker && <Header />}
//       <main style={{ display: displayMobileTicker ? "none" : "block" }}>
//         <Stack direction="row">
//           <Box
//             sx={(theme) => ({
//               width: "100%",
//               [theme.breakpoints.up("md")]: { width: "350px" }
//             })}
//           >
//             <Search />
//             <Tickers />
//           </Box>
//           {screenWidth >= 900 && (
//             <Box component="section" width="100%">
//               <SelectedTicker />
//             </Box>
//           )}
//         </Stack>
//       </main>
//       {screenWidth < 900 && displayMobileTicker && <MobileSelectedTicker />}
//     </Box>
//   );
// };

// export default App;
import Dashboard from "@/components/Dashboard";
import { useQuery } from "@tanstack/react-query";
import { getAssets } from "./api";

const App = () => {
  const { data = [] } = useQuery({
    queryKey: ["assets"],
    queryFn: getAssets
  });

  console.log({ data });

  return <Dashboard />;
};

export default App;

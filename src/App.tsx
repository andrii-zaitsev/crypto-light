import { useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";
import Header from "@/components/Header";
import Search from "@/components/Search";
import SelectedTicker from "@/components/SelectedTicker";
import MobileSelectedTicker from "@/components/MobileSelectedTicker.tsx";
import Tickers from "@/components/Tickers";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (!window.onresize) {
      window.onresize = ({ currentTarget }) =>
        setScreenWidth(currentTarget.innerWidth);
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header />
      <main>
        <Stack direction="row">
          <Box
            sx={(theme) => ({
              width: "100%",
              [theme.breakpoints.up("md")]: { width: "350px" }
            })}
          >
            <Search />
            <Tickers />
          </Box>
          {screenWidth > 900 ? (
            <Box component="section" width="100%">
              <SelectedTicker />
            </Box>
          ) : (
            <MobileSelectedTicker />
          )}
        </Stack>
      </main>
    </div>
  );
};

export default App;

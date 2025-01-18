import { Stack, Box } from "@mui/material";
import Header from "@/components/Header";
import Search from "@/components/Search";
import SelectedTicker from "./components/SelectedTicker";
import Tickers from "@/components/Tickers";

const App = () => {
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
          <Box
            component="section"
            width="100%"
            sx={(theme) => ({
              display: "none",
              [theme.breakpoints.up("md")]: { display: "block" }
            })}
          >
            <SelectedTicker />
          </Box>
        </Stack>
      </main>
    </div>
  );
};

export default App;

import { Stack, Typography, IconButton } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import Tickers from "@/components/Tickers";

const App = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <header>
        <Stack direction="row" alignItems="center">
          <Typography
            component="h1"
            fontSize="2rem"
            fontWeight="bold"
            mr="1rem"
          >
            Search & save tickers
          </Typography>
          <IconButton onClick={() => console.log("placeholder for help")}>
            <HelpIcon color="primary" />
          </IconButton>
        </Stack>
      </header>
      <main>
        <Stack direction="row">
          <section style={{ width: "70%" }}>
            <h1>main content</h1>
          </section>
          <aside style={{ width: "30%" }}>
            <Tickers />
          </aside>
        </Stack>
      </main>
    </div>
  );
};

export default App;

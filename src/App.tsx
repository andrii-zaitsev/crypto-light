import { Stack, Typography } from "@mui/material";
import Tickers from "@/components/Tickers";

const App = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <header>
        <Typography component="h1" fontSize="2rem" fontWeight="bold">
          Search & save tickers
        </Typography>
        <Typography component="h2" fontSize="1.7rem">
          Use search to find ticker then save ticker.Simple
        </Typography>
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

import { Stack } from "@mui/material";
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
          <aside style={{ width: "30%" }}>
            <Search />
            <Tickers />
          </aside>
          <section style={{ width: "70%" }}>
            <SelectedTicker />
          </section>
        </Stack>
      </main>
    </div>
  );
};

export default App;

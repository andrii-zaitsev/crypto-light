import { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import Headline from "@/components/Headline";
import SelectedTicker from "./components/SelectedTicker";
import Tickers from "@/components/Tickers";

const App = () => {
  const [searchTicker, setSearchTicker] = useState("");
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <header>
        <Headline />
      </header>
      <main>
        <Stack direction="row">
          <aside style={{ width: "30%" }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={[]}
              value={searchTicker}
              onChange={() => {}}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      type: "search"
                    }
                  }}
                />
              )}
            />
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

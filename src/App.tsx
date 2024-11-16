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
          <section style={{ width: "70%" }}>
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
            <SelectedTicker />
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

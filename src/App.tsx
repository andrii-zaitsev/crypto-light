import { useState } from "react";
import {
  Stack,
  Typography,
  IconButton,
  Autocomplete,
  TextField
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import SelectedTicker from "./components/SelectedTicker";
import Tickers from "@/components/Tickers";

const App = () => {
  const [searchTicker, setSearchTicker] = useState("");
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

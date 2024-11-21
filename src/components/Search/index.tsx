import { useState } from "react";
import { useRecoilState } from "recoil";
import { Stack, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { modeState } from "@/state/state";
import { Mode } from "@/commonTypes/ui";

const Search = () => {
  const [value, setValue] = useState("");
  const [mode, setMode] = useRecoilState(modeState);
  return (
    <Stack direction="row" mb="1.5rem">
      <TextField
        placeholder="Search"
        value={value}
        // onFocus={() => setFocus(true)}
        onFocus={() => setMode(Mode.Search)}
        onChange={(event) => setValue(event.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }
        }}
        fullWidth
      />
      {mode === Mode.Search && (
        <Button variant="text" onClick={() => setMode(Mode.Idle)}>
          Done
        </Button>
      )}
    </Stack>
  );
};

export default Search;

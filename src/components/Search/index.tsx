import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useQueryClient } from "@tanstack/react-query";
import { Stack, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { modeState } from "@/state/state";
import { Mode } from "@/commonTypes/tickers";
import { getAssets } from "@/api/api";

const Search = () => {
  const [value, setValue] = useState("");
  const [mode, setMode] = useRecoilState(modeState);
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetchAssets = async () => {
      await queryClient.prefetchQuery({
        queryKey: ["assets"],
        queryFn: getAssets
      });
    };
    prefetchAssets();
  }, [queryClient]);

  return (
    <Stack direction="row" mb="1.5rem">
      <TextField
        placeholder="Search"
        value={value}
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
        focused={mode === Mode.Search}
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

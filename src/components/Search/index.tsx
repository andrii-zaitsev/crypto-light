import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { useQueryClient } from "@tanstack/react-query";
import { Stack, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { modeState, searchState } from "@/state/state";
import { Mode } from "@/commonTypes/tickers";
import { getAssets } from "@/api/api";

const Search = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [mode, setMode] = useRecoilState(modeState);
  const queryClient = useQueryClient();
  const searchRef = useRef();

  useEffect(() => {
    const prefetchAssets = async () => {
      await queryClient.prefetchQuery({
        queryKey: ["assets"],
        queryFn: getAssets
      });
    };
    prefetchAssets();
  }, [queryClient]);

  useEffect(() => {
    if (mode === Mode.Search) {
      searchRef.current.focus();
    }
  }, [mode]);

  const switchMode = () => {
    setMode(Mode.Idle);
    setSearch("");
  };

  return (
    <Stack direction="row" mb="1.5rem">
      <TextField
        placeholder="Search"
        value={search}
        onFocus={() => setMode(Mode.Search)}
        onChange={(event) => setSearch(event.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }
        }}
        inputRef={searchRef}
        sx={{ marginRight: mode === Mode.Idle ? "1rem" : 0 }}
        fullWidth
      />
      {mode === Mode.Search && (
        <Button variant="text" onClick={switchMode}>
          Done
        </Button>
      )}
    </Stack>
  );
};

export default Search;

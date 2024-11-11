import { Stack, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  return (
    <>
      <header>header</header>
      <main>
        <Stack direction="row">
          <section>
            <h1>main content</h1>
          </section>
          <aside>
            <h2>Saved tickers</h2>
            <List>
              {["btc", "eth", "usdt"].map(coin => (
                <ListItem
                  key={coin}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText>{coin}</ListItemText>
                </ListItem>
              ))}
            </List>
          </aside>
        </Stack>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;

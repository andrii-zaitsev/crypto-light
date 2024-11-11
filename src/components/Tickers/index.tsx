import {
  Stack,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Tickers = () => {
  return (
    <Stack>
      <Typography component="h2" fontSize="1.5rem">
        Tickers
      </Typography>
      <List>
        {["btc", "eth", "usdt"].map(coin => (
          <ListItem
            key={coin}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon color="error" />
              </IconButton>
            }
          >
            <ListItemText>{coin}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" color="error" fullWidth>
        Delete all
      </Button>
    </Stack>
  );
};

export default Tickers;

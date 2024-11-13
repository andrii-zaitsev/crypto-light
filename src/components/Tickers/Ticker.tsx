import { useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningIcon from "@mui/icons-material/Warning";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { getTicker } from "@/api";
import Loader from "@/components/Loader";
import { idsState } from "@/state/ids";

export type TickerProps = {
  id: string;
};

const Ticker = ({ id }: TickerProps) => {
  const setIds = useSetRecoilState(idsState);
  const deleteId = () =>
    setIds((prevIds) => prevIds.filter((idItem) => idItem !== id));

  const { data, status } = useQuery({
    queryKey: ["tickerId", id],
    queryFn: () => getTicker(id)
  });

  if (status === "pending") {
    return (
      <ListItem>
        <Loader />
      </ListItem>
    );
  }

  if (status === "error") {
    return (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={deleteId}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemIcon>
          <WarningIcon color="warning" />
        </ListItemIcon>
        <ListItemText>{`Unable to load ticker for: "${id}"`}</ListItemText>
      </ListItem>
    );
  }

  const percentChange = data ? Number(data["changePercent24Hr"]) : 1;
  const isGrowth = data && percentChange === Math.abs(percentChange);

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={deleteId}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemIcon>
        {isGrowth ? (
          <TrendingUpIcon color="success" />
        ) : (
          <TrendingDownIcon color="error" />
        )}
      </ListItemIcon>
      <ListItemText>
        <Typography color={isGrowth ? "success" : "error"}>
          {data.symbol}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default Ticker;

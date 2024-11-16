import { format } from "date-fns";
import { Typography } from "@mui/material";

const Headline = () => {
  return (
    <Typography
      component="h1"
      fontSize="2rem"
      fontWeight="bold"
      mr="1rem"
      sx={(theme) => ({
        display: "block",
        [theme.breakpoints.up("sm")]: {
          display: "none"
        }
      })}
    >
      {format(new Date(), "d LLLL")}
    </Typography>
  );
};

export default Headline;

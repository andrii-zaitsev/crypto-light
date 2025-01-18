import { format } from "date-fns";
import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Box component="header">
      <Typography
        component="h1"
        fontSize="2rem"
        fontWeight="bold"
        mr="1rem"
        sx={(theme) => ({
          display: "block",
          [theme.breakpoints.up("md")]: {
            display: "none"
          }
        })}
      >
        {format(new Date(), "d LLLL")}
      </Typography>
    </Box>
  );
};

export default Header;

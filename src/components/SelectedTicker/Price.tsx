import { Box, Typography } from "@mui/material";

export type PriceProps = {
  price: number;
};

const Price = ({ price }: PriceProps) => {
  return (
    <Box>
      <Typography component="span" fontSize="1.5rem">
        {Number(price).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2
        })}
      </Typography>
    </Box>
  );
};

export default Price;

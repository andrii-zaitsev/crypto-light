import { useRecoilValue } from "recoil";
import { Stack, Typography } from "@mui/material";
import { historyIntervalState } from "@/state";
import { HistoryInterval } from "@/commonTypes";

export type PriceProps = {
  price: number;
};

const Price = ({ price }: PriceProps) => {
  const { label: intervalLabel, value } = useRecoilValue(historyIntervalState);
  const isToday = value === HistoryInterval.Day;
  return (
    <Stack alignItems="flex-start">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography component="span" fontSize="1.5rem">
          {Number(price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
          })}
        </Typography>
        <Typography ml="1.3rem">-1000</Typography>
      </Stack>
      {!isToday && (
        <Typography>{`Past ${intervalLabel.toLowerCase()}`}</Typography>
      )}
    </Stack>
  );
};

export default Price;

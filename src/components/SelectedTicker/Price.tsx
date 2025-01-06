import { useRecoilValue } from "recoil";
import { Stack, Typography } from "@mui/material";
import { priceChangeState, historyIntervalState } from "@/state";
import { HistoryInterval } from "@/commonTypes";

export type PriceProps = {
  price: number;
};

const Price = ({ price }: PriceProps) => {
  const priceChange = useRecoilValue(priceChangeState);
  const { label: intervalLabel, value } = useRecoilValue(historyIntervalState);
  const isToday = value === HistoryInterval.Day;
  return (
    <Stack alignItems="flex-start" height="3.75rem">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography component="span" fontSize="1.5rem">
          {Number(price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
          })}
        </Typography>
        <Typography
          ml="1.3rem"
          fontWeight="bold"
          color={priceChange.isGrowth ? "#75d371" : "#eb5023"}
        >
          {`${priceChange.isGrowth ? "+" : "-"}${Math.abs(
            priceChange.value
          ).toFixed(2)}`}
        </Typography>
      </Stack>
      {!isToday && (
        <Typography
          component="h2"
          color="textDisabled"
        >{`Past ${intervalLabel.toLowerCase()}`}</Typography>
      )}
    </Stack>
  );
};

export default Price;

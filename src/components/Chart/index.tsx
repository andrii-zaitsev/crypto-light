import { useMemo } from "react";
import { format } from "date-fns";
import { Stack, Typography } from "@mui/material";
import { AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";
import { HistoryPoint } from "@/commonTypes";

export type ChartProps = {
  data: HistoryPoint[];
  dayTime?: boolean;
};

const Chart = ({ data, dayTime = false }: ChartProps) => {
  const getChartColor = () => {
    const first = data[0];
    const last = data[data.length - 1];
    const isRed = first.priceUsd > last.priceUsd;
    return isRed ? "#eb5023" : "#75d371";
  };
  const chartColor = getChartColor();

  const tooltipContent = useMemo(
    () =>
      data.reduce(
        (content, current) => ({
          ...content,
          [current.time]: {
            price: Number(current.priceUsd).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2
            }),
            date: format(new Date(current.date), "d MMM y"),
            dateFormatDay: format(new Date(current.date), "d MMM y hh:mm a")
          }
        }),
        {}
      ),
    [data]
  );

  return (
    <AreaChart width={window.innerWidth * 0.56} height={170} data={data}>
      <defs>
        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
          <stop offset="20%" stopColor={chartColor} stopOpacity={0.8} />
          <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="time" tick={false} tickLine={false} />
      <YAxis
        tickFormatter={(price) => {
          if (price) {
            const textPrice = Number(price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            });
            return textPrice.slice(0, textPrice.indexOf("."));
          }
          return "--";
        }}
        tick={{ fontFamily: "sans-serif" }}
        type="number"
        domain={["dataMin", "dataMax"]}
        minTickGap={10}
      />
      <Tooltip
        active={window.innerWidth > 900}
        content={({ payload }) => {
          const [currentPayload] = payload;
          if (currentPayload?.payload) {
            const { time } = currentPayload.payload;
            return (
              <Stack>
                <Typography>{tooltipContent[time].price}</Typography>
                <Typography>
                  {dayTime
                    ? tooltipContent[time].dateFormatDay
                    : tooltipContent[time].date}
                </Typography>
              </Stack>
            );
          }
        }}
      />
      <Area
        type="monotone"
        dataKey="priceUsd"
        stroke={chartColor}
        strokeWidth={3}
        fillOpacity={1}
        fill="url(#colorPrice)"
      />
    </AreaChart>
  );
};

export default Chart;

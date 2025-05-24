import { Card, Heading, Text, Flex, Box } from "@radix-ui/themes";
import { TrendingUpDown, ChartColumn, ChartLine, Info } from "lucide-react";
import MarketStatsCard from "./MarketStatsCard";
import { CryptoAsset } from "@/commonTypes";

export type MarketOverviewCardProps = {
  assets: CryptoAsset[];
};

const MarketOverviewCard = ({ assets }: MarketOverviewCardProps) => {
  const { totalPriceChange, totalCap, totalCoinsVWAPHigh } = assets.reduce(
    (acc, current) => {
      const vwapHigh =
        Number(current.priceUsd) > Number(current.vwap24Hr) ? 1 : 0;

      return {
        totalPriceChange:
          acc.totalPriceChange + Number(current.changePercent24Hr),
        totalCap: acc.totalCap + Number(current.marketCapUsd),
        totalCoinsVWAPHigh: acc.totalCoinsVWAPHigh + vwapHigh
      };
    },
    { totalPriceChange: 0, totalCap: 0, totalCoinsVWAPHigh: 0 }
  );

  const averagePriceChange = totalPriceChange / assets.length;
  const plusSign =
    Math.abs(averagePriceChange) === averagePriceChange ? "+" : "";

  return (
    <Card size="3">
      <Heading as="h3" mb="0.5rem">
        Market Overview
      </Heading>
      <Text as="p" color="gray" mb="1.5rem">
        Top 100 cryptocurrencies statistics
      </Text>
      <Flex
        width="100%"
        direction={{
          initial: "column",
          sm: "row"
        }}
      >
        <MarketStatsCard
          statName="Average Price Change"
          value={`${plusSign}${averagePriceChange.toFixed(2)}%`}
        >
          <Box
            width="2rem"
            height="2rem"
            p="5px"
            style={{ borderRadius: "100px", backgroundColor: "#dcfce7" }}
          >
            <TrendingUpDown size="1.25rem" color="#16a34a" />
          </Box>
        </MarketStatsCard>
        <MarketStatsCard
          statName="Total Market Cap"
          value={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact"
          }).format(Number(totalCap))}
        >
          <Box
            width="2rem"
            height="2rem"
            p="6px"
            style={{ borderRadius: "100px", backgroundColor: "#dbeafe" }}
          >
            <ChartColumn size="1.25rem" color="#2563eb" />
          </Box>
        </MarketStatsCard>
        <MarketStatsCard
          statName="Price higher than VWAP"
          value={`${totalCoinsVWAPHigh}/100`}
        >
          <Box
            width="2rem"
            height="2rem"
            p="6px"
            style={{ borderRadius: "100px", backgroundColor: "#f3e8ff" }}
          >
            <ChartLine size="1.25rem" color="#9333ea" />
          </Box>
        </MarketStatsCard>
      </Flex>
      <Card
        mt={{ initial: "1rem", md: "4.1rem" }}
        style={{ backgroundColor: "#eaebec" }}
      >
        <Flex align="start">
          <Box width="1.5rem" pt="0.2rem">
            <Info width="1.5rem" height="1.5rem" color="gray" />
          </Box>
          <Text ml="0.5rem" color="gray">
            <b>Disclaimer</b>: The information provided by this application is
            for general informational purposes only. It does not constitute
            financial, investment, or trading advice. Always do your own
            research and consult with a licensed financial advisor before making
            any investment decisions.
          </Text>
        </Flex>
      </Card>
    </Card>
  );
};

export default MarketOverviewCard;

import { Card, Heading, Text, Flex, Box } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { TrendingUpDown, ChartColumn, ChartLine } from "lucide-react";

export type MarketOverviewCardProps = {
  assets: any[];
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
        <Card
          className="stats-card"
          mr={{ initial: "initial", sm: "1rem" }}
          mb={{ initial: "1rem", sm: "initial" }}
        >
          <Flex align="start" justify="between" width="100%" mb="0.5rem">
            <Box width="7rem">
              <Text color="gray">Average Price Change</Text>
            </Box>
            <Box
              width="2rem"
              height="2rem"
              p="5px"
              style={{ borderRadius: "100px", backgroundColor: "#dcfce7" }}
            >
              <TrendingUpDown size="1.25rem" color="#16a34a" />
            </Box>
          </Flex>
          <Text weight="bold" size="6">
            {averagePriceChange.toFixed(2)}%
          </Text>
        </Card>
        <Card
          className="stats-card"
          mr={{ initial: "initial", sm: "1rem" }}
          mb={{ initial: "1rem", sm: "initial" }}
        >
          <Flex align="start" justify="between" width="100%" mb="0.5rem">
            <Box width="7rem">
              <Text color="gray">Total Market Cap</Text>
            </Box>
            <Box
              width="2rem"
              height="2rem"
              p="6px"
              style={{ borderRadius: "100px", backgroundColor: "#dbeafe" }}
            >
              <ChartColumn size="1.25rem" color="#2563eb" />
            </Box>
          </Flex>
          <Text weight="bold" size="6">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              notation: "compact"
            }).format(Number(totalCap))}
          </Text>
        </Card>
        <Card className="stats-card">
          <Flex align="start" justify="between" width="100%" mb="0.5rem">
            <Box width="7rem">
              <Text color="gray">Price higher than VWAP</Text>
            </Box>
            <Box
              width="2rem"
              height="2rem"
              p="6px"
              style={{ borderRadius: "100px", backgroundColor: "#f3e8ff" }}
            >
              <ChartLine size="1.25rem" color="#9333ea" />
            </Box>
          </Flex>
          <Text weight="bold" size="6">
            {totalCoinsVWAPHigh}/100
          </Text>
        </Card>
      </Flex>
      <Card
        mt={{ initial: "1rem", md: "4.1rem" }}
        style={{ backgroundColor: "#eaebec" }}
      >
        <Flex align="start">
          <InfoCircledIcon
            width={70}
            height={70}
            color="gray"
            style={{ maxHeight: "2rem" }}
          />
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

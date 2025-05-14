import { Card, Heading, Text, Flex, Box } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { TrendingUpDown, ChartColumn, ChartLine } from "lucide-react";

const MarketOverviewCard = () => {
  return (
    <Card size="3">
      <Heading as="h3" mb="0.5rem">
        Market Overview 24h
      </Heading>
      <Text as="p" color="gray" mb="1.5rem">
        Top 100 cryptocurrencies statistics
      </Text>
      <Flex width="100%">
        <Card className="stats-card" mr="1rem">
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
            -2.4%
          </Text>
        </Card>
        <Card className="stats-card" mr="1rem">
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
            $1.87T
          </Text>
        </Card>
        <Card className="stats-card">
          <Flex align="start" justify="between" width="100%" mb="0.5rem">
            <Box width="7rem">
              <Text color="gray">Average VWAP Change</Text>
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
            +30.2%
          </Text>
        </Card>
      </Flex>
      <Card mt="4.1rem" style={{ backgroundColor: "#eaebec" }}>
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

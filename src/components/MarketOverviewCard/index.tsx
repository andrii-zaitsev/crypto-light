import { Card, Heading, Text, Flex, Box } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { TrendingUpDown } from "lucide-react";

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
          <Flex align="start">
            <Text color="gray">Average Price Change</Text>
            <Box
              width="2rem"
              height="2rem"
              p="5px"
              style={{ borderRadius: "100px", backgroundColor: "#dcfce7" }}
            >
              <TrendingUpDown size="1.25rem" color="#16a34a" />
            </Box>
          </Flex>
        </Card>
        <Card className="stats-card" mr="1rem">
          Total Market cap
        </Card>
        <Card className="stats-card">Average VWAP Change</Card>
      </Flex>
      <Card mt="1.5rem" style={{ backgroundColor: "#eaebec" }}>
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

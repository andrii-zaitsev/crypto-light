import { Card, Heading, Text, Flex } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

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
        <Card style={{ width: "32%", marginRight: "1rem" }}>
          Average Price Change
        </Card>
        <Card style={{ width: "32%", marginRight: "1rem" }}>
          Total Market cap
        </Card>
        <Card style={{ width: "32%" }}>Average VWAP Change</Card>
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

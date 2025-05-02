import { BarChartIcon } from "@radix-ui/react-icons";
import { Container, Flex, Heading, Box } from "@radix-ui/themes";
import MarketTables from "@/components/MarketTables";
import MarketSentimentCard from "@/components/MarketSentimentCard";
import MarketOverviewCard from "@/components/MarketOverviewCard";

const Dashboard = () => {
  return (
    <Container size="3">
      <Flex align="center" gap="2" mt="2rem" mb="2rem">
        <BarChartIcon width={40} height={40} color="#22c55e" />
        <Heading as="h1">CryptoLight</Heading>
      </Flex>
      <Flex mb="2rem">
        <Box maxWidth="27rem">
          <MarketSentimentCard />
        </Box>
        <MarketOverviewCard />
      </Flex>
      <MarketTables />
    </Container>
  );
};

export default Dashboard;

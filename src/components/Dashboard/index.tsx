import MarketTables from "@/components/MarketTables";
import MarketSentimentCard from "@/components/MarketSentimentCard";
import MarketOverviewCard from "@/components/MarketOverviewCard";
import { BarChartIcon } from "@radix-ui/react-icons";
import { Container, Flex } from "@radix-ui/themes";

const Dashboard = () => {
  return (
    <Container>
      <Flex align="center" gap="2">
        <BarChartIcon width={40} height={40} color="#22c55e" />
        <h1>CryptoLight</h1>
      </Flex>
      <div>
        <MarketSentimentCard />
        <MarketOverviewCard />
      </div>
      <MarketTables />
    </Container>
  );
};

export default Dashboard;

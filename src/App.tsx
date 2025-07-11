import { ChartNoAxesCombined } from "lucide-react";
import { Container, Flex, Heading } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { getTopAssets } from "@/api";
import Loading from "@/components/Loading";
import NetworkStatusCard from "@/components/NetworkStatusCard";
import MarketTables from "@/components/MarketTables";
import MarketSentimentCard from "@/components/MarketSentimentCard";
import MarketOverviewCard from "@/components/MarketOverviewCard";

const App = () => {
  const { data: topAssets = [], status } = useQuery({
    queryKey: ["topAssets"],
    queryFn: getTopAssets
  });

  if (status === "pending") {
    return <Loading />;
  }

  return (
    <Container pl="1rem" pr="1rem">
      <Flex
        align="center"
        gap="2"
        mt="2rem"
        mb="1rem"
        justify={{
          initial: "center",
          sm: "start"
        }}
      >
        <ChartNoAxesCombined size="2.5rem" color="#22c55e" />
        <Heading as="h1">CryptoLight</Heading>
      </Flex>
      <NetworkStatusCard />
      <Flex
        mb="2rem"
        align="center"
        direction={{
          initial: "column",
          md: "row"
        }}
      >
        <MarketSentimentCard topAssets={topAssets} />
        <MarketOverviewCard topAssets={topAssets} />
      </Flex>
      <MarketTables topAssets={topAssets} />
    </Container>
  );
};

export default App;

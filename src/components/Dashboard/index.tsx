import { BarChartIcon } from "@radix-ui/react-icons";
import {
  Container,
  Flex,
  Heading,
  Box,
  Progress,
  Text
} from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { getAssets } from "@/api";
import MarketTables from "@/components/MarketTables";
import MarketSentimentCard from "@/components/MarketSentimentCard";
import MarketOverviewCard from "@/components/MarketOverviewCard";

const Dashboard = () => {
  const { data = [], status } = useQuery({
    queryKey: ["assets"],
    queryFn: getAssets
  });

  if (status === "pending") {
    return (
      <Container height="100vh">
        <Flex width="100%" height="100%" align="center" justify="center">
          <Flex direction="column" align="center">
            <Text size="8" mb="1rem">
              🚦⏳
            </Text>
            <Box width="20rem" maxWidth="20rem">
              <Progress color="grass" />
            </Box>
          </Flex>
        </Flex>
      </Container>
    );
  }

  return (
    <Container>
      <Flex align="center" gap="2" mt="2rem" mb="2rem">
        <BarChartIcon width={40} height={40} color="#22c55e" />
        <Heading as="h1">CryptoLight</Heading>
      </Flex>
      <Flex mb="2rem">
        <Box maxWidth="27rem" mr="1.5rem">
          <MarketSentimentCard />
        </Box>
        <MarketOverviewCard />
      </Flex>
      <MarketTables />
    </Container>
  );
};

export default Dashboard;

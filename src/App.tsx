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
import NetworkStatusCard from "@/components/NetworkStatusCard";
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
        <BarChartIcon width={40} height={40} color="#22c55e" />
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
        <Box
          mr={{
            initial: "initial",
            md: "1.5rem"
          }}
          mb={{
            initial: "1.5rem",
            md: "initial"
          }}
          maxWidth={{
            initial: "initial",
            md: "27rem"
          }}
        >
          <MarketSentimentCard assets={data} />
        </Box>
        <MarketOverviewCard assets={data} />
      </Flex>
      <MarketTables assets={data} />
    </Container>
  );
};

export default Dashboard;

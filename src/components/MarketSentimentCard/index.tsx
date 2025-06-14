import { Box, Card, Heading, Text, Flex } from "@radix-ui/themes";
import TrafficLight from "./TrafficLight";
import SentimentText from "./SentimentText";
import { CryptoAsset, Sentiment } from "@/commonTypes";

type MarketSentimentCardProps = {
  topAssets: CryptoAsset[];
};

const MarketSentimentCard = ({ topAssets }: MarketSentimentCardProps) => {
  const computeSentiment = () => {
    const [btc] = topAssets;
    const btcChange24h = Number(btc.changePercent24Hr);

    const allRestAssets = topAssets.slice(1);
    const averageMarketCap24hChange =
      allRestAssets.reduce(
        (acc, current) => acc + Number(current.changePercent24Hr),
        0
      ) / allRestAssets.length;

    if (averageMarketCap24hChange >= 1 && btcChange24h >= 1.5) {
      return Sentiment.Good;
    } else if (
      Math.abs(averageMarketCap24hChange) < 1 &&
      Math.abs(btcChange24h) < 1.5
    ) {
      return Sentiment.Neutral;
    } else {
      return Sentiment.Bad;
    }
  };

  const sentiment = computeSentiment();

  return (
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
      <Card size="3">
        <Heading as="h3" mb="0.5rem">
          Market Sentiment
        </Heading>
        <Text as="p" color="gray" mb="1.5rem">
          Current market conditions
        </Text>
        <Flex
          align="center"
          direction={{
            initial: "column",
            sm: "row"
          }}
          gap="1.5rem"
        >
          <TrafficLight sentiment={sentiment} />
          {sentiment === Sentiment.Good && (
            <SentimentText
              header="Good"
              text="The financial mood is upbeat! The market's on a steady rise, which
              could open up some solid opportunities for business and investing."
              color="#4ade80"
            />
          )}
          {sentiment === Sentiment.Neutral && (
            <SentimentText
              header="Neutral"
              text="Markets are stuck in 'wait-and-see' mode. No major swings yet, but
              don't zone out—trends could flip fast!"
              color="#e3b600"
            />
          )}
          {sentiment === Sentiment.Bad && (
            <SentimentText
              header="Bad"
              text="Heads up: The market is dropping. This might be a sign to be extra
          careful with your money moves. If you were thinking about big
          spending or investments, holding off could be a smart call."
              color="#f87171"
            />
          )}
        </Flex>
      </Card>
    </Box>
  );
};

export default MarketSentimentCard;

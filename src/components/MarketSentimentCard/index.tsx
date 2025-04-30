import { useState } from "react";
import { Card, Heading, Text, Flex, Box } from "@radix-ui/themes";

enum Sentiment {
  Bad = "Bad",
  Neutral = "Neutral",
  Good = "Good"
}

const MarketSentimentCard = () => {
  const [sentiment, setSentiment] = useState<Sentiment>(Sentiment.Good);

  const handleSetimentChange = () =>
    setSentiment((prevSentiment) => {
      if (prevSentiment === Sentiment.Good) {
        return Sentiment.Bad;
      } else if (prevSentiment === Sentiment.Bad) {
        return Sentiment.Neutral;
      } else {
        return Sentiment.Good;
      }
    });

  return (
    <Card size="3">
      <button onClick={handleSetimentChange}>change</button>
      <Heading as="h3">Market Sentiment</Heading>
      <Text as="p" color="gray" mb="1.5rem">
        Current market conditions
      </Text>
      <Flex align="center" gap="1.5rem">
        <div>light</div>
        {sentiment === Sentiment.Good && (
          <Box>
            <Heading as="h5" style={{ color: "#4ade80" }} mb="0.5rem">
              Good
            </Heading>
            <Text as="p" style={{ color: "#4ade80" }} weight="medium">
              The financial mood is upbeat! The market's on a steady rise, which
              could open up some solid opportunities for business and investing.
            </Text>
          </Box>
        )}
        {sentiment === Sentiment.Bad && (
          <Box>
            <Heading as="h5" style={{ color: "#f87171" }} mb="0.5rem">
              Bad
            </Heading>
            <Text as="p" style={{ color: "#f87171" }} weight="medium">
              Heads up: The market is dropping. This might be a sign to be extra
              careful with your money moves. If you were thinking about big
              spending or investments, holding off could be a smart call.
            </Text>
          </Box>
        )}
        {sentiment === Sentiment.Neutral && (
          <Box>
            <Heading
              as="h5"
              style={{ color: /*"#facc15"*/ "#e3b600" }}
              mb="0.5rem"
            >
              Neutral
            </Heading>
            <Text
              as="p"
              style={{ color: /*"#facc15"*/ "#e3b600" }}
              weight="medium"
            >
              Markets are stuck in 'wait-and-see' mode. No major swings yet, but
              don't zone out—trends could flip fast!
            </Text>
          </Box>
        )}
      </Flex>
    </Card>
  );
};

export default MarketSentimentCard;

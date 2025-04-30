import { useState } from "react";
import { Card, Heading, Text, Flex } from "@radix-ui/themes";
import TrafficLight from "./TrafficLight";
import SentimentText from "./SentimentText";
import { Sentiment } from "@/commonTypes";

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
  );
};

export default MarketSentimentCard;

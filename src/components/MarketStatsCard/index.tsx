import { ReactNode } from "react";
import { Card, Flex, Box, Text } from "@radix-ui/themes";

export type MarketStatsCardProps = {
  statName: string;
  value: string;
  children: ReactNode;
};

const MarketStatsCard = ({
  statName,
  value,
  children
}: MarketStatsCardProps) => {
  return (
    <Card
      className="stats-card"
      mr={{ initial: "initial", sm: "1rem" }}
      mb={{ initial: "1rem", sm: "initial" }}
    >
      <Flex align="start" justify="between" width="100%" mb="0.5rem">
        <Box width="7rem">
          <Text color="gray">{statName}</Text>
        </Box>
        {children}
      </Flex>
      <Text weight="bold" size="6">
        {value}
      </Text>
    </Card>
  );
};

export default MarketStatsCard;

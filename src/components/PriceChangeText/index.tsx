import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import { Card, Heading, Text, Table, Link, Flex } from "@radix-ui/themes";

export type PriceChangeTextProps = {
  value: string;
  isGrowth: boolean;
};

const DayPriceChangeText = ({ value, isGrowth }: PriceChangeTextProps) => {
  const color = isGrowth ? "#4ade80" : "#f87171";
  const Icon = isGrowth ? ArrowUpIcon : ArrowDownIcon;
  return (
    <Flex align="center">
      <Icon color={color} />
      <Text style={{ color }}>{value}%</Text>
    </Flex>
  );
};

export default DayPriceChangeText;

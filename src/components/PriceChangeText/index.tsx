import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import { Card, Heading, Text, Table, Link, Flex } from "@radix-ui/themes";

export type PriceChangeTextProps = {
  value: string;
};

const DayPriceChangeText = ({ value }: PriceChangeTextProps) => {
  const percent = Number(value);
  const isGrowth = Math.abs(percent) === percent;
  const color = isGrowth ? "#4ade80" : "#f87171";
  const Icon = isGrowth ? ArrowUpIcon : ArrowDownIcon;
  return (
    <Flex align="center">
      <Icon color={color} />
      <Text style={{ color }}>{Math.abs(Number(value)).toFixed(2)}%</Text>
    </Flex>
  );
};

export default DayPriceChangeText;

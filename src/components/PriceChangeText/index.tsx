import { MoveUp, MoveDown } from "lucide-react";
import { Text, Flex } from "@radix-ui/themes";

export type PriceChangeTextProps = {
  value: string;
};

const DayPriceChangeText = ({ value }: PriceChangeTextProps) => {
  const percent = Number(value);
  const isGrowth = Math.abs(percent) === percent;
  const color = isGrowth ? "#4ade80" : "#f87171";
  const Icon = isGrowth ? MoveUp : MoveDown;
  return (
    <Flex align="center">
      <Icon color={color} size="0.8rem" />
      <Text style={{ color }}>{Math.abs(Number(value)).toFixed(2)}%</Text>
    </Flex>
  );
};

export default DayPriceChangeText;

import { Box, Heading, Text } from "@radix-ui/themes";

export type SentimentTextProps = {
  header: string;
  text: string;
  color: string;
};

const SentimentText = ({ header, text, color }: SentimentTextProps) => {
  return (
    <Box>
      <Heading
        as="h5"
        style={{ color }}
        mb="0.5rem"
        align={{
          initial: "center",
          sm: "left"
        }}
      >
        {header}
      </Heading>
      <Text
        as="p"
        style={{ color }}
        weight="medium"
        align={{
          initial: "center",
          sm: "left"
        }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default SentimentText;

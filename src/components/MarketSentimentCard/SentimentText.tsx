import { Box, Heading, Text } from "@radix-ui/themes";

export type SentimentTextProps = {
  header: string;
  text: string;
  color: string;
};

const SentimentText = ({ header, text, color }: SentimentTextProps) => {
  return (
    <Box>
      <Heading as="h5" style={{ color }} mb="0.5rem">
        {header}
      </Heading>
      <Text as="p" style={{ color }} weight="medium">
        {text}
      </Text>
    </Box>
  );
};

export default SentimentText;

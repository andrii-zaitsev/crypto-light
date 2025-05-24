import { Container, Flex, Text, Box, Progress } from "@radix-ui/themes";

const Loading = () => {
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
};

export default Loading;

import {
  Box,
  Center,
  Flex,
  Text,
  Container,
  Spacer,
  Heading,
  Button,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box maxW="100vw" minH="90vh">
      <Center minH="90vh">
        <Flex>
          <Container color="white">
            <img
              src="https://i.pinimg.com/originals/60/d4/d3/60d4d31e4f2b18abaee11da6281ff6ea.png"
              alt=""
              style={{ width: "400px" }}
            />
          </Container>
          <Spacer />

          <Flex
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
            maxW={"400px"}
            gap="2"
            centerContent
          >
            <Heading centerContent>Converso 💬</Heading>
            <Text textAlign={"center"}>
              Converso is a user-friendly chat application that allows you to
              connect with friends and family effortlessly. With its intuitive
              design and convenient features, staying in touch has never been
              easier.
            </Text>
            <Button colorScheme="teal" size="lg" mt="2rem">
              Getting started
            </Button>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export { Home };

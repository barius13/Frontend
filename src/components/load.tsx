import * as React from "react";
import "focus-visible/dist/focus-visible";
import { Flex, Spinner, Text, Box, Heading, Center } from "@chakra-ui/react";

export default function load() {
  return (
    <>
      <Center>
        <Flex h="90vh" alignItems="center" justifyContent="center">
          <Flex>
            <Box
              __css={{ cursor: "default" }}
              width={["300px", "300px", "300px", "300px", "300px", "300px"]}
              transition="1s"
              px="20px"
              bg=""
              py="30px"
              rounded="10px"
            >
              <Center>
                <Flex>
                  <Heading
                    fontSize={["30px", "20px", "30px", "30px"]}
                    alignContent="center"
                  >
                    <Spinner />
                  </Heading>
                </Flex>
              </Center>
              <Center>
                <Text mt="20px" mb="10px">
                  {" "}
                  Loading...
                </Text>
              </Center>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

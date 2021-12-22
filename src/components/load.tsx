import * as React from 'react';
import 'focus-visible/dist/focus-visible';
import {Flex, Spinner, Text, Box, Center, Link} from '@chakra-ui/react';

/**
 * Its a loading page!
 * @return {React.FunctionComponent}
 */
export default function load() {
  return (
    <>
      <Center>
        <Flex h="90vh" alignItems="center" justifyContent="center">
          <Flex>
            <Box
              __css={{cursor: 'default'}}
              transition="1s"
              px="20px"
              bg=""
              py="30px"
              rounded="10px"
            >
              <Center>
                <Flex>
                  <Spinner />
                </Flex>
              </Center>
              <Center>
                <Text mt="20px">
                  {
                    'Hey! Have you tried bios? It might be a good idea to check it out.'
                  }
                </Text>
              </Center>
              <Center>
                <Link color="#81A1C1" href="https://kythi.bio/">
                  Kythi bios
                </Link>
              </Center>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

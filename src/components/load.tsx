import * as React from 'react';
import 'focus-visible/dist/focus-visible';
import {Flex, Spinner, Text, Box, Center} from '@chakra-ui/react';

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
                <Text mt="20px" mb="10px">
                  {
                    'If you are experiencing any network related issues please check our discord server.'
                  }
                </Text>
              </Center>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

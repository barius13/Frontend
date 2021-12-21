import 'focus-visible/dist/focus-visible';
import {Box, Heading, Text} from '@chakra-ui/react';
import {Button, Flex, Center} from '@chakra-ui/react';

export default function error() {
  return (
    <>
      <Center>
        <Flex h="90vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            width={['360px', '400px', 'auto', 'auto']}
          >
            <Box boxShadow="2xl" __css={{bg: '#3B4252', cursor: 'default'}}
              width={['320px', '320px', '320px', '320px', '320px', '450px']}
              transition="1s"
              px="20px"
              py="30px"
              rounded="10px" >
              <Center>
                <Flex>
                  <Heading
                    fontSize={['30px', '20px', '30px', '30px']}
                    alignContent="center"
                  >
                    404
                  </Heading>
                </Flex>
              </Center>
              <Center>
                <Flex>
                  <Text
                    fontSize={['18px', '18px', '18px', '18px']}
                    alignContent="center"
                  >
                    This page isn't available.
                  </Text>
                </Flex>
              </Center>
              <Center>
                <Flex>
                  <Button
                    onClick={() => {
                      location.href = '/';
                    }}
                    mt="5px"
                    w="100%"
                    h="33px"
                    colorScheme="blue"
                    variant="outline"
                  >
              Home.
                  </Button>
                </Flex>
              </Center>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

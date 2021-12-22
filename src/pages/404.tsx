import 'focus-visible/dist/focus-visible';
import {Box, Heading, Text} from '@chakra-ui/react';
import {Button, Flex, Center, Divider} from '@chakra-ui/react';
import {BiErrorAlt} from 'react-icons/bi';
import Footer from '../components/footer';

export default function error() {
  return (
    <>
      <Center>
        <Flex h="90vh" alignItems="center" justifyContent="center">
          <Flex direction="column" width={['360px', '400px', 'auto', 'auto']}>
            <Box px="20px" py="30px">
              <Center>
                <Heading
                  fontSize={['50px', '50px', '60px', '80px']}
                  alignContent="center"
                >
                  404!
                </Heading>
              </Center>
              <Center>
                <Divider mb="10px" bg="#5E81AC" w="100%" />
              </Center>
              <Center>
                <Text
                  fontSize={['15px', '18px', '18px', '18px']}
                  alignContent="center"
                >
                  This page isn't available at this moment in time.
                </Text>
              </Center>
              <Center>
                <Text
                  fontSize={['15px', '18px', '18px', '18px']}
                  alignContent="center"
                >
                  Check back later.
                </Text>
              </Center>

              <Center>
                <Flex>
                  <Button
                    leftIcon={<BiErrorAlt />}
                    onClick={() => {
                      location.href = '/';
                    }}
                    mt="15px"
                    size="md"
                    bg="#5E81AC"
                    _hover={{background: '#81A1C1'}}
                  >
                    Return home.
                  </Button>
                </Flex>
              </Center>
            </Box>
          </Flex>
        </Flex>
      </Center>
      <Flex mt="93px">
        <Footer />
      </Flex>
    </>
  );
}

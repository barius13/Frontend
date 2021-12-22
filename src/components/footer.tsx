import * as React from 'react';
import 'focus-visible/dist/focus-visible';
import {Flex, Stack, Heading, Divider, Link} from '@chakra-ui/react';

/**
 * Its a footer!
 * @return {React.FunctionComponent}
 */
export default function Footer() {
  return (
    <>
      <Flex h="300px" w="100%" bg="#3B4252">
        <Flex w={['50px', '300px']} h="200px" />
        <Flex mt="30px">
          <Stack spacing={['50px', '150px']} direction={'row'}>
            <Stack direction="column">
              <Heading fontSize="30px" fontWeight="500">
                Legal
              </Heading>
              <Divider w="70%" borderColor="#81A1C1" />
              <Link color="#D8DEE9" href="/policy">
                Privacy Policy
              </Link>
              <Link color="#D8DEE9" href="/terms">
                Terms Of Service
              </Link>
            </Stack>
            <Stack direction="column">
              <Heading fontSize="30px" fontWeight="500">
                Links
              </Heading>
              <Divider w="70%" borderColor="#81A1C1" />
              <Link color="#D8DEE9" href="https://kythi.bio/">
                Kythi (Portfolios)
              </Link>
              <Link color="#D8DEE9" href="/discord">
                Discord Server
              </Link>
              <Link color="#D8DEE9" href="https://github.com/kythix">
                Public Github
              </Link>
              <Link
                color="#D8DEE9"
                onClick={() => {
                  location.href = 'mailto:support@kythi.com';
                }}
              >
                Mail Us
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

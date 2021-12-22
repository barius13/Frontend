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
      <Flex h="200px" w="100%" bg="#3B4252">
        <Flex w={['50px', '300px']} h="200px" />
        <Flex mt="30px">
          <Stack direction="column">
            <Heading fontSize="30px" fontWeight="400">
              Legal
            </Heading>
            <Divider w="70%" borderColor="#81A1C1" />
            <Link href="/policy">Privacy Policy</Link>
            <Link href="/terms">Terms Of Service</Link>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

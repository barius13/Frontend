import * as React from 'react';
import {IconType} from 'react-icons';
import 'focus-visible/dist/focus-visible';
import {Box, Heading, HStack} from '@chakra-ui/react';

interface FeatureProps {
  name: string;
  value: string;
  icon: IconType;
}

/**
 * Its a feature box!
 * @param {React.PropsWithChildren<FeatureProps>} props Props
 * @return {React.FunctionComponent}
*/
const FeatureBox: React.FC<FeatureProps> = (props) => {
  return (
    <>
      <Box
        __css={{cursor: 'default'}}
        width={['350px', '320px', '720px', '300px', '350px', '450px']}
        transition="1s"
        _hover={{
          transform: 'translateY(-10px)',
          transition: '.5s',
          bg: '#4C566A',
        }}
        bg={'#3B4252'}
        px="20px"
        py="30px"
        shadow="md"
        rounded="6px"
      >
        <HStack>
          <props.icon size="25" />
          <Heading size="md" fontWeight="medium" color={'gray.400'}>
            {props.name}
          </Heading>
        </HStack>

        <Heading as="h4" size="sm" mt="2" fontWeight="medium">
          {props.value}
        </Heading>
      </Box>
    </>
  );
};

export default FeatureBox;

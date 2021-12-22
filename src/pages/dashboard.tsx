import API from '../api';
import * as React from 'react';
import {useEffect} from 'react';
import Nav from '../components/navbar';
import 'focus-visible/dist/focus-visible';
import StatsBox from '../components/stats';
import {useUser} from '../components/user';
import {VscGraphLine} from 'react-icons/vsc';
import {
  Flex,
  Stack,
  Heading,
  Center,
  Button,
  Tooltip,
  Code,
  Box,
  Avatar,
  Text,
  Divider,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Image,
} from '@chakra-ui/react';
import {useRouter} from 'next/dist/client/router';
import {BsFillFileEarmarkBarGraphFill} from 'react-icons/bs';
import {MdOutlineStorage, MdOutlineAnnouncement} from 'react-icons/md';
import {useDisclosure} from '@chakra-ui/react';

export default function Dashboard() {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [stats, setStats] = React.useState({
    UserPing: undefined,
    UserStorage: undefined,
    AdminMessages: undefined,
  });
  const router = useRouter();
  const {user} = useUser();

  useEffect(() => {
    if (!user) {
      return void router.push('/');
    }

    API.getPing().then((ping) => {
      setStats({...stats, UserPing: ping});
    });
  }, []);
  const {
    isOpen: WipeOpened,
    onClose: WipeClose,
    onOpen: WipeOpen,
  } = useDisclosure();

  return user ? (
    <>
      <Nav page={'dash'} />
      <Divider bg="#5E81AC" />
      <Center>
        {' '}
        <Center
          borderRadius="6px"
          w={['93.5%', '88.4%']}
          bg="#3B4252"
          mt="3%"
          mb={['10px', '']}
        >
          <Heading>{`Welcome ${user.username}!`}</Heading>
        </Center>
      </Center>

      <Flex
        ml={['3%', '5.9%']}
        mt="1.5%"
        w={['365px', '750px']}
        direction={['column', 'row', 'row']}
      >
        <Stack direction={['column', 'column', 'column', 'row', 'row']}>
          <Stack mb="10px" mr="15px" spacing="4">
            <Flex>
              <StatsBox
                name={'Storage Used'}
                value={user.upload.count}
                icon={MdOutlineStorage}
              />
            </Flex>

            <Flex>
              <StatsBox
                name={'Files Uploaded'}
                value={user.upload.count}
                icon={BsFillFileEarmarkBarGraphFill}
              />
            </Flex>
          </Stack>

          <Stack spacing="4">
            <Flex>
              <StatsBox
                name={'Leaderboard Position'}
                value={stats?.UserPing}
                icon={MdOutlineAnnouncement}
              />
            </Flex>
            <Flex>
              <StatsBox
                name={'Your latency'}
                value={`${stats?.UserPing}ms`}
                icon={VscGraphLine}
              />
            </Flex>
          </Stack>
        </Stack>
        <Box
          mt={['15px', '1px']}
          ml={['', '20px']}
          borderRadius="6px"
          w={['350px', '400px']}
          h="240px"
          bg="#3B4252"
        >
          <Box w={['350px', '400px']}>
            <Image
              w="500px"
              h="100px"
              borderBottom="1.5px solid #5E81AC"
              mb="-30px"
              borderRadius={'6px'}
              src={user.discord.banner}
            />

            <Center>
              <Tooltip
                placement="auto"
                textColor={'white'}
                hasArrow
                bg="#434C5E"
                label={user.username}
              >
                <Avatar src={user.discord.avatar} border="2px solid #B48EAD" />
              </Tooltip>
            </Center>
            <Center mt="10px">
              <Code maxW="350px">
                Welcome to Kythi this is the dashboard and this is a test
                announcement if you see this you are in the beta of kythi!
              </Code>
            </Center>
            <Center mt="10px">
              <Divider w="90%" bg="#5E81AC" />
            </Center>
          </Box>
        </Box>
      </Flex>
      <Stack ml={['3%', '5.9%']} direction={['column', 'row']} spacing={'25px'}>
        <Box
          mb={['30px', '']}
          px="30px"
          py="10px"
          h="365px"
          w={['350px', '350px']}
          borderRadius="6px"
          bg="#3B4252"
        >
          <Box mt="5px" borderRadius="6px">
            <Center>
              {' '}
              <Heading size="lg" fontWeight="sm" color={'#E5E9F0'}>
                Latest Upload
              </Heading>
            </Center>

            <Center>
              <Divider bg="#5E81AC" mt="8px" w="80%" />
            </Center>

            <Center>
              <Heading
                color={'#E5E9F0'}
                fontWeight="medium"
                size="md"
                mt="10px"
              >
                Minecraft-2019.png
              </Heading>
            </Center>

            <Center mt="20px">
              <Image
                h="180px"
                w="500px"
                borderRadius="6px"
                border="2px solid white"
                src="https://nyc3.digitaloceanspaces.com/kythi.pics/dfa6659b-46f9-5521-9452-6e08f897e59e/a4e7xIi5jo.png"
              />
            </Center>
            <Center>
              <Divider bg="#5E81AC" mt="25px" w="80%" />
            </Center>
            <Center>
              <Heading
                color={'#E5E9F0'}
                fontWeight="medium"
                size="md"
                mt="10px"
              >
                Upload Date: 01/01/2019
              </Heading>
            </Center>
          </Box>
        </Box>
        <Box borderRadius="6px" bg="#3B4252" w="350px" h="365px">
          <Center>
            {' '}
            <Heading mt="15px" size="lg" fontWeight="sm" color={'#E5E9F0'}>
              Downloadable Config(s)
            </Heading>
          </Center>
          <Center>
            <Divider bg="#5E81AC" mt="8px" w="80%" />
          </Center>
          <Center>
            <Stack w="320px" mt="30px" direction="column" spacing={4}>
              <Button _hover={{background: '#81A1C1'}} bg="#5E81AC">
                ShareX (Windows)
              </Button>
              <Button _hover={{background: 'orange.300'}} bg="#EBCB8B">
                ShareNix (Linux)
              </Button>
              <Button
                _hover={{background: 'purple.400'}}
                background="purple.300"
              >
                Magic-Cap (Linux & Mac)
              </Button>
              <Center>
                <Divider bg="#5E81AC" mt="8px" w="100%" />
              </Center>
              <Flex w="100%" h="8px" />
              <Button
                bg="#BF616A"
                _hover={{background: '#D08770'}}
                onClick={WipeOpen}
              >
                Wipe-Files
              </Button>
            </Stack>
          </Center>
        </Box>
      </Stack>

      <Modal isOpen={WipeOpened} onClose={WipeClose}>
        <ModalOverlay />
        <ModalContent
          mt="120px"
          boxShadow="0px"
          width={['350px', '350px', 'auto', '500px']}
          bg="#2E3440"
        >
          <ModalCloseButton mr="20px" />
          <ModalHeader ml="20px">Wipe files.</ModalHeader>
          <Center>
            <Divider bg="#5E81AC" w="80%" />
          </Center>
          <Center mt="5px">
            <Text fontWeight="600" fontSize="13px">
              Doing this will result in all of your file(s) being permanently
              deleted
            </Text>
          </Center>

          <ModalFooter>
            <Button
              mr="20px"
              size="sm"
              _hover={{background: '#BF616A'}}
              bg="#5E81AC"
            >
              {' '}
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  ) : null;
}

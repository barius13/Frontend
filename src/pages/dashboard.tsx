import API from '../api';
import * as React from 'react';
import {useEffect} from 'react';
import Nav from '../components/navbar';
import 'focus-visible/dist/focus-visible';
import StatsBox from '../components/stats';
import {useUser} from '../components/user';
import {VscGraphLine} from 'react-icons/vsc';
import {FaLinux} from 'react-icons/fa';
import {
  Flex,
  Stack,
  Heading,
  Center,
  Button,
  Tooltip,
  Code,
  Box,
  IconButton,
  Avatar,
  Divider,
  Image,
  VStack,
} from '@chakra-ui/react';
import {useRouter} from 'next/dist/client/router';
import {BsFillFileEarmarkBarGraphFill} from 'react-icons/bs';
import {MdOutlineStorage, MdOutlineAnnouncement} from 'react-icons/md';

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

  return user ? (
    <>
      <Nav page={'dash'} />
      <Divider bg="#5E81AC" />
      <Flex
        ml={['3%', '5.9%']}
        mt="3%"
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
      <Stack spacing={'25px'} mt={['15px', '']} direction={'row'}>
        {' '}
        <Heading
          bg="#3B4252"
          borderRadius={'6px'}
          w="350px"
          px="8px"
          py="3px"
          mb="20px"
          ml={['3%', '5.9%']}
          size="lg"
          fontWeight="md"
          color={'#E5E9F0'}
        >
          Most Recent Upload
        </Heading>
        <Heading
          bg="#3B4252"
          borderRadius={'6px'}
          w="350px"
          h="43px"
          px="8px"
          py="3px"
          ml={['3%', '5.9%']}
          size="lg"
          fontWeight="md"
          color={'#E5E9F0'}
        >
          Downloadable file(s)
        </Heading>
      </Stack>
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
              <Heading
                color={'#E5E9F0'}
                fontWeight="medium"
                size="md"
                mt="10px"
              >
                Minecraft-2019.png
              </Heading>
            </Center>
            <Center>
              <Divider bg="#5E81AC" mt="8px" w="80%" />
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
          </Box>
        </Box>
        <Box borderRadius="6px" bg="#3B4252" w="350px" h="365px">
          <Center>
            <Stack w="320px" mt="100px" direction="column" spacing={4}>
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
            </Stack>
          </Center>
        </Box>
      </Stack>
    </>
  ) : null;
}

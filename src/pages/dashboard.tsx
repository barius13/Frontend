import API from '../api';
import * as React from 'react';
import {useEffect} from 'react';
import Nav from '../components/navbar';
import 'focus-visible/dist/focus-visible';
import StatsBox from '../components/stats';
import {useUser} from '../components/user';
import {VscGraphLine} from 'react-icons/vsc';
import {Flex, Stack, Heading} from '@chakra-ui/react';
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
      <Heading
        mt="15px"
        mb={['', '-30px']}
        ml="5.9%"
        size="lg"
        fontWeight="medium"
        color={'#E5E9F0'}
      >
        Your Statistics
      </Heading>
      <Flex ml="5.9%" mt="3%" direction={['column', 'row']}>
        <Stack mb="10px" mr="15px" spacing="4">
          <Flex>
            <StatsBox
              name={'Storage Used'}
              value={stats?.UserStorage}
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
              name={'Announcements'}
              value={stats?.AdminMessages}
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
      </Flex>
    </>
  ) : null;
}

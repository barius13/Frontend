import API from '../api';
import * as React from 'react';
import 'focus-visible/dist/focus-visible';
import {
  Flex,
  Center,
  Divider,
  Button,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  Tooltip,
  MenuList,
  MenuItem,
  useToast,
} from '@chakra-ui/react';
import {useUser} from '../components/user';

interface NavBarProps {
  page: 'dash' | 'config' | 'gallery';
}

interface ButtonProps {
  name: string;
  onClick: () => void;
  isHighlighted: boolean;
}

/**
 * Its a NavBar Button!
 * @param {React.PropsWithChildren<ButtonProps>} props Props
 * @return {React.FunctionComponent}
 */
const NavBarButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      ml="10px"
      size="sm"
      bg={props.isHighlighted ? '#5E81AC' : '#4C566A'}
      _hover={
        props.isHighlighted ? {background: '#81A1C1'} : {background: '#3B4252'}
      }
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
};

/**
 * Its a NavBar!
 * @param {React.PropsWithChildren<NavBarProps>} props Props
 * @return {React.FunctionComponent}
 */
const NavBar: React.FC<NavBarProps> = (props) => {
  const toast = useToast();
  const {user} = useUser();

  /**
   * LogOut Function
   * @return {void}
   */
  function logOut() {
    API.logOut()
        .then((data) => {
          toast({
            title: 'Success!',
            description: data.message,
            status: 'success',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
            variant: 'left-accent',
          });

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          if (err.message === 'Network Error') {
            return toast({
              title: 'You seemed to have encountered an error!',
              description:
              'The API is unfortunately down please check back later.',
              status: 'error',
              position: 'top-right',
              duration: 9000,
              isClosable: true,
              variant: 'left-accent',
            });
          }

          return toast({
            title: 'You seemed to have encountered an error!',
            description: err.data.message,
            status: 'error',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
            variant: 'left-accent',
          });
        });
  }

  return (
    <>
      <Flex h="70px" w="100%" boxShadow="xl" bg="#2E3440">
        <Center>
          <Heading
            as="button"
            cursor="default"
            onClick={() => {
              location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            }}
            ml="20px"
            fontSize="30px"
            textColor="#eceff4"
            fontWeight={500}
          >
            Kythi
          </Heading>
          <Divider
            borderColor="#81A1C1"
            h="40px"
            ml="20px"
            orientation="vertical"
          />
          <NavBarButton
            name="Dashboard"
            isHighlighted={props.page === 'dash'}
            onClick={() => {
              window.location.href = '/dashboard';
            }}
          />
          <NavBarButton
            name="Configuration"
            isHighlighted={props.page === 'config'}
            onClick={() => {
              window.location.href = '/config';
            }}
          />
          <NavBarButton
            name="Gallery"
            isHighlighted={props.page === 'gallery'}
            onClick={() => {
              window.location.href = '/gallery';
            }}
          />

          <Menu>
            <Tooltip
              bg="#434C5E"
              placement="left"
              hasArrow
              textColor="white"
              label={user.username}
            >
              <MenuButton
                position="absolute"
                right="10"
                cursor="pointer"
                as={Avatar}
                name={user.discord.username}
                src={user.discord.avatar}
              />
            </Tooltip>

            <MenuList borderRadius="6px" bg="#3B4252">
              <MenuItem>Settings</MenuItem>
              <MenuItem onClick={logOut}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Center>
      </Flex>
    </>
  );
};

export default NavBar;

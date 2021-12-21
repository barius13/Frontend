import * as React from "react";
import "focus-visible/dist/focus-visible";
import {
  Flex,
  Center,
  Divider,
  Button,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useUser } from "../components/user";

interface NavBarProps {
  page: "dash" | "config" | "gallery";
}

interface ButtonProps {
  name: string;
  onClick: () => void;
  isHighlighted: boolean;
}

const NavBarButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      ml="10px"
      size="sm"
      bg={props.isHighlighted ? "#5E81AC" : "#4C566A"}
      _hover={
        props.isHighlighted
          ? { background: "#81A1C1" }
          : { background: "#3B4252" }
      }
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
};

const NavBar: React.FC<NavBarProps> = (props) => {
  const { user } = useUser();
  return (
    <>
      <Flex h="60px" w="100%" boxShadow="xl" bg="#2E3440">
        <Center>
          <Heading
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
            isHighlighted={props.page === "dash"}
            onClick={() => {
              window.location.href = "/dashboard";
            }}
          />
          <NavBarButton
            name="Configuration"
            isHighlighted={props.page === "config"}
            onClick={() => {
              window.location.href = "/config";
            }}
          />
          <NavBarButton
            name="Gallery"
            isHighlighted={props.page === "gallery"}
            onClick={() => {
              window.location.href = "/gallery";
            }}
          />
          <Flex mr="5" position="absolute" right="0">
            <Menu>
              <MenuButton
                as={Avatar}
                name={user.discord.username}
                src={user.discord.avatar}
              />
              <MenuList>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Center>
      </Flex>
    </>
  );
};

export default NavBar;

import 'focus-visible/dist/focus-visible';
import {
  Divider,
  Heading,
  Center,
  Flex,
  Code,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

export default function Policy() {
  return (
    <>
      <Flex h="150px " w="100%" />
      <Center>
        <Code mt="50px" w="80%" px="30px" py="30px" borderRadius="10px">
          <Center>
            <Heading mb="10px">Privacy Policy</Heading>
          </Center>
          <Center>
            <Divider mb="15px" borderColor="#81A1C1" w="90%" />
          </Center>

          <Heading mt="15px" fontSize="20px">
            We collect the following data upon sign up for our service:
          </Heading>
          <UnorderedList mt="15px">
            <ListItem>Your Username</ListItem>
            <ListItem>Hashed password (Hashed using argon2i)</ListItem>
            <ListItem>Your Email Address</ListItem>
            <ListItem>The person that invited you</ListItem>
            <ListItem>Unique verification code</ListItem>
          </UnorderedList>

          <Heading mt="10px" fontSize="20px">
            If you decide to link your Discord we will collect the following:
          </Heading>
          <UnorderedList mt="15px">
            <ListItem>Your Discord ID</ListItem>
            <ListItem>Your Discord Username</ListItem>
            <ListItem>Your Discord Discriminator</ListItem>
            <ListItem>Your Discord Avatar</ListItem>
            <ListItem>Your Discord Nitro status (Classic/Premium) </ListItem>
          </UnorderedList>
          <Heading mt="15px" fontSize="20px">
            Upon Email verification we collect:
          </Heading>
          <UnorderedList mt="5px">
            <ListItem>Date of verification</ListItem>
          </UnorderedList>
          <Center>
            <Divider mt="30px" borderColor="#81A1C1" w="90%" />
          </Center>
          <Center>
            <Heading mt="20px" fontSize="24px">
              We (Kythi) do not knowingly collect any data of users under the
              age of 13 years old.
            </Heading>
          </Center>
        </Code>
      </Center>
    </>
  );
}

import { NextSeo } from "next-seo";
import "focus-visible/dist/focus-visible";
import styles from "../styles/terms.module.css";
import {
  Divider,
  Center,
  Code,
  ListItem,
  UnorderedList,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";

export default function Policy() {
  return (
    <>
      <Flex h="150px " w="100%" />
      <Center>
        <Code mt="50px" w="80%" px="30px" py="30px" borderRadius="10px">
          <Center>
            <Heading mb="10px">Terms of Service</Heading>
          </Center>
          <Center>
            <Divider mb="15px" borderColor="#81A1C1" w="90%" />
          </Center>

          <Heading mt="15px" fontSize="20px">
            When using our service you agree to the following conditions:
          </Heading>
          <UnorderedList mt="15px">
            <ListItem>
              We (Kythi) reserve the right to edit the terms of services and
              privacy policy at any given time.
            </ListItem>
            <ListItem>
              <Text>
                {
                  "You are NOT allowed to perform a vulnerability test unless given explicit permissions by an"
                }
                <span className={styles.red}> Administrator or Higher.</span>
              </Text>
            </ListItem>
          </UnorderedList>
          <Heading mt="15px" fontSize="20px">
            You CANNOT upload the following files:
          </Heading>
          <UnorderedList mt="15px">
            <ListItem>
              Any type of illegal content such as (Child Pornography/Gore/etc)
            </ListItem>
            <ListItem>
              Upon finding any sensitive information Such as (gore/illicit
              content/etc), we (Kythi) are allowed full permission to contact
              the respected authorities.
            </ListItem>
          </UnorderedList>
          <Heading mt="15px" fontSize="20px">
            Account sharing/information:
          </Heading>
          <UnorderedList mt="15px">
            <ListItem>
              If a user is found to be under the age of 13, we will delete their
              account at upon finding out as well as reporting their account(s)
              to discord if they have any.
            </ListItem>
            <ListItem>
              You will NOT not share your account with anyone and doing so will
              result in an account deletion effective immediately
            </ListItem>
            <ListItem>
              Upon mass uploading content and/or mass shortening URLs in attempt
              to DoS the service your account will be wiped along with your
              file(s)
            </ListItem>
            <ListItem>
              If you attempt to DDoS/DoS our service(s) we will delete your
              account this will be effective immediately
            </ListItem>
          </UnorderedList>
        </Code>
      </Center>
    </>
  );
}

import 'focus-visible/dist/focus-visible';
import styles from '../styles/terms.module.css';
import {
  Divider,
  Center,
  Code,
  ListItem,
  UnorderedList,
  Text,
  Flex,
  Heading,
  Link,
} from '@chakra-ui/react';

export default function Policy() {
  return (
    <>
      <Flex w="100%" h="50px" />
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
          <UnorderedList mt="10px">
            <ListItem>
              We (Kythi) reserve the right to update the terms of service at any
              time, without prior notice.
            </ListItem>
            <ListItem>
              You are NOT allowed to perform a vulnerability test unless given
              explicit permissions by an
              <span className={styles.nordred}> Administrator </span>
              or
              <span className={styles.nordblue}> Developer</span>.
            </ListItem>
            <ListItem>
              By using our service, you agree that your access to the service
              may be terminated for any reason at any time.
            </ListItem>
          </UnorderedList>
          <Heading mt="10px" fontSize="20px">
            Your Account
          </Heading>
          <UnorderedList mt="10px">
            <ListItem>
              You are responsible for maintaining the confidentiality of your
              credentials and any activity resulting from the use of them on
              Kythi.
            </ListItem>
            <ListItem>
              Attempts to disrupt the traffic of our service by any method is
              strictly prohibited and will reuslt in account termination.
            </ListItem>
            <ListItem>
              Following the{' '}
              <Link
                color="#5E81AC"
                href="https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule"
              >
                Children's Online Privacy Protection Act
              </Link>
              , you must be over the age of 13 to use our service. You will be
              terminated if you are found to be under the age of 13.
            </ListItem>
            <ListItem>
              Sharing your account with anyone is strictly prohibited, and will
              result in account termination.
            </ListItem>
          </UnorderedList>
          <Heading mt="12.5px" fontSize="20px">
            Your Content
          </Heading>
          <UnorderedList mt="10px">
            <ListItem>
              The content that you upload to Kythi is your responsibility. We
              (Kythi) will not be held responsible for any content that you
              upload or share through our service.
            </ListItem>
            <ListItem>
              You are not allowed to upload any form of illicit content which
              include but are not limited to: Child Pornography, Copyrighted
              Content, Gore
            </ListItem>
            <ListItem>
              Uploading any file that contains malware, viruses or malicious
              code with intent to harm others or damage and disrupt the service
              is strictly prohibited.
            </ListItem>
          </UnorderedList>
        </Code>
      </Center>
    </>
  );
}

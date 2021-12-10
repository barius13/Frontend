import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { useUser } from "../components/user";
import { useRouter } from "next/dist/client/router";


export default function Dashboard() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  return user ? (
    <Flex align="center" justify="center" direction="column">
      {`Hi ${user.username}!`}
    </Flex>
  ) : null;
}

import { useEffect } from "react";
import "focus-visible/dist/focus-visible";
import { useUser } from "../components/user";
import { Flex, Button } from "@chakra-ui/react";
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
      <Button onClick={function() {
        location.href = `${process.env.BACKEND_URL}/discord/link`
      }}>{user.discord.id ? "Relink" : "Link"} Discord</Button>
    </Flex>
  ) : null;
}

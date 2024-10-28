import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";

function Home() {
  // IF WE DO GET AUTHENTICATED SUCCESSFULLY
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Text>
          Hello 👋 {"\n"}
          {user?.emailAddresses[0].emailAddress}{" "}
        </Text>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
export default Home;

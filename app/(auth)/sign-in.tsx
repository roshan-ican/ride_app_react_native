import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <View>
        <Text>Sign In</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

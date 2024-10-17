import {  Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Home = ()=> {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <View>
          <Text>HOME</Text>
        </View>
      </SafeAreaView>
    );
}

export default Home
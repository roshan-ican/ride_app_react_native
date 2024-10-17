import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";
import CustomCarousel from "@/components/SwiperCarasoul";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  console.log(swiperRef, "swiperRef_____");
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <View>
          <Text className="text-black text-md font-JakartaBold">Skip</Text>
        </View>
      </TouchableOpacity>
      <CustomCarousel data={onboarding} />

      <CustomButton title="Next" className="w-11/12 mt-10" />
    </SafeAreaView>
  );
};

export default Onboarding;

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { Image, View, ScrollView, Text } from "react-native";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const { signIn, setActive, isLoaded } = useSignIn();

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, form.email, form.password]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your Email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your Password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />
          <OAuth />
          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text className="text-black text-md font-JakartaBold">
              Don't have an account?{" "}
              <Text className="text-primary-500">Sign Up</Text>
            </Text>
          </Link>
        </View>
        {/* OAUTH */}
      </View>
    </ScrollView>
  );
};

export default SignIn;

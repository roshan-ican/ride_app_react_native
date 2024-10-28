import { InputFieldProps } from "@/types/type";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type InputFieldTypeProps = {
  label: string;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  icon?: any;
  className?: string;
  secureTextEntry?: boolean;
  iconStyle?: string;
};

const InputField = ({
  label,
  labelStyle,
  containerStyle,
  placeholder,
  inputStyle,
  icon,
  iconStyle,
  secureTextEntry,
  ...props
}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="my-1 w-full">
        <Text className={`text-lg font-JakartaBold ${labelStyle}`}>
          {label}
        </Text>
        <View
          className={`flex flex-row justify-center items-center relative bg-neutral-100 rounded-full border border-neutral-100
    focus:border-primary-500
        ${containerStyle}`}
        >
          {icon && (
            <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            // write text input form video
          )}
          <TextInput
            className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
            secureTextEntry={secureTextEntry}
            {...props}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default InputField;

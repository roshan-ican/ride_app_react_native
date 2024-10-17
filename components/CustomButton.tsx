import { ButtonProps } from "@/types/type";
import { Text, TouchableOpacity, View } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "primary":
      return "bg-[#2563EB] text-white";
    case "secondary":
      return "bg-[#E2E8F0] text-black";
    case "danger":
      return "bg-[#EF4444] text-white";
    case "success":
      return "bg-[#10B981] text-white";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#2563EB] text-white";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  title,
  onPress,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full flex flex-row
                 justify-center items-center
                shadow-md shadow-neutral-400/70 
                ${getBgVariantStyle(bgVariant)} ${className} `}
    >
      {IconLeft && <IconLeft />}
      <View>
        <Text
          className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}
        >
          {title}
        </Text>
      </View>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;

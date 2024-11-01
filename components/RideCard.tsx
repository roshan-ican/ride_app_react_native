import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";
import { Ride } from "@/types/type";
import { Image, Text, View } from "react-native";

const RideCard = ({
  ride: {
    destination_address,
    destination_latitude,
    destination_longitude,
    origin_address,
    created_at,
    ride_time,
    driver,
    user_email,
    payment_status,
  },
}: {
  ride: Ride;
}) => {
  return (
    <View className="flex flex-col bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3 p-4">
      <View className="flex flex-row items-center">
        <Image
          source={{
            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
          }}
          className="w-[30%] h-[100px] rounded-lg"
        />
        <View className="flex flex-col mx-3 flex-1">
          <View className="flex flex-row items-center mb-2">
            <Image source={icons.to} className="w-5 h-5 mr-2" />
            <Text
              className="text-md font-JakartaMedium flex-shrink"
              numberOfLines={1}
            >
              {origin_address}
            </Text>
          </View>
          <View className="flex flex-row items-center">
            <Image source={icons.point} className="w-5 h-5 mr-2" />
            <Text
              className="text-md font-JakartaMedium flex-shrink"
              numberOfLines={1}
            >
              {destination_address}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex flex-col mt-4">
        <View className="flex flex-row items-center justify-between mb-3">
          <Text className="text-md font-JakartaMedium text-gray-500">
            Date & Time
          </Text>
          <Text className="text-md font-JakartaMedium text-gray-500">
            {formatDate(created_at)}, {formatTime(ride_time)}
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-md font-JakartaMedium text-gray-500">
            Driver
          </Text>
          <Text className="text-md font-JakartaMedium text-gray-500">
            {driver.first_name} {driver.last_name}
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-md font-JakartaMedium text-gray-500">
            Car Seats
          </Text>
          <Text className="text-md font-JakartaMedium text-gray-500">
            {driver.car_seats}
          </Text>
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="text-md font-JakartaMedium text-gray-500">
            Payment Status
          </Text>
          <Text
            className={`text-md capitalize font-JakartaMedium text-gray-500 ${payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
          >
            {payment_status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RideCard;

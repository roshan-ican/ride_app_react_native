import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import { useRouter } from "expo-router";

const { width: viewportWidth } = Dimensions.get("window");
interface CarouselItem {
  title: string;
  subtitle: string;
  image: any;
}
interface OnboardingCarouselProps {
  data: any[];
}
const CustomCarousel: React.FC<OnboardingCarouselProps> = ({ data }) => {

    console.log(data, "data_paaa");
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / viewportWidth);
    setActiveSlide(newIndex);
  };
  const handleDotPress = (index: number) => {
    setActiveSlide(index);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * viewportWidth,
        animated: true,
      });
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <Animated.ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          onMomentumScrollEnd={handleScroll}
          scrollEventThrottle={16}
          decelerationRate="fast"
          snapToInterval={viewportWidth}
          snapToAlignment="center"
        >
          {data.map((item, index) => (
            <View key={index} style={styles.slide}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.description}</Text>
            </View>
          ))}
        </Animated.ScrollView>
        <View style={styles.pagination}>
          {data.map((_, index) => (
            <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
              <View
                style={[
                  styles.dot,
                  index === activeSlide ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.bottomContainer}>
          {activeSlide === data.length - 1 && (
            <View style={styles.buttonContainer}>
              <Button
                title="Continue to Login"
                // onPress={() => router.push("/login")}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: viewportWidth,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    width: "90%",
    textAlign: "center",
    marginTop: 10,
    color: "#888",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: "row",
    margin: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#1443FF",
    width: 30,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
  bottomContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 20,
  },
});
export default CustomCarousel;

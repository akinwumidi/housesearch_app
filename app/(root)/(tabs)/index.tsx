import { View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Link href="/sign-in">Sign In</Link>
      <Link href="/(tabs)/explore">Explore</Link>

      <Link href="/(tabs)/profile">Profile</Link>
      <Link href="/(tabs)/properties/1">Property</Link>
    </View>
  );
}

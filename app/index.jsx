import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className= "flex-1 items-center justify-center bg-white" >
      <Text className="text-3xl font-pblack">Entry Point! Working</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Profile
      </Link>
    </View>
  );
}



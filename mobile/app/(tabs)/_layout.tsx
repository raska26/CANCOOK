import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context/lib/typescript/src/SafeAreaView";

export default function RootLayout() {
    return 
    <SafeAreaView>
        <Stack screenOptions={{ headerShown: false}}/>
    </SafeAreaView>
}

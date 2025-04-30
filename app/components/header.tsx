import { View, Text } from "react-native";
import { usePathname } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Header() {
    const pathname = usePathname();

    const getTitle = () => {
        if (pathname === "/") return "Word of the Day";
        if (pathname === "/history") return "Word History";
        return "Word Explorer";
    };

    const getSubtitle = () => {
        if (pathname === "/") return "Discover new vocabulary daily";
        if (pathname === "/history") return "Your collection of saved words";
        return "Expand your vocabulary";
    };

    return (
        <View className="shadow-md z-10">
            <LinearGradient
                colors={['#1e1e22', '#141418']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="px-5 pt-10 pb-5 rounded-b-3xl"
            >
                <Text
                    className="text-white text-3xl font-extrabold tracking-tight"
                    style={{
                        textShadowColor: 'rgba(0, 0, 0, 0.4)',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3,
                    }}
                >
                    {getTitle()}
                </Text>

                <Text className="text-gray-400 text-sm mt-1 tracking-wide">
                    {getSubtitle()}
                </Text>
            </LinearGradient>
        </View>
    );
}

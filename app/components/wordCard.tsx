import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { WordData } from "../types/type";
import { BlurView } from "expo-blur";

export default function WordCard({ word, definition, example }: WordData) {
    return (
        <View className="m-4">
            <View className="rounded-3xl overflow-hidden shadow-2xl">
                {/* gradient for background */}
                <LinearGradient
                    colors={["#2d6e73", "#a52b64", "#030014"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="p-5 rounded-3xl"
                >
                    <BlurView intensity={30} tint="light" className="overflow-hidden rounded-2xl">
                        <LinearGradient
                            colors={["rgba(255,255,255,0.9)", "rgba(240,248,255,0.7)"]}
                            className="p-5 rounded-2xl border border-white border-opacity-40"
                        >
                            {/* gradient for title */}
                            <LinearGradient
                                colors={["#6366f1", "#8b5cf6"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                className="px-4 py-2 rounded-xl self-start mb-3"
                            >
                                <Text className="text-white text-2xl font-bold">{word}</Text>
                            </LinearGradient>


                            <View className="border-t border-indigo-100 my-3 opacity-60" />

                            <View className="bg-white bg-opacity-60 rounded-xl p-3 mb-3 shadow-sm">
                                <Text className="text-gray-800 text-base">
                                    <Text className="font-semibold text-indigo-800">Definition: </Text>
                                    {definition}
                                </Text>
                            </View>
                            <View className="bg-indigo-50 bg-opacity-70 rounded-xl p-3 shadow-sm">
                                <Text className="text-gray-700 text-base italic">
                                    <Text className="font-semibold text-indigo-800 not-italic">Example: </Text>"{example}"
                                </Text>
                            </View>

                            <View className="absolute top-2 right-2 w-16 h-16 rounded-full bg-white opacity-10" />
                        </LinearGradient>
                    </BlurView>
                </LinearGradient>
            </View>
        </View>
    );
}

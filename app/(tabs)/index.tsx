import { useState, useEffect, useRef } from "react";
import { View, ActivityIndicator, Alert, ScrollView, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { getRandomWordData } from "../utils/wordGenerator";
import { saveWord, getHistory } from "../utils/storage";
import { WordData } from "../types/type";
import WordCard from "../components/wordCard";

export default function HomeScreen() {
    const [currentWord, setCurrentWord] = useState<WordData | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const wordLoadedRef = useRef(false);

    useEffect(() => {
        if (!wordLoadedRef.current) {
            wordLoadedRef.current = true;
            checkLatestWord();
        }
    }, []);

    const checkLatestWord = async () => {
        try {
            setLoading(true);
            const words = await getHistory();
            if (words && words.length > 0) {
                const latestWord = words[0];
                setCurrentWord(latestWord);
            }
        } catch (error) {
            console.log("Failed to get latest word:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleNewWord = async () => {
        try {
            setLoading(true);
            const newWord = await getRandomWordData();
            if (newWord) {
                setCurrentWord(newWord);
                await saveWord({ ...newWord, date: new Date().toISOString() });
            }
        } catch (error) {
            Alert.alert("Error", "Could not fetch a new word.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView className="flex-1 bg-primary px-4 py-6">
            <View className="mt-6 items-center">
                {loading ? (
                    <ActivityIndicator size="large" color="#ffffff" />
                ) : currentWord ? (
                    <WordCard {...currentWord} />
                ) : (
                    <View className="items-center py-10">
                        <Text className="text-lg text-gray-400 mb-4">No word loaded</Text>
                        <Text className="text-md text-gray-400 text-center">
                            Press the "New Word" button below to get started
                        </Text>
                    </View>
                )}

                <View className="mt-5 w-full">
                    <Pressable
                        onPress={handleNewWord}
                        className="bg-accent py-3 rounded-xl items-center"
                        disabled={loading}
                    >
                        <Text className="text-white font-semibold text-lg">New Word</Text>
                    </Pressable>
                </View>

                <View className="mt-3 w-full">
                    <Pressable
                        onPress={() => router.replace("/history")}
                        className="bg-secondary py-3 rounded-xl items-center"
                        disabled={loading}
                    >
                        <Text className="text-white font-semibold text-lg">View History</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
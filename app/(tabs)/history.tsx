import { useEffect, useState } from "react";
import { ScrollView, View, Text, Pressable, Alert } from "react-native";
import { useRouter } from "expo-router";
import { getHistory, clearHistory } from "../utils/storage";
import { WordData } from "../types/type";
import WordCard from "../components/wordCard";

export default function HistoryScreen() {
    const [words, setWords] = useState<WordData[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetchWords();
    }, []);

    const fetchWords = async () => {
        try {
            const storedWords = await getHistory();

            // sorting words
            const sortedWords = [...storedWords].sort((a, b) => {
                if (!a.date) return 1;
                if (!b.date) return -1;
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });

            setWords(sortedWords);
        } catch (error) {
            console.error("Failed to fetch word history:", error);
            Alert.alert("Error", "Failed to load word history.");
        }
    };

    const handleClearHistory = async () => {
        Alert.alert(
            "Clear History",
            "Are you sure you want to clear your word history?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Yes",
                    onPress: async () => {
                        await clearHistory();
                        setWords([]);
                        Alert.alert("History cleared!");
                    },
                },
            ],
            { cancelable: true }
        );
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return "Unknown date";

        try {
            const date = new Date(dateString);
            return date.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            return "Invalid date";
        }
    };

    return (
        <View className="flex-1 bg-primary">
            <ScrollView className="px-4 py-6 flex-1">
                {words.length === 0 ? (
                    <Text className="text-center text-gray-400 text-lg mt-6">No words found.</Text>
                ) : (
                    words.map((word, index) => (
                        <View key={index} className="mb-6">
                            <WordCard {...word} />
                            {word.date && (
                                <Text className="text-gray-400 text-xs mt-1 text-right">
                                    Added: {formatDate(word.date)}
                                </Text>
                            )}
                        </View>
                    ))
                )}
            </ScrollView>

            <View className="px-4 py-6">
                <Pressable
                    onPress={handleClearHistory}
                    className="bg-accent py-3 rounded-xl items-center"
                >
                    <Text className="text-white font-semibold text-lg">Clear History</Text>
                </Pressable>

                <Pressable
                    onPress={() => router.replace("/")}
                    className="mt-3 bg-secondary py-3 rounded-xl items-center"
                >
                    <Text className="text-white font-semibold text-lg">Go to Home</Text>
                </Pressable>
            </View>
        </View>
    );
}

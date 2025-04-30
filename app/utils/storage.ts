import AsyncStorage from "@react-native-async-storage/async-storage";
import { WordData } from "../types/type";

const STORAGE_KEY = 'WORD_HISTORY';
const MAX_HISTORY_SIZE = 50;

export async function saveWord(word: WordData): Promise<void> {
    try {
        const existing = await getHistory();

        const updated = [word, ...existing.filter((w: WordData) => w.word !== word.word)];

        const trimmed = updated.slice(0, MAX_HISTORY_SIZE);

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    } catch (error) {
        console.error("Error saving word:", error);
    }
}

export async function getHistory(): Promise<WordData[]> {
    try {
        const history = await AsyncStorage.getItem(STORAGE_KEY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error("Error fetching word history:", error);
        return [];
    }
}

export async function clearHistory(): Promise<void> {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error("Error clearing word history:", error);
    }
}

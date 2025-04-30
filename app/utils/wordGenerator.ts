import { WordData } from "../types/type";

function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export async function getRandomWordData(retries = 3): Promise<WordData> {
    try {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        const wordResponse = await fetch(
            `https://api.datamuse.com/words?sp=${randomLetter}*&max=50`
        );
        const wordList = await wordResponse.json();

        if (!Array.isArray(wordList) || wordList.length === 0) {
            throw new Error("No words found from Datamuse.");
        }

        const randomIndex = Math.floor(Math.random() * wordList.length);
        const rawWord = wordList[randomIndex].word;
        const randomWord = capitalizeFirstLetter(rawWord);

        const definitionResponse = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${rawWord}`
        );
        const definitionData = await definitionResponse.json();

        if (Array.isArray(definitionData)) {
            const firstEntry = definitionData[0];
            const meanings = firstEntry.meanings?.[0];
            const definition = meanings?.definitions?.[0]?.definition || "No definition available.";
            const example = meanings?.definitions?.[0]?.example || "No example available.";

            return {
                word: randomWord,
                definition,
                example,
                date: new Date().toISOString(),
            };
        } else {
            return await getRandomWordData(retries - 1);
        }

    } catch (error) {
        if (retries > 0) {
            return await getRandomWordData(retries - 1);
        }
        console.error("Error fetching word data after retries:", error);
        throw new Error("Failed to fetch word data");
    }
}

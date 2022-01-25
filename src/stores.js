import {derived, readable, writable} from 'svelte/store';
import {GAME_STATUS} from './constants';
import {getRandomItem} from "./helpers";
import {KEYWORDS} from "./keywords";

export const targetWord = writable(getRandomItem(KEYWORDS));

export const guessedWords = writable([]);

export const activeRow = derived(
    guessedWords,
    $guessedWords => $guessedWords.length
);

export const currentGuess = writable('');

export const attemptsCount = readable(6);
export const wordLength = readable(5);

export const gameStatus = writable(GAME_STATUS.IN_PROGRESS);
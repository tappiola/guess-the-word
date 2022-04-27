<script>
    import {currentGuess, gameStatus, guessedWords, isAnimating, targetWord, wordLength} from "../stores";
    import {getIsIndexCorrect} from "../helpers";
    import {GAME_STATUS} from "../constants";
    import KeyboardLetter from "./KeyboardLetter.component.svelte";

    export let letter;
    export let index;

    const handleButtonClick = () => {
        if ($currentGuess.length >= $wordLength || $gameStatus !== GAME_STATUS.IN_PROGRESS || $isAnimating) {
            return;
        }

        $currentGuess = $currentGuess + letter;
    }

    $: revealedWords = $isAnimating ? $guessedWords.slice(0, -1) : $guessedWords;
    $: hitLetters = revealedWords.reduce((prev, next) => [...prev, ...next], []);

</script>

<KeyboardLetter {letter}
                {handleButtonClick}
                isLetterCorrect={hitLetters.includes(letter) && $targetWord.includes(letter) && !getIsIndexCorrect($guessedWords, $targetWord, letter)}
                isLetterAndPositionCorrect={hitLetters.includes(letter) && getIsIndexCorrect($guessedWords, $targetWord, letter)}
                isLetterWrong={hitLetters.includes(letter) && !$targetWord.includes(letter)}
 />

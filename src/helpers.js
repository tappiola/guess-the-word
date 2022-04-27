export const getRandomItem = items => items[Math.floor(Math.random() * items.length)];

export const getIsIndexCorrect = (words, word, letter) => {
    const indices = word.split('').map((e, i) => e === letter ? i : '').filter(String);

    return indices.some(index => words.some(w => w[index] === letter));
}
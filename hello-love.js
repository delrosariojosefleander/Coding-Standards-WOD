// hello-love.ts
var helloLoveLyrics = [
    'I don\'t know where you were, I don\'t know what became of us',
    'And I don\'t know what went wrong, time had turned its back on us',
    'It\'s not that I gave up, I just stopped trying',
    'I have my mind made up on no-more-crying',
    'I thought tonight would be just me, myself and I\'ing',
    'I guess I\'m not the one that\'s deciding',
    'Hello, love, all dressed up',
    'Whatchu doin\' round here? I didn\'t expect to see ya',
    'Hello, love, I got both hands up',
    'Yeah, you got me, you got me, you got me',
    'And it feels so good to see ya',
    'Hello, love',
    'Hello, love',
    'Hello, hello, love',
];
function hasWord(lyrics, word) {
    return lyrics.some(function (line) { return line.toLowerCase().includes(word.toLowerCase()); });
}
function numWord(lyrics, word) {
    return lyrics.filter(function (line) { return line.toLowerCase().includes(word.toLowerCase()); }).length;
}
// Example usage with the word "hello"
console.log(hasWord(helloLoveLyrics, "hello")); // prints true
console.log(numWord(helloLoveLyrics, "hello")); // prints 4
// Additional test cases
console.log(hasWord(helloLoveLyrics, "love")); // prints true
console.log(numWord(helloLoveLyrics, "love")); // prints 5
console.log(hasWord(helloLoveLyrics, "us")); // prints true
console.log(numWord(helloLoveLyrics, "us")); // prints 2
console.log(hasWord(helloLoveLyrics, "dressed")); // prints true
console.log(numWord(helloLoveLyrics, "dressed")); // prints 1

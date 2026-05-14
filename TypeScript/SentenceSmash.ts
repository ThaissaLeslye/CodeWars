export function smash (words: string[]): string {
  if (words.length == 0)
  {
    return "";
  }

  let phrase: string = "";
  const lastWord: string = words[words.length - 1];
  const wordsWithoutLastWord: string[] = words.slice(0, words.length - 1);
  console.log(wordsWithoutLastWord);

  for (const word of wordsWithoutLastWord) 
    {
      phrase += word + " ";
    }

   return phrase + lastWord;
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));
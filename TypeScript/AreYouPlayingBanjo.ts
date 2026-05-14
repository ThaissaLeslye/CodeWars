export function areYouPlayingBanjo(name: string): string {
    const firstLetter: string = name[0];
    const lettersForPlayingBanjo: string[] = ['r', 'R'];
    if(lettersForPlayingBanjo.includes(firstLetter)) 
        {
        return name + " plays banjo";
        }
    return name + " does not play banjo";
}
/*
  Step 1 - If name first letter is r or R return name + " plays banjo" 
  Step 2 - Else return name + " does not play banjo"
*/


console.log(areYouPlayingBanjo('rhaissa'));
console.log(areYouPlayingBanjo('thaissa'));
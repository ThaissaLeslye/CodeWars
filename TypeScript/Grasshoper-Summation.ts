export const summation = (num:number)=> { 
    let count: number = num - 1;
    let result: number = num;
    while (count >= 0)
    {
        result += count;
        count -= 1;
    }
    return result;
}

console.log(summation(2));
console.log(summation(8));
/*
    The number will always be a positive integer greater than 0
    Step 2: contador = num - 1
    Step 3: While contador >= 0 result =+ contador, contador -= 1
    Step 4: return result
*/
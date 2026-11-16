export function countBits(n: number): number {
    // let count: number = 1;

    // if(n == 0)
    // {
    //     return 0;
    // }

    // while(!((n & (n - 1)) === 0))
    // {
    //     if(n % 2 != 0)
    //     {
    //         n -= 1;
    //         count += 1;
    //     }
    //     else
    //     {
    //         n /= 2;
    //     }
    // }

    // return count;

    let count = 0;
    while (n > 0) {
        n &= (n - 1); 
        count++;
        console.log(n, count);
    }
    return count;

}

for(let n of [1234])
{
    console.log(countBits(n));
}



/*
    If 0 return 0
    Transform in binary
    Count ones

    if 0 returns 0
    if multiple of 2 returns 1
    else resto de 2 

*/



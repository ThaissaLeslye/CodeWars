export function toCamelCase(str:string):string{
    const strList: string[] = str.split(/[-_]/);
    let strCamelCase: string = '';
    let first:boolean = true;

    if(str == '' || strList.length == 1)
    {
        return str;
    }
    
    for(let word of strList) 
    {
        if(first)
        {
            strCamelCase += word;
            first = false;
        } else {
            strCamelCase += word.charAt(0).toUpperCase() + word.slice(1);
        }
    }
    
    return strCamelCase;
}

console.log(toCamelCase("the_stealth_warrior"));

/*
    '' => '', 
    remove - and _ 
    wich word after - or _ must be Captalize
*/
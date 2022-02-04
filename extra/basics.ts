function ad(n1:number,n2:number,ShowResult:boolean,Result:string){
    // if(typeof n1!=='number'){
    //     throw new Error('Incorrect input')
    // }
    const result = n1+n2
    if(ShowResult){
        console.log(resultPhrase+result)
    }
    return n1+n2;
}

let number1= 5;
const number2 = 2.8;
const PrintResult  =true;
const resultPhrase = 'Result is ';

 ad(number1,number2,PrintResult,resultPhrase)
// console.log(result)

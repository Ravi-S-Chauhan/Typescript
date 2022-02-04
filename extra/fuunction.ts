function add(n1:number,n2:number):number{
    return n1+n2
}

function printResult (num:number):void{
    console.log('Result is : '+ num)
}
printResult(add(5,7))

function addAndHandle(n1:number,n2:number,c:(num:number)=>void){
    const result  =n1+n2;
    c(result)
}

let combineVlaues:(a:number,b:number) => number;

combineVlaues = add;
// combineVlaues = printResult;
// combineVlaues = 5
addAndHandle(1,2,(num)=>{
    console.log(num)
})
console.log(combineVlaues(8,8))

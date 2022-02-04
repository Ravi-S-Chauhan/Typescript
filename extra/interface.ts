interface AddFn{
    (a:number,b:number):number
}

let add:AddFn;
add = (n1:number,n2:number) => {
    return n1+n2
}

interface Named{
    readonly name?:string
    outputName?:string;
}

interface Greetable extends Named{

    greet(phrase:string):void;

    not?(n:number):number;
}

// type Person = {
//     name:string;
//     age:number;

//     greet(phrase:string):void;
// }

class Person implements Greetable{
    age=30

constructor(public name?:string){
}
greet(phrase: string): void {
    console.log(phrase+ ' ' + this.name)
    
}
not?(n:number):number{
    return n
}
}

let user1:Greetable;

user1 = new Person('max')
let v=user1.not!(1)
console.log(v)
user1.greet("Hii there - I am")

console.log(user1)
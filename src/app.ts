// const names:Array<String> = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// const promise:Promise<String> = new Promise((resolve,reject) => {
//     setTimeout(():void => {
//         resolve('This is my resolved data');
//         }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })


function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}
// console.log(mergeObjects({ name: 'Alice' }, { age: 50 }));

const merg = mergeObjects({ name: 'Alice' }, { age: 50 });
console.log(merg.age);

interface lengthy{
    length:number;

}

function countAndDescibe<T extends lengthy>(element:T):[T,string]{
    let descriptionText = 'Got no value.';
    if(element.length > 0){
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescibe(['sports', 'cooking']));

//keyof 

function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U){
    return 'Value : '+obj[key];
}
extractAndConvert({name:'Alice'}, 'name');

class DataStorage<T extends string|boolean|number>{
    private data:T[]=[];

    addItem(item:T){   
        this.data.push(item);
    }
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems(){
        return [...this.data]
    }

}
const textStorage = new DataStorage<string>();
textStorage.addItem('asd')
textStorage.removeItem('asd')
textStorage.addItem('second')
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name:'Alice'});
// objStorage.addItem({name:'Bob'});
// objStorage.removeItem({name:'Alice'});
// console.log(objStorage.getItems());

interface CourseGoal{
    title:string;
    description:string;
    completeUntil:Date;
}

function createCourseGoal(title:string,descrition:string,date:Date)
:CourseGoal{
    let courseGoal:Partial<CourseGoal> = {};
    courseGoal.title=title,
    courseGoal.description=descrition,
    courseGoal.completeUntil=date;

    return courseGoal as CourseGoal;
}

const names:Readonly<string[]> = ['Alice', 'Bob'];
//names.push('Mallory');
// names.pop();

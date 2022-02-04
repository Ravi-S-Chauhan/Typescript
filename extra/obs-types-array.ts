
    // const person:{
    //     name:string;
    //     age:number;
    //     hobbies:string[];
    //     role:[number,string]
    // }

    enum Role {ADMIN,READ_ONLY,AUTHOR};

    const person={
    name:'ravi',
    age:30,
    hobbies:[
        'sports','Cooking'
    ],
    role:Role.ADMIN

}


// person.role.push('admin')

let favoriteActivities:string[];
favoriteActivities=['Sports']

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())
}

console.log(person.name)
if (person.role === Role.READ_ONLY){
    console.log("is read only")
}
type Admin = {
    name:string;
    privileges:string[];

}

type Employee = {
    name:string;
    startDate:Date;
}

//interface ElevatedEmp extends Employee,Admin{}
 type ElevatedEmp = Admin & Employee;
// const e1: ElevatedEmpTye = {

// name:'Max',
// privileges:['create-server'],
// startDate:new Date()
// }

// console.log(e1);
type Combineable = string | number;
type Numeric = number | boolean;

type universal = Combineable & Number

let  re:universal= 1
console.log(typeof(re))

const  Nam: ElevatedEmp = {
    name :'Ravi',
    privileges: ['creaet-server'],
    startDate: new Date()
    
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation (emp:UnknownEmployee){
    console.log('Name: ' + emp.name);
    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp){
        console.log('StartDate: ' + emp.startDate);
    }
    
}
printEmployeeInformation(Nam)

class Car{
    drive(){
        console.log('Driving...');
    }
}

class Truck{
    drive(){
        console.log('Driving Truck...');
    }
    loadCargo(amount:number){
    console.log('Loading Cargo...' + amount);
    }
}
type Vehicle = Truck | Car;
const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle:Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1)
useVehicle(v2)
interface Bird{
    type:'bird';
    flyingSpeed:number;
}
interface Horse{
    type:'horse';
    runningSpeed:number;
}
type Animal = Bird | Horse;
function moveAnimal(animal:Animal){
    let speed;
    switch(animal.type){
        case 'bird':speed = animal.flyingSpeed;
        break;
        case 'horse':speed = animal.runningSpeed;
    }
    console.log("movind at speed : " + speed)
}
const sparrow:Bird = {
    flyingSpeed:12,
    type:'bird'
}
moveAnimal(sparrow)
"use strict";
var _a;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('max', ' masdf');
result.split(' ');
console.log(result);
const fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = "";
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
const Nam = {
    name: 'Ravi',
    privileges: ['creaet-server'],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('StartDate: ' + emp.startDate);
    }
}
printEmployeeInformation(Nam);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving Truck...');
    }
    loadCargo(amount) {
        console.log('Loading Cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse': speed = animal.runningSpeed;
    }
    console.log("movind at speed : " + speed);
}
const sparrow = {
    flyingSpeed: 12,
    type: 'bird'
};
moveAnimal(sparrow);
const userInputElement = document.getElementById('textinput');
userInputElement.value = 'Hi there!';
const errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a character'
};
//# sourceMappingURL=app.js.map
"use strict";
let re = 1;
console.log(typeof (re));
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
//# sourceMappingURL=app.js.map
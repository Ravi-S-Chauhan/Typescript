"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const merg = mergeObjects({ name: 'Alice' }, { age: 50 });
console.log(merg.age);
function countAndDescibe(element) {
    let descriptionText = 'Got no value.';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescibe(['sports', 'cooking']));
function extractAndConvert(obj, key) {
    return 'Value : ' + obj[key];
}
extractAndConvert({ name: 'Alice' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('asd');
textStorage.removeItem('asd');
textStorage.addItem('second');
console.log(textStorage.getItems());
const objStorage = new DataStorage();
objStorage.addItem({ name: 'Alice' });
objStorage.addItem({ name: 'Bob' });
objStorage.removeItem({ name: 'Alice' });
console.log(objStorage.getItems());
//# sourceMappingURL=app.js.map
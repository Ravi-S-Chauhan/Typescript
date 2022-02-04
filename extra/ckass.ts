abstract class Department {
static fiscalYear = 2020;
    // private id:string
    // private name:string ;
    protected employee:string[] = [];

    constructor(protected readonly id:string,public name:string) {
    
    }

    abstract describe(this:Department):void;

static createEmployee(name:string){
    return{name:name}
}

    addEmployee(employee:string){
        this.employee.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employee.length)
        console.log(this.employee)
    }
}
class ITDepartment extends Department {
    private lastReport:string;

get mostRecentReport(){
    if(this.lastReport)
    return this.lastReport;
    throw new Error('no Report Found')
}

set mostRecentReport(value:string){
    this.addReport(value)

}

describe(): void {
    console.log('Accounting Department - ID: '+this.id)
}

    constructor(id:string,private reports:string[]){
        super(id,'IT');
        this.lastReport=reports[0];
    }

    addEmployee(name: string): void {
        if(name === 'Ravi') return;
        this.employee.push(name)
    }
    addReport(text:string){
        this.reports.push(text)
        this.lastReport = text
    }
}

const employee1 = Department.createEmployee('Black')
console.log(employee1,Department.fiscalYear)

const IT = new ITDepartment("d1",[]);
IT.mostRecentReport = 'Something is wrong..'
IT.addReport('lastyear report')
console.log(IT.mostRecentReport)

IT.addEmployee('Ravi')
IT.addEmployee('Sanjib')
// accounting.name = "Rrrrr"
// accounting.employee[2] = 'Anna'
IT.addEmployee('Blue house')
IT.describe();
console.log(IT)
// IT.describe()
IT.printEmployeeInformation()
// const accountCopy = {name:'Dumy',employee:["ramesh","suresh"],describe:accounting.describe}
// accountCopy.describe();
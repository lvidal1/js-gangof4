function Employee(name) {
    this.name = name;

    this.say = function () {
        console.log(`I am employee ${name}`);
    }
}

function EmployeeFactory() {
    this.create = function (name) {
        return new Employee(name);
    }
}

function Vendor(name) {
    this.name = name;

    this.say = function () {
        console.log(`I am vendor ${name}`);
    }
}

function VendorFactory() {
    this.create = function (name) {
        return new Vendor(name);
    }
}

function main() {
    const persons = [];
    const employeeFactory = new EmployeeFactory();
    const vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Employee 1"));
    persons.push(employeeFactory.create("Employee 2"));
    persons.push(vendorFactory.create("Vendor 1"));
    persons.push(vendorFactory.create("Vendor 2"));

    persons.forEach(person => {
        person.say();
    });
}

main();

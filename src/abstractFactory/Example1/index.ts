interface Model {
  name: string;
  say(): void;
}

interface Factory {
  create(name: string): any;
}

function Employee(this: Model, name: string): void {
  this.name = name;

  this.say = function (): void {
    console.log(`I am employee ${name}`);
  };
}

function EmployeeFactory(this: Factory) {
  this.create = function (name: string): Model {
    // Reference : https://bobbyhadz.com/blog/typescript-new-expression-whose-target-lacks-construct-signature#ts---new-expression-whose-target-lacks-construct-signature
    return new (Employee as any)(name);
  };
}

function Vendor(this: Model, name: string) {
  this.name = name;

  this.say = function (): void {
    console.log(`I am vendor ${name}`);
  };
}

function VendorFactory(this: Factory) {
  this.create = function (name: string) {
    return new (Vendor as any)(name);
  };
}

function main() {
  const persons = [];
  const employeeFactory = new (EmployeeFactory as any)();
  const vendorFactory = new (VendorFactory as any)();

  persons.push(employeeFactory.create("Employee 1"));
  persons.push(employeeFactory.create("Employee 2"));
  persons.push(vendorFactory.create("Vendor 1"));
  persons.push(vendorFactory.create("Vendor 2"));

  persons.forEach((person) => {
    person.say();
  });
}

main();

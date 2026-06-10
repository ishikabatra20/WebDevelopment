const customer = {
    name: "John Doe",
    age: 35,
    isPremium: true,
    email: "john.doe@example.com",
    arrays: [1, 2, 3],
    address: {
        street: "123 Main St",
        pincode: "12345",
    }
};

// Destructuring with aliasing
const { age, name: value } = customer;

console.log(age, value); // 35 John Doe

const customer2= {...customer};
customer2.name="Ross Doe";

//name, age, isPremium, email- primitive values are copied by value
console.log(customer.name); //John Doe
console.log(customer2.name); //Ross Doe

//shallow copy of the customer object
//arrays and address are reference values, so they are copied by reference
customer.address.pincode=10111;
console.log(customer.address.pincode); //10111
console.log(customer2.address.pincode); //10111

//cloneing the customer object using JSON methods
const customer2 = structuredClone(customer);
customer2.name="Ross Doe";
customer2.address.pincode=10111;
//name, age, isPremium, email- primitive values are copied by value
console.log(customer.name); //John Doe
console.log(customer2.name); //Ross Doe
//arrays and address are reference values, so they are copied by value in the cloned object
console.log(customer.address.pincode); //12345
console.log(customer2.address.pincode); //10111




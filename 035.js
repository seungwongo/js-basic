//Object Destructuring

function getPerson() {
  return {
    firstName: "John",
    lastName: "Doe",
    age: 37,
    email: "john@gmail.com",
    city: "Jeju-si",
    country: "Republic of korea"
  };
}

var person = getPerson();
console.log(person.firstName);
console.log(person.lastName);

var {
  firstName,
  lastName
} = getPerson();
console.log(firstName);
console.log(lastName);
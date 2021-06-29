//Template Literals
//Hello Jeremy. Welcome!
function hello(name) {
  console.log("Hello " + name + ". Welcome!");
}

function hello2(name, name2 = "Jeremy") {
  console.log(`Hello ${name}. Welcome ${name2}!`);
}

hello2("Jeremy");
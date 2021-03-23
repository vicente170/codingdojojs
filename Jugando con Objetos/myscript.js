var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log("la edad de John es ".concat(users[1].age))
console.log("El nombre del primer objeto es ".concat(users[0].name))

for(var user in users){
console.log((users[user].name).concat(' - ').concat(users[user].age));
}
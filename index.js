displayArray = [];

for (i = 0; i < users.length; i++) {
    const newObject = {
        Name: users[i].username,
        ID: users[i].id,
        City: users[i].address.city
    }
    displayArray.push(newObject);
}

console.log(displayArray);
alert(JSON.stringify(displayArray));

const userId = prompt("Enter an ID:");

let todoList = " ";



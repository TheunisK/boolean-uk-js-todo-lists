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

const user_id = prompt("Enter an ID:");

let todoList = " ";

for (i = 0; i < todos.length; i++) {
    if (todos[i].userId == user_id) {
        todoList += todos[i].title + "\n";
    }

}

alert(todoList);


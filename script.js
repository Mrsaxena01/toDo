console.log("-----------ToDo List ----------");
let toDo = [];

while(true){
    console.log("__________________________________________\n")
    console.log("1.List                    2.Add\n3.Delete                  4.Quit\n");
    let req = prompt("please enter your choice : ");
    if(req == 'Quit' || req == 'quit'){
        console.log("Quiting toDo app!");
        break;
    }else if(req == 'List' || req == 'list'){
            let i=1;
        for(item of toDo){
            console.log(i, item);
            i++;
        }
    }else if(req == 'Add' || req == 'add'){
        let item = prompt("Enter task you want to add : ");
        toDo.push(item);
        console.log("\nTask added! ");
    }else if(req == 'Delete' || req == 'delete'){
        console.log("Here is your all tasks \n");
            let i=1;
        for(item of toDo){
            console.log(i, item);
            i++;
        }
        let index = prompt("Please enter the task number which you want to delete/remove : ");
        index = parseInt(index);
        toDo.splice(index-1, 1);
        console.log("task removed/deleted! ");
    }else{
        console.log("Wrong request !\n");
        let req = prompt("please enter right option/choice : ");
    }
}

const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#addbutton");
const todolist = document.querySelector(".itemlist");
const pendingTasks = document.querySelector(".pendingTasks");
const clearall = document.querySelector(".clearall");


//onkeyup event for hide and unhide add button
inputbox.onkeyup= () => {
    let Entervalue = inputbox.value; // store user entered value
    if(Entervalue.trim() != 0){
        add.style.display = "block"; //show add button
    }
    else{
        add.style.display = "none"; // hide add button
    }
}

var item = [];
// Onclick event is used to add task in array
add.onclick = () => {
    item.push(inputbox.value);
    showcase(); // showcase call
}

//showcase function to display all the added task
function showcase(){
let ListTag = "";
item.forEach((element, index) => {
    ListTag += `<li>
        <label class="box">
            <input class="checkinput" type="checkbox">
                <span class="checkmark"></span>${element}
        </label>
        <span class="icon">
            <i class="del uil uil-plus-circle" onclick="deleteTask(${index})"></i>
        </span>
    </li>`;
});


todolist.innerHTML = ListTag; //adding new li tag inside ul tag
inputbox.value = ""; //once task added input will become empty
add.style.display = "none"; // hide add button 
pendingTasks.textContent = item.length;
}

// delete task function for removing the task from the list
function deleteTask(index){
    item.splice(index, 1);
    showcase();
}

// delete all tasks function for deleting all tasks from your list
clearall.onclick = () => {
    item = [];
    showcase();
}

// clear completer for which task complete delete from list
document.querySelector('.clearcompletetask').onclick = () => {
    var inputElement = document.querySelectorAll(".checkinput");
    var temp = [];
    for(var i = 0; i < item.length; i++){
        if(inputElement[i].checked === true){
            temp.push(item[i]);
        }
    }

    
     var j = 0;
     for(i = 0; i < item.length; i++){
        if(item[i] == temp[j]){
            item.splice(i,1);
            j++;
            i--;
        }
     }
     showcase();
} 

// uncomplete all task is used for uncomplete  all task
document.querySelector('.uncomplete').onclick = () => {
    checked(false);
}


// complete all task is used for complete  all task
document.querySelector('.complete').onclick = () => {
    checked(true);
}

// checked function for checked and unchecked task
function checked(params) {
    var inputElement = document.querySelectorAll('.checkinput');
    for(var i = 0; i < item.length; i++){
    if(params == true){
        inputElement[i].checked = true;
    }
    else{
        inputElement[i].checked = false;
    }
    }

}

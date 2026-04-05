// this is a js file
// let task=document.querySelector("#text1");
// let desc=document.querySelector("#text2");
// let add=document.querySelector("button");
// let list=document.querySelector(".Lists");
// add.addEventListener("click",()=>{
   
//     if(task.value==="" || desc.value===""){
//         alert("invalid input");
//         return;
//     }
//     let item=document.createElement("div");
//     let deletebtn=document.createElement("button");
//     item.innerHTML=task.value + "<br>" + desc.value;
//     deletebtn.innerText="remove";
//     item.appendChild(deletebtn);
//     list.appendChild(item);
//     deletebtn.addEventListener("click", () => {
//         item.remove();
//     });
//     task.value = "";
//     desc.value = "";
// });


// local storage
window.addEventListener("DOMContentLoaded", loadTasks);

let task = document.querySelector("#text1");
let desc = document.querySelector("#text2");
let add = document.querySelector("button");
let list = document.querySelector(".Lists");

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(t => createTask(t.task, t.desc));
}

add.addEventListener("click", () => {
    if (task.value === "" || desc.value === "") {
        alert("invalid input");
        return;
    }

    createTask(task.value, desc.value);
    saveTask(task.value, desc.value);

    task.value = "";
    desc.value = "";
});

function createTask(taskvalue, descvalue) {
    let item = document.createElement("div");
    item.classList.add("Item");
    let deletebtn = document.createElement("button");

    item.innerHTML = taskvalue + "<br>" + descvalue;
    deletebtn.innerText = "remove";
    deletebtn.classList.add("remove-btn");

    item.appendChild(deletebtn);
    list.appendChild(item);

    deletebtn.addEventListener("click", () => {
        item.remove();
        removeTask(taskvalue, descvalue);
    });
}

function saveTask(taskvalue, descvalue) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ task: taskvalue, desc: descvalue });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(taskValue, descValue) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => !(t.task === taskValue && t.desc === descValue));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

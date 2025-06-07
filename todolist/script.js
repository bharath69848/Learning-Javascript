let tasks = [];
const itemdiv = document.getElementById("items")
const task = document.getElementById("input")
const key = "keys"

function render(){
    itemdiv.innerHTML = null;

    for (const [idx,item] of Object.entries(tasks)){
        const container = document.createElement("div")
        container.style.margin = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeitem(idx)

        container.appendChild(text)
        container.appendChild(button)
        itemdiv.appendChild(container)
    }
}
function loaditems(){
    const oldtasks = localStorage.getItem(key)
    if(oldtasks) tasks = JSON.parse(oldtasks)
    render()
}
function saveitems(){
    const stringtasks = JSON.stringify(tasks)
    localStorage.setItem(key,stringtasks)
}
function additem(){
    const value = task.value;
    if (!value) {
        alert("Small boy")
        return
    }
    tasks.push(value)
    render()
    task.value = "";
    saveitems()

}

function removeitem(idx){
    tasks.splice(idx,1)
    render()
    saveitems()
}

document.addEventListener("DOMContentLoaded",loaditems)
const date = new Date();
document.querySelector("#currentDate").innerHTML = date;

let addTodoBtn = document.querySelector("#btnAddTodo");
addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
    let todoCount = document.querySelector("#todoList").childElementCount;

    let input = document.querySelector("#inputTodo").value;
    
    let todoList = document.querySelector("#todoList");

    let todoItem = document.createElement("div");
    let todoInput = document.createElement("input");
    todoInput.type = "text";
    todoInput.setAttribute("disabled", "");
    todoInput.style.marginTop = "15px"
    todoInput.style.marginRight = "10px"
    todoInput.value = input;

    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "<i class='fa-solid fa-pen'></i>";
    btnEdit.classList = "btnEdit";
    btnEdit.style.marginRight = "10px";
    btnEdit.style.backgroundColor = "#0275d8";
    btnEdit.style.color = "white";
    btnEdit.style.border = "none";
    btnEdit.style.borderRadius = "50%";
    btnEdit.addEventListener("click", edit);

    let btnRemove = document.createElement("button");
    btnRemove.innerHTML = "<i class='fa-solid fa-trash'></i>";
    btnRemove.classList = "btnRemove";
    btnRemove.style.marginRight = "10px"
    btnRemove.style.backgroundColor = "#d9534f";
    btnRemove.style.color = "white";
    btnRemove.style.border = "none"
    btnRemove.style.borderRadius = "50%";
    btnRemove.addEventListener("click", removeTodo);

    todoList.appendChild(todoItem);
    todoItem.appendChild(todoInput);
    todoItem.appendChild(btnEdit);
    todoItem.appendChild(btnRemove);


    if (todoCount == 4) {
        addTodoBtn.setAttribute("disabled", "");
        alert("You have reached maximum numbers of todos!");
    }

    function edit() {
        todoInput.removeAttribute("disabled", "");
        btnEdit.setAttribute("disabled", "");


        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList = "saveBtn";
        saveBtn.style.border = "none";
        saveBtn.style.borderRadius = "100px";
        saveBtn.style.backgroundColor = "black"
        saveBtn.style.color = "white"

        saveBtn.addEventListener("click", save);
        todoItem.removeChild(btnRemove);

        todoItem.appendChild(saveBtn);

        function save() {
            let message = "Are you sure you want to save changes?";
    
            if (confirm(message) == true) {
                btnEdit.removeAttribute("disabled", "");
    
                let newTodo = todoInput.value;
    
                todoInput.setAttribute("disabled", "");
                todoItem.appendChild(btnRemove);
                todoItem.removeChild(saveBtn);
    
                message = "Save successfully";
            } else {
                message = "Cancelled"
            }
        }  
    }

    function removeTodo () {
        addTodoBtn.removeAttribute("disabled", "");
        this.parentNode.remove();
    }
}


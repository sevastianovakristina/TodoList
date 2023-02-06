let addMessage = document.querySelector('.container_block1_new-todo');
let addButton = document.querySelector('.container_block1_button-add');
let todo = document.querySelector('.container_block2_ul');
let todoList = [];

if(localStorage.getItem('todo')) {
  todoList =JSON.parse(localStorage.getItem('todo'));
  displayMessages();
}

addButton.addEventListener('click', function(){
 if(!addMessage.value) {
  alert("Введите текст!");
  return;
 }

 let newTodoList = {
    todo: addMessage.value,
    checked: false,
    important: false
  };
  todoList.push(newTodoList);
  displayMessages();
  localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages(){
    let displayMessage = '';
    todoList.forEach(function(item, i) {
        displayMessage += `
        <li> 
            <input type = 'checkbox' id = 'item_${i}' ${item.checked ? 'checked' : ''}> 
            <label for = 'item_${i}'>${item.todo} </label>  
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
}

todo.addEventListener('change', function(event) {
  let idInput = event.target.getAttribute('id');
  let forLabel = todo.querySelector('[for='+ idInput +']');
  let valueLabel = forLabel.innerHTML;
  console.log('valueLabel: ', valueLabel);

  todoList.forEach(function(item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
  });
  
});


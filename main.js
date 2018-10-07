let current_id = 0;
let list = [];

//object todoItem

function TodoItem(name) {
  this.id = function () {
    current_id += 1;
    return current_id;
  }()
  this.name = name;
  this.completed = false;
  markAsCompleted = function () {
    this.completed = true;
  }
  // clearCompleted = function() {
  //   for (let i = 0; i < list.length; i++) {

  //   }
  // }
}

//add

document.getElementById('addtask').addEventListener('submit', function (e) {
  e.preventDefault();
  let addName = document.getElementById('new-item').value;
  let item = new TodoItem(addName);

  list.push(item);

  let li = document.createElement('li');
  li.className = "todoItem"
  li.setAttribute('data-id', item.id);


  let input = document.createElement('input');
  input.className = "toggle"
  input.setAttribute('type', 'checkbox');
  li.appendChild(input);

  let label = document.createElement('label');
  label.className = "list"
  label.innerText = item.name
  li.appendChild(label);

  let parent = document.getElementById('todoList');
  parent.appendChild(li);

  input.addEventListener('click', function (e) {
    let checkbox = e.target;
    let parent = checkbox.parentElement;
    if (checkbox.checked) {
      parent.querySelector('.list').style.textDecoration = "line-through";
    } else {
      parent.querySelector('.list').style.textDecoration = "none";
    }
  });
});
var formEl = document.querySelector('#task-form');
var tasksToDoEl = document.querySelector('#tasks-to-do');

var taskFormHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;

    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // pick up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send data object as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement('li');
    listItemEl.className = 'task-item';

    // create div to hold task info and to list item
    var taskInfoEl = document.createElement('div');
    // give it a class name
    taskInfoEl.className = 'task-info';
    // add html content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    // add div content to the list item 
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener('submit', taskFormHandler);

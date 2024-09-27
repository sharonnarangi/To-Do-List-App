const inputBox =  document.getElementById('input box')
const taskContainer = document.getElementById('task-container')

function addTask(){
    if( inputBox.value  === ''){
        alert('Please enter a task');
    }
       else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
       }
}
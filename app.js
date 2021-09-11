var taskInput = document.getElementById('task-input');
var taskAdd = document.getElementById('task-add');

taskAdd.addEventListener('click',addTaskFunc);
var count = 0;
function addTaskFunc(){
    if(taskInput.value.length > 0){
        count++;
        var taskList = document.getElementById('show-tasks');
        var a = document.createElement('div');
        a.classList.add('hero');

        //input-display section
        var task = document.createElement('span');
        task.classList.add('nice');
        task.innerText = taskInput.value;
        a.appendChild(task)
        //TRASH BUTTON
        var trash = document.createElement('button');
        trash.classList.add('trash-btn');
        trash.setAttribute('id','tr-btn');
        trash.innerHTML = '<i class="fas fa-trash"></i>';
        a.appendChild(trash);

        //COMPLETED BUTTON
        var cpmltd = document.createElement('button');
        cpmltd.classList.add('cpmltd-btn');
        cpmltd.setAttribute('id','cmltd-btn');
        cpmltd.innerHTML = '<i class="fas fa-check"></i>';
        a.appendChild(cpmltd);


        taskList.appendChild(a);
        taskInput.value = '';
    }
}

var options = document.getElementById('show-tasks');

options.addEventListener('click',optionsFunc);

function optionsFunc(e){
    const item = e.target;

    //DEL
    if(item.classList[0] === 'trash-btn'){
        item.parentElement.remove();
    }
    if(item.classList[0] === 'cpmltd-btn'){
        var parEl = item.parentElement;
        parEl.classList.toggle('cmtd');
    }
}


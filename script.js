const arr = [];
var count=0;
function addNewTask() {
  let item = document.getElementById("new-task").value;
  arr.push({ checkbox: "false", item: item });
  let todo_item=additem_todo(arr, "",count);
  console.log(arr);
  document.getElementById("incomplete-tasks").innerHTML=todo_item;
  count++;
}
function additem_todo(arr, html,index) {
  arr.map((e) => {
    html += `<li><input id="todoinput" onclick="checkboxval()" type="checkbox" value='${e.checkbox}'><label>${e.item}</label><input id="inputforEdit${index}" type="text"><button id='${index}' onclick="edit(${index})" class="edit">Edit</button><button id='${index}' onclick="delete(${index})" class="delete">Delete</button></li>`;
  });
  
  return html;
}
function checkboxval(){
    let val=document.getElementById("todoinput").value;
    if(val=='false'){
        document.getElementById("todoinput").value='true'; 

    }
    else{
        document.getElementById("todoinput").value='false';  
    }
}
function edit(index){
    document.getElementById("new-task-btn").style.display="none";
    document.getElementById("edit-task-btn").style.display="block";
    console.log( index);
    let item = document.getElementById("new-task").value;
   arr[index].name=item;
    let to_item=additem_todo(arr, "",index);
    
  document.getElementById("incomplete-tasks").innerHTML=to_item;
  
}





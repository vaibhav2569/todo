const arr = [];
const completedArr=[];
var todo_item="";
// global variable to get index on edit button
var idx="";
function addNewTask() {
  let item = document.getElementById("new-task").value;
  if(validation(item,"err_input")){cleardata(); return};
  arr.push({ checkbox: "false", item: item });
   todo_item=display(arr, "");
  document.getElementById("incomplete-tasks").innerHTML=todo_item;

  
}
// display todo
function display(arr, html) {
  arr.map((e,index) => {
    html += `<li><input id="todoinput" onclick='checkboxval(${index})' type="checkbox" value='${e.checkbox}'><label>${e.item}</label><input id="inputforEdit${index}" type="text"><button id='${index}' onclick='edit(${index})' class="edit">Edit</button><button id='${index}' onclick='delte(${index})' class="delete">Delete</button></li>`;
  });
  
  return html;
}

function edit(index){
    // debugger;
    document.getElementById("new-task-btn").style.display="none";
    document.getElementById("edit-task-btn").style.display="block";
    idx=index; 
}
function validation(inputText,msgId)
{
  if (inputText == "" || inputText < 0) {
    if (inputText == "") {
      document.getElementById(msgId).innerHTML=`** this Field is empty`;
    } else {
      document.getElementById(msgId).innerHTML=`**this Field cannot be negative`;
    }
    return 1;
  } else {
    document.getElementById(msgId).innerHTML=``;
    return 0;
  }
}
function cleardata(){
  document.getElementById("new-task").value="";
}
function delte(index){
  
  let tbledata = "";
  console.log(index);
  var filt = arr.filter((e, i) => {
    if (index == i) {
      arr.splice(i, 1);
      tbledata = display(arr, "");
    }
  });
  
  document.getElementById("incomplete-tasks").innerHTML=tbledata;
}
function updateEdit(){

  let todoitem=document.getElementById("new-task").value;
    console.log(todoitem);
    
if(validation(todoitem,"err_input")){cleardata(); return};
    let lstdata = "";
    let filt = [];
    arr.map((e, i) => {
      if (idx == i) {
        filt.push({ checkbox: "false",item:todoitem});
      }
    });
    
    filt.map((e) => (arr[idx] = e));
    console.log(arr);
    lstdata = display(arr, "");
    document.getElementById("incomplete-tasks").innerHTML=lstdata;
    document.getElementById("new-task-btn").style.display="block";
    document.getElementById("edit-task-btn").style.display="none";

}
function checkboxval(index){
  // bydefault checkbox-val is false  , if checkboxval is getting called it means checkbox is clicked
let val=document.getElementById("todoinput").value;
if(val=='false')
{
arr.map((e,i)=>{
  if(i==index)
  {
    completedArr.push({checkbox:"true",item:e.item});
    delte(index);
  }
})
// gone from todo
let arrAfterRemove=display(arr,"");
document.getElementById("incomplete-tasks").innerHTML=arrAfterRemove;
// come to completed
let html=displayCompleted(completedArr,"");
document.getElementById("completed-tasks").innerHTML=html;
}
else if(val=='true')
{
  arr.map((e,i)=>{
    if(i==index)
    {
      arr.push({checkbox:"false",item:e.item});
      delte2(index);
    }
  }) 
  // gone from completed
  let compArr_afterRemove=displayCompleted(completedArr,"");
  document.getElementById("completed-tasks").innerHTML=compArr_afterRemove;
  // come to todo
  let cumtodo=display(arr,"");
  document.getElementById("incomplete-tasks").innerHTML=cumtodo;


}


}
function displayCompleted(comparr,html){
  comparr.map((e)=>{
    html+=` <li><input type="checkbox" checked><label>${e.item}</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>`
  })
  return html;
}
function delte2(index)
{
  let tbledata = "";
  console.log(index);
  var filt = completedArr.filter((e, i) => {
    if (index == i) {
      completedArr.splice(i, 1);
      tbledata = displayCompleted(completedArr, "");
    }
  });
  
  document.getElementById("completed-tasks").innerHTML=tbledata;
}





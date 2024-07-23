import React,{useState} from 'react';
import myi from './assets/meme.jpeg';
function But(index){
    const [task,setTask] = useState(["wake up ","eat"]);
    const [newTask,setNewTask] = useState("");
function inputchange(event){
    setNewTask(event.target.value);
}
function addTask(){
    if(newTask.trim() !== ""){
setTask(t=>[...t,newTask]);
setNewTask("");
    }
}
function del(index){
const uptask = task.filter((_,i) => i !== index );
setTask(uptask);
}
function move(index){
if(index>0){
    const mv = [...task];
    [mv[index],mv[index-1]]=[mv[index-1],mv[index]];
    setTask(mv);
}
}
function demove(index){
    if(index<task.length-1){
        const mi = [...task];
        [mi[index],mi[index+1]]=[mi[index+1],mi[index]];
        setTask(mi);
    }
}

return(
    <>
    <div className="todo" >
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder='enter task' value ={newTask} onChange={inputchange}/>
        <button  className="addbut "onClick={addTask}>
            Add Task
        </button> 
        



        </div>
        <ol>
        {task.map((task,index) => 
        <li key={index}>
            <span className="text">
            {task}
            </span>
           <button className='delbtn'onClick={()=>del(index)}>
              Delete
           </button>
           <button className='move'onClick={()=>move(index)}>
              Move up
           </button>
           <button className='demove'onClick={()=>demove(index)}>
              Move Down
           </button> 
        </li>
        )}
        </ol>
        <footer>
        <div>
        <img src={myi} alt="meme"/>
        </div>
        </footer>
    </div>
    </>
)
}
export default But
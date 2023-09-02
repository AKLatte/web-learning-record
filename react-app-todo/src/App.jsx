import React, { useState, useEffect } from 'react';
import "./style.css";
import {InputTask} from "./components/InputTask";
import { IncompleteTask } from "./components/IncompleteTask";
import { CompleteTask } from "./components/CompleteTask";

export const App = () => {

  const [inputTask, setInputTask] = useState("");
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let dayOfWeek = d.getDay();

      const dayname = ['日', '月', '火', '水', '木', '金', '土']
      setDate(year + "/" + month + "/" + day + '(' + dayname[dayOfWeek] + ')');
    })
  }, [])
  
  
  const onChangeTask = (event) => setInputTask(event.target.value);

  const addTask = () => {
    if (inputTask !== "") {
      const newTodos = [...incompleteTasks, inputTask];
      setIncompleteTasks(newTodos);
      setInputTask("");
    }
  }
  
  const completeTask = (index) => {
    const newIncompleteTasks = [...incompleteTasks];
    const newCompleteTasks = [...completeTasks, newIncompleteTasks[index]]
  
    newIncompleteTasks.splice(index, 1);
  
    setIncompleteTasks(newIncompleteTasks);
    setCompleteTasks(newCompleteTasks);
  }
  
  const deleteTask = (index) => {
    const newTodos = [...incompleteTasks];
    newTodos.splice(index, 1);
    setIncompleteTasks(newTodos);
  }

  const backTask = (index) => {
    const newCompleteTasks = [...completeTasks]
    const newIncompleteTasks = [...incompleteTasks, completeTasks[index]]

    newCompleteTasks.splice(index, 1);
    setIncompleteTasks(newIncompleteTasks);
    setCompleteTasks(newCompleteTasks)  
  }


  return (
    <>
      <InputTask inputTask={inputTask} onClick={addTask} onChange={onChangeTask} />
      <IncompleteTask incompleteTasks={incompleteTasks} completeTask={completeTask} deleteTask={deleteTask} date={date}/>
      <CompleteTask completeTasks={completeTasks} backTask={backTask} date={date}/>
    </>
  );
}
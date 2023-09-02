import React from "react";

export const CompleteTask = (props) => {
  const {completeTasks, backTask, date} = props;
  return (
    <div class="complete-area">
      <p>完了したタスク</p>
      <ul>
        {completeTasks.map((completeTask, index) => {
          return (
            <div key={completeTask} class="list-row">
              <li contenteditable="true">{completeTask} {date}</li>
              <button onClick={() => backTask(index)}>戻す</button>
            </div>
            )
        })}
      </ul>
    </div>
  );
}
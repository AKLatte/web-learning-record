import React from 'react';

export const IncompleteTask = (props) => {
  const {incompleteTasks, completeTask, deleteTask, date} = props;
  return (
    <>
      <div className="incomplete-area">
        <p>未完了のタスク</p>
        <ul>
          {incompleteTasks.map((incompleteTask, index) => {
            return (
              <div key={incompleteTask} className="list-row">
                <li contenteditable="true">{incompleteTask}</li>
                <button onClick={() => completeTask(index)}>完了</button>
                <button onClick={() => deleteTask(index)}>削除</button>
                <p>{date}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
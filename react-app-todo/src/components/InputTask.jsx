import React from 'react';

export const InputTask = (props) => {
  const {inputTask, onClick, onChange} = props;
  return (
    <>
      <div className="input-area">
        <input placeholder="タスクの入力" value={inputTask} onChange={onChange}/>
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
}
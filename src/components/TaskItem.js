import React from 'react';

const TaskItem = ({ task, deleteTask, editTask }) => {
  return (
    <div className="bg-white p-2 rounded shadow-lg mr-[1000px]">
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <div className="mt-2">
        <button className="bg-sky-500 text-white px-2 py-1 rounded mr-2" onClick={() => editTask(task)}>Edit</button>
        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;

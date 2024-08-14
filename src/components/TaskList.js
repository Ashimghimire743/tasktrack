import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500"></p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
        ))
      )}
    </div>
  );
};

export default TaskList;

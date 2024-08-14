import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, updateTask, editingTask, setEditingTask }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask({ title: '', description: '' });
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      updateTask(task);
      setEditingTask(null);
    } else {
      addTask(task);
    }
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <input 
          type="text" 
          className="w-[300px] px-3 py-2 border rounded" 
          placeholder="Task Title" 
          value={task.title} 
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <textarea 
          className="w-[400px] px-3 py-2 border rounded" 
          placeholder="Task Description" 
          value={task.description} 
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <button type="submit" className="w-64 bg-green-500 text-white py-2 rounded mb-4">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;

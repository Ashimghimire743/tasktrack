import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">TaskTrack</h1>
      <TaskForm addTask={addTask} updateTask={updateTask} editingTask={editingTask} setEditingTask={setEditingTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;

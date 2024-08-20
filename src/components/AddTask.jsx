import React from "react";

const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTask = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updatedTask);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: task.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      if (newTask.name) {
        setTasklist([...tasklist, newTask]);
        setTask({});
      } else {
        alert("enter the task name");
      }
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add task"
          name="task"
          autoComplete="off"
          maxLength="25"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "update" : "add"}</button>
      </form>
    </section>
  );
};

export default AddTask;

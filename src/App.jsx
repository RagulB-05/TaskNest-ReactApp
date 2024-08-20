import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App ">
      <Header />
      <div className="container">
        <AddTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
      </div>
    </div>
  );
}

export default App;

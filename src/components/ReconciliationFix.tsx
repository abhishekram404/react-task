import React, { useState } from "react";

type Props = {};

const ReconciliationFix = (props: Props) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Learn to code",
    },
    {
      id: 2,
      name: "Read books",
    },
    {
      id: 3,
      name: "Play games",
    },
  ]);

  const addTaskToLast = () => {
    setTasks([
      ...tasks,
      {
        id: 4,
        name: "Added to last",
      },
    ]);
  };
  const addTaskToFirst = () => {
    setTasks([
      {
        id: 5,
        name: "Added to first",
      },
      ...tasks,
    ]);
  };

  //    below we are using id as the key of li elements
  // if we used the index of the elements as key
  // then it would re-render the whole list if we add new item to the beginning
  // but using the unique id attribute as key helps react uniquely identify the elements and helps differentiate which element has changed

  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li
            //   key={index}  this causes whole list to re-render while adding new element to first
            key={task.id}
          >
            {task.name}
          </li>
        ))}
      </ul>

      <button onClick={addTaskToLast}>Add another task to the last</button>
      <button onClick={addTaskToFirst}>Add another task to the first</button>
    </>
  );
};

export default ReconciliationFix;

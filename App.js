import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import Button from "./src/components/Button";
import Task from "./src/components/Task";
import styles from "./Global";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");



  useEffect(() => {
    const initialTask = [
      { text: "atividade 1", completed: false },
      { text: "atividade 2", completed: true },
      { text: "atividade 3", completed: true },
    ];
    setTasks(initialTask);

  }, []);

  function addNewTask() {
    setTasks([...tasks, { text: newTask, completed: false }]);
  }

  function toggleTask(index) {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <TextInput value={newTask} style={styles.input} onChangeText={(text) => setNewTask(text)} />
      <Button title="Adicionar" onPress={() => addNewTask()} />
      <View style={styles.listContainer}>
        {tasks.map((task, index) => (
          <Task
            key={task.text}
            isChecked={task.completed}
            label={task.text}
            onPress={() => toggleTask(index)} />
        ))}
      </View>
    </View>);
}

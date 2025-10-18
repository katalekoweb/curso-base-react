import React, { useState } from "react";

// tipos em typecript
// as propriedades em typescript podem ser variaveis: string, int..., children, funcoes
interface IInputAddProps {
    onAdd(value: string): void
}

const InputAdd = (props: IInputAddProps) => {
  const [newTask, setNewTask] = useState("");

const handleAdd = () => {
    props.onAdd(newTask)
    setNewTask("")
}

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button
        onClick={handleAdd}
      >
        Adicionar
      </button>
    </div>
  );
};

export default InputAdd;

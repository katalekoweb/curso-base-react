import React, { useRef, useState } from "react";
import "./InputAdd.css";

// tipos em typecript
// as propriedades em typescript podem ser variaveis: string, int..., children, funcoes
interface IInputAddProps {
  onAdd(value: string): void;
}

const InputAdd = (props: IInputAddProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim()) {
      props.onAdd(newTask.trim());
      setNewTask("");
      inputRef.current?.focus()
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="input-add-container">
      <form
        className="input-add-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <input
          type="text"
          ref={inputRef}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua nova tarefa..."
          className="input-add-input"
          required
        />

        <button
          type="submit"
          className="input-add-button"
          disabled={!newTask.trim()}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default InputAdd;

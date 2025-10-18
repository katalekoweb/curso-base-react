import React from "react";

interface ITodoItem {
  id: number;
  label: string;
  complete: boolean;
  onMarkMade(id: number): void
  onDelete(id: number): void
}

const TodoItem = ({id, label, complete, onMarkMade, onDelete}: ITodoItem) => {
  return (
    <li key={id}>
      <span>{label}</span>

      {complete ? "Concluido" : ""}

      <button
        onClick={() =>
          onMarkMade(id)
        }
      >
        Concluir
      </button>
      <button onClick={() => onDelete(id)}>
        Excluir
      </button>
    </li>
  );
};

export default TodoItem;

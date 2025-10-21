import React from "react";
import "./TodoItem.css";

interface ITodoItem {
  id: number;
  label: string;
  complete: boolean;
  onMarkMade(id: number): void;
  onDelete(id: number): void;
}

const TodoItem = ({ id, label, complete, onMarkMade, onDelete }: ITodoItem) => {
  return (
    <li key={id}>
      <div className="item">
        <div>
          <span>{label}</span>

          {complete ? "Concluido" : ""}
        </div>

        <div className="actions">
          <button onClick={() => onMarkMade(id)}>Concluir</button>
          <button onClick={() => onDelete(id)}>Excluir</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;

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
          {complete ? "✅" : ""}
        </div>

        <div className="actions">
          <button className="btn"  onClick={() => onMarkMade(id)}>Concluir</button>
          <button className="btnDanger" onClick={() => onDelete(id)}>Excluir</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;

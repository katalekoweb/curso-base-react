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
    <li className={`item ${complete ? 'completed' : ''}`}>
      <span className="label">
        {label}
      </span>

      <div className="actions">
        <button
          className="btn"
          onClick={() => onMarkMade(id)}
          title={complete ? "Marcar como pendente" : "Marcar como concluída"}
        >
          {complete ? "Desfazer" : "Concluir"}
        </button>
        <button
          className="btnDanger"
          onClick={() => onDelete(id)}
          title="Excluir tarefa"
        >
          Excluir
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

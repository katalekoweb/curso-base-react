import React from 'react'
import './List.css'

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  const hasChildren = React.Children.count(children) > 0;

  if (!hasChildren) {
    return (
      <div className="todo-list-empty">
        <div className="empty-icon">📝</div>
        <div className="empty-title">Nenhuma tarefa ainda</div>
        <div className="empty-description">Adicione sua primeira tarefa para começar!</div>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {children}
    </ul>
  )
}

export default List

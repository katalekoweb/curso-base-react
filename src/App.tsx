import { useState } from "react";
import InputAdd from "./Components/InputAdd";
import TodoItem from "./Components/TodoItem";

export const App = () => {
  const [list, setList] = useState([
    { id: 1, label: "Fazer matabicho", complete: false },
    { id: 2, label: "Fazer almosso", complete: false },
    { id: 3, label: "Fazer a janta", complete: false },
  ]); // desestruturar a tupla

  const handleAdd = (value: string) => {
    setList([...list, { id: list.length + 1, complete: false, label: value }]);
  };

  const handleMarkAsMade = (id: number) => {
    setList([
      ...list.map((item) => ({
        ...item,
        complete: item.id === id ? !item.complete : item.complete,
      })),
    ]);
  };

  const handleDelete = (id: number) => {
    console.log(id);    
    setList([...list.filter(item => id != item.id)])
  }

  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <ol>
        {list.map((listItem, index) => (
          <TodoItem
            key={index}
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}
            onMarkMade={(id) => handleMarkAsMade(id)}
            onDelete={handleDelete}
          />
        ))}
      </ol>
    </div>
  );
};

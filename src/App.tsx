import { useState } from "react";
import InputAdd from "./Components/InputAdd";

export const App = () => {
  const [list, setList] = useState([
    { id: 1, label: "Fazer matabicho", complete: false },
    { id: 2, label: "Fazer almosso", complete: false },
    { id: 3, label: "Fazer a janta", complete: false },
  ]); // desestruturar a tupla

  const handleAdd = (value: string) => {
    setList([...list, { id: list.length + 1, complete: false, label: value }]);
  };

  return (
    <div>
      
      <InputAdd onAdd={handleAdd} />

      <ol>
        {list.map((listItem, index) => (
          <li key={index}>
            <span>{listItem.label}</span>

            {listItem.complete ? "Concluido" : ""}

            <button
              onClick={() =>
                setList([
                  ...list.map((item) => ({
                    ...item,
                    complete:
                      item.id === listItem.id ? !item.complete : item.complete,
                  })),
                ])
              }
            >
              Concluir
            </button>
            <button
              onClick={() =>
                setList([...list.filter((item) => item.id !== listItem.id)])
              }
            >
              Excluir
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

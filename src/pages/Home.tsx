import React, { useEffect, useState } from 'react'
import { TodoAPI, type ITodo } from '../shared/services/api/TodoApi';
import InputAdd from '../Components/InputAdd';
import List from '../Components/List';
import TodoItem from '../Components/TodoItem';

const Home = () => {
  const [list, setList] = useState<ITodo[]>([]); // desestruturar a tupla

  

  useEffect(() => {
    // console.log("Effect");   
    TodoAPI.getAll().then(data => setList(data)) 
  }, [])

  const handleAdd = (value: string) => {
    TodoAPI.create({label:value, complete: false}).then((data) => {
      // get all data
      setList([...list, data])
    })
  };

  const handleMarkAsMade = (id: number) => {

    const todo = list.find((item) => item.id == id)   

    const status = todo ? !todo.complete : true

    TodoAPI.updateById(String(id), {complete: status}).then(() => {
      setList([
      ...list.map((item) => ({
        ...item,
        complete: item.id == id ? !item.complete : item.complete,
      })),
    ]);
    })
  };

  const handleDelete = (id: number) => {
    console.log(id);    
    setList([...list.filter(item => id != item.id)])
  }

  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <List>
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
      </List>
    </div>
  );
}

export default Home

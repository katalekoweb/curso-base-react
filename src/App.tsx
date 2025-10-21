import { useEffect, useState } from "react";
import InputAdd from "./Components/InputAdd";
import TodoItem from "./Components/TodoItem";
import List from "./Components/List";
import { TodoAPI, type ITodo } from "./shared/services/api/TodoApi";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";

// TodoAPI.getAll().then(data => console.log('1', data))
// TodoAPI.create({label: "Fazer almoco", complete: false})
// TodoAPI.create({label: "Fazer lanche", complete: false})
// TodoAPI.getAll().then(data => console.log('2', data))
// TodoAPI.updateById('1', {label: "Fazer janta", complete: false})
// TodoAPI.getAll().then(data => console.log('3', data))
// TodoAPI.deleteteById('1')
// TodoAPI.getAll().then(data => console.log('4', data))

export const App = () => {

  return (
    <AppLayout>
      <Home />
    </AppLayout>
  )
};

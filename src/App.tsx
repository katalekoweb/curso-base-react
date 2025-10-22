import { useEffect, useState } from "react";
import InputAdd from "./Components/InputAdd";
import TodoItem from "./Components/TodoItem";
import List from "./Components/List";
import { TodoAPI, type ITodo } from "./shared/services/api/TodoApi";
import Home from "./pages/Home";
import AppLayout from "./shared/layout/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import About from "./pages/About";
import Detail from "./pages/Detail";

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
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

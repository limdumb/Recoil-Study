"use client";

import { todoListState } from "@/recoil/atom";
import { useRecoilValue } from "recoil";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";
import styled from "styled-components";
import { filteredTodoListState } from "@/recoil/selector";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListState";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Home() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <Container>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((item, i) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </Container>
  );
}

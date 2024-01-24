"use client";

import { todoListState } from "@/recoil/atom";
import { useRecoilValue } from "recoil";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
  return (
    <Container>
      <TodoItemCreator />
      {todoList.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </Container>
  );
}

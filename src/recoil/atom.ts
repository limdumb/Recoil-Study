import { atom } from "recoil";
export interface TodoListType {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<TodoListType[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

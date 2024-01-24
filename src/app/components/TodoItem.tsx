import { TodoListType, todoListState } from "@/recoil/atom";
import { ChangeEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

interface TodoItemProps {
  item: TodoListType;
}

/*
  TodoItem 컴포넌트는 todo 리스트의 값을 표시하는 동시에 텍스트를 변경하고 항목을 삭제할 수 있다. 
  우리는 todoListState를 읽고 항목 텍스트를 업데이트하고, 완료된 것으로 표시하고, 삭제하는 데
  사용하는 setter 함수를 얻기 위해 useRecoilState()를 사용한다.
  1월 24일 : https://recoiljs.org/ko/docs/basic-tutorial/atoms TodoItem까지 진행함
*/

export default function TodoItem(props: TodoItemProps) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === props.item);

  const editItemText = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      text: e.target.value,
    });

    setTodoList(newList);
  };

  const replaceItemAtIndex = (
    arr: TodoListType[],
    i: number,
    value: TodoListType
  ) => {
    return [...arr.slice(0, i), value, ...arr.slice(i + 1)];
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      isComplete: !props.item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  const removeItemAtIndex = (arr: TodoListType[], i: number) => {
    return [...arr.slice(0, i), ...arr.slice(i + 1)];
  };

  return (
    <div>
      <input type="text" value={props.item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={props.item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

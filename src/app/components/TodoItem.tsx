import { TodoListType, todoListState } from "@/recoil/atom";
import { useRecoilState } from "recoil";

interface TodoItemProps {
  item: TodoListType;
}

/*
  TodoItem 컴포넌트는 todo 리스트의 값을 표시하는 동시에 텍스트를 변경하고 항목을 삭제할 수 있다. 
  우리는 todoListState를 읽고 항목 텍스트를 업데이트하고, 완료된 것으로 표시하고, 삭제하는 데
  사용하는 setter 함수를 얻기 위해 useRecoilState()를 사용한다.
  1월 24일 : https://recoiljs.org/ko/docs/basic-tutorial/atoms TodoItem까지 진행함F
*/

export default function TodoItem(props: TodoItemProps) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return <></>;
}

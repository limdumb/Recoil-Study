import { todoListState } from "@/recoil/atom";
import { useState, ChangeEvent } from "react";
import { useSetRecoilState } from "recoil";
import getId from "../util/getId";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((prev) => [
      ...prev,
      { id: getId(), text: inputValue, isComplete: false },
    ]);
    setInputValue(""); //input 값 초기화
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

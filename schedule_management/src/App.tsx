import React, { useState, useRef, useCallback} from 'react';
import './App.css';
import TodoTemplate from './component/TodoTemplate';
import TodoList from './component/TodoList';
import TodoInsert from './component/TodoInsert';
import TodoListItem from './component/TodoListItem';

interface State {
  id: number;
  text: string; 
  checked: boolean;
}
function App() {
  const [todos, setTodos] = useState<State[]>([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ])
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text:string) => {
      const todo = {
        id: nextId.current,
        text,
        checked:false,
      }
      setTodos(todos.concat(todo)); 
      nextId.current += 1;
    },[todos]
  )

  const onRemove = useCallback(
    (id:number) => {
      setTodos(todos.filter(todos => todos.id !== id));
    },[todos]
  )
  const onToggle = useCallback(
    (id:number) => {
      setTodos(
      todos.map(todo =>
        todo.id===id ? {...todo, checked: !todo.checked} : todo,
        ),
      )
    },[todos]
  )
  return (
    <div>
      <TodoTemplate >
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>  

      </TodoTemplate>
    </div>
  );
}

export default App;

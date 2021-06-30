import React from 'react'
import TodoListItem from './TodoListItem'
interface State {
    id: number;
    text: string;
    checked: boolean;
}


interface TodoListProps{
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
    todos: State[];
}

function TodoList(props: TodoListProps) {
    const {todos, onRemove, onToggle} = props;
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} id={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}
export default TodoList;
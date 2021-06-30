import React from 'react'
import cn from 'classnames'
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md'
interface State{
    id:number,
    text: string,
    checked: boolean,
  } 

interface TodoListItemProps{
    todo:State;
    id:number;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}
function TodoListItem(props: TodoListItemProps){
    const {todo,onRemove,id, onToggle} = props;  
    const {text, checked} = todo;

    function onClick(){
        onRemove(id);
    }
    return(
        <div className="TodoListItem">
        <div className={cn('checkbox', {checked})} onClick = {() => onToggle(IDBCursorWithValue)}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={onClick}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}
export default TodoListItem;
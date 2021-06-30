import React ,{useState, useCallback}from 'react'
import { MdAdd } from 'react-icons/md';

interface insertProps{
    onInsert:(text: string) => void;
}

function TodoInsert(props:insertProps) {
    const {onInsert} = props
    const [value,setValue] = useState('');

    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        console.log(e.target.value)
    },[]);
    const onSubmit = useCallback((e:React.FormEvent<HTMLFormElement>) => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    },[onInsert,value])

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input onChange={onChange} placeholder="할 일을 입력하세요" value={value}></input>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    )
}
export default TodoInsert;
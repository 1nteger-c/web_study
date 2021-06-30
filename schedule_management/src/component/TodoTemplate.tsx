import React from 'react'

interface templateProps{
    children:JSX.Element[]
}
function TodoTemplate(props:templateProps){
    return( 
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{props.children}</div>
        </div>
    )
}
export default TodoTemplate;
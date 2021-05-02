import React from 'react';

const Todo = props => {

    function deleteAnim() {
        let tdBlocks = document.querySelectorAll('.todo')
        let tdClose = document.querySelectorAll('.todo__close')
        tdClose.forEach(close => {
            close.addEventListener('click', () => {
                tdBlocks.forEach(block => {
                    if (block.getAttribute('datatype') == close.getAttribute('datatype')){
                        block.style.animation = 'delete'
                        block.style.animationDuration = '1s'
                        document.body.style.overflowX = 'hidden'
                    }
                })
          })
        })
    }

    deleteAnim()

    return (
        props.todos.map(todo => (
            <div className="todo" key={todo.id} onDoubleClick={() => props.todoComplite(todo.id)} datatype={todo.id}>
                    <div>
                        <h1 className="todo__title">
                            {todo.title}
                            <button className="todo__close" datatype={todo.id} onClick={() => props.removeTodo(todo.id)}>X</button>
                        </h1>
                        <p className="todo__text">
                            {todo.text}
                        </p>
                    </div>
                    <div className="todo__footer">
                        <p>{todo.date}</p>
                        <span onClick={() => props.todoComplite(todo.id)}>{todo.isComplite ? 'Выполнено' : 'Не выполнено' } </span>
                    </div>
                </div>
        ))
    );
}

export default Todo;

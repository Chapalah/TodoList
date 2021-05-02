import React from 'react'
import Todo from './Todo'
import ModalAddTodo from './ModalAddTodo'
import Fillters from './Fillters'
const TodoList = (props) => {

    const openModal = () => {
        let modal = document.querySelector('.modal')

        if (!modal.classList.contains('open')) {
            modal.classList.add('open')
            document.body.style.overflow = 'hidden'
        }
    }



    return (
        <div className="todos container" >
            <div className="todos__sidebar">
                <button className="todos__btn btn"onClick={() => openModal()}>Добавить</button>
                <ModalAddTodo todos={props.todos} addTodo={props.addTodo}/>
                <Fillters 
                    clearFiller={props.clearFiller}
                    handleFillter={props.handleFillter}
                />
            </div>
            <div className="todos__list">
                <Todo 
                    todos={props.todos} 
                    removeTodo={props.deleteTodo}
                    todoComplite={props.todoComplite}
                />
            </div>
        </div>
    );
}

export default TodoList;  

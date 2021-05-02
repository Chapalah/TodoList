import React from 'react';

const ModalAddTodo = (props) => {

    function closeModal() {
        let modalContent = document.querySelector('.modal__content')
        modalContent.classList.add('closing')
        // modalContent.style.animation = 'close'
        // modalContent.style.animationDuration = '1s'
        setTimeout(() => {
            document.querySelector('.modal').classList.remove('open')
            modalContent.classList.remove('closing')
        }, 490)
    }

    const addTodo = () => {
        var date = new Date()
        let todo = {
            title: document.getElementById('title').value,
            text: document.getElementById('text').value,
            date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            id: 0,
            isComplite: false
        }
        props.addTodo(todo)
        closeModal()
        document.body.style.overflow = 'auto'
    }

    return (
        <div className='modal'>
            <div className="modal__overlay" onDoubleClick={() => closeModal()}>
                <div className="modal__content">
                    <div className="modal__close" onClick={() => closeModal()}>X</div>
                    <div className="form">
                        <h2 className="form__title">
                            Создание заметки
                        </h2>
                        <div className="form__body"> 
                            <input className="form__input" id="title" placeholder="Название заметки"  required/>
                            <textarea className="form__input " id="text" placeholder="Содержание заметки" required></textarea>
                        </div>
                        <div className="form__footer">
                            <button className="btn form__send" onClick={() => addTodo()}/*onClick={() => addTodo()}*/>
                                Добавить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAddTodo;

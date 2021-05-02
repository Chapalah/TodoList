import React,{useState} from 'react'
import './style.css'
import TodoList from './components/TodoList'
import Header from './components/Header'

const App = () => {

  const GetTodos = () => {
    let todos = [] 
    if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'))
        for (let i = 0; i < todos.length; i++)
            todos[i].id = i
    }
    localStorage.setItem('todos', JSON.stringify(todos))
    return todos
  }

  const [todos, setTodos] = useState(GetTodos())

  function deleteTodo(id) {
    setTimeout(() => {
      let td = []
      console.log('id', id);
      todos.forEach(todo => {
        if (todo.id !== id)
          td.push(todo)
      })
      localStorage.setItem('todos', JSON.stringify(td))
      setTodos(td)
    }, 990)
    console.log(todos)
  }

  function addTodo(todo) {
    let td = GetTodos()
    td.push(todo)
    localStorage.setItem('todos', JSON.stringify(td))
    setTodos(GetTodos())
  }

  function handleFillter(fillter) {
    let td = GetTodos()
    let showTodos = []
    var date = new Date()
    td.forEach(todo => {
      let todoDate = todo.date.split('.')
        if (fillter.name === 'Сегодня' && todoDate[0] === `${date.getDate()}`)
          showTodos.push(todo)
        if (fillter.name === 'Вчера' && todoDate[0] === `${date.getDate() - 1}`)
          showTodos.push(todo)
        if (fillter.name === 'Выполненные' && todo.isComplite)
          showTodos.push(todo)
        if (fillter.name === 'Не выполненные' && !todo.isComplite)
          showTodos.push(todo)
    })
    setTodos(showTodos)
  }

  function clearFiller() {
    setTodos(GetTodos())
  }

  function todoComplite(id) {
    let td = GetTodos()
    td.forEach(todo => {
      if (todo.id === id)
        todo.isComplite = !todo.isComplite
    })
    localStorage.setItem('todos', JSON.stringify(td))
    setTodos(td)
  }

  return (
    <div className="page">
      <Header/>
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo}
        addTodo={addTodo}
        handleFillter={handleFillter}
        clearFiller={clearFiller}
        todoComplite={todoComplite}
      />
    </div>
  );
}


export default App;

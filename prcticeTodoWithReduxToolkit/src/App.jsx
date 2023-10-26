
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <>
        <h1 className='text-green-500 text-center my-10'>Todo App</h1>
        <TodoForm />
        <TodoItem />
    </>
  )
}

export default App

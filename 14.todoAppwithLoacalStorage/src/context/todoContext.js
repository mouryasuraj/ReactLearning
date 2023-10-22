import { createContext, useContext } from "react";


// function to createCOntext
export const todoContext = createContext({
    todos:[
        {
            id:1,
            todoTitle: 'To do msd',
            completed:false
        }
    ],
    addTodo:(todoTitle)=>{},
    updateTodo:(id, todoTitle) =>{},
    deleteTodo:(id) =>{},
    toggleComplete:(id) =>{}
})



// function to create todoCOntext Provider
export const TodoContextProvider = todoContext.Provider;



// custom hooks
export const useTodo = () =>{
    return useContext(todoContext)
}
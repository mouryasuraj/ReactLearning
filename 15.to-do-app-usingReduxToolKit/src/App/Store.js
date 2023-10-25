// PRocess to setup store
/* 
First import configureStore from reduxToolkit
and then create variable store with export and assinged it configureStore

and then create slice. Fisrt create feature folder and then create one folder and named what is you feature going to be and then create file with todoSlice.jsx and in this file import createSlice() and nanoid() from redux/toolkit and then create a initialstate and put some value in it and then  create a sclice with fucntion createSlice and key name:'todo', initialState, reducer in reducer key you can add variable and functions and in Fucntion two thing received as a parameter (state, action)
()

*/



import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/Todo/todoSlice'


export const store = configureStore({
    reducer : todoReducer
})
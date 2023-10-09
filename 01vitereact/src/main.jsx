import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// We can write functions directly in main file
function MyApp(){
  return(
    <div>
      <h1>I am My App Function running in main.jsx file</h1>
    </div>
  )
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <MyApp />        {/*This is valid syntax and its running*/}
//     {/* As we know MyApp is a function and we can wrtie function like this but in StrictMode it will not work. So for best practice we have to write the ablove systax*/}
//     {/* MyApp() */}
//   </React.StrictMode>,
// )

// If we pass reactElement in render method then it will not work because those who created render method they expect something different paremeters as compare to have properties in reactElement. Solution for this is given below
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
        class:'anchorTag'
    },
    innerHTML:'Visit Google.com '
}

// const anotherElem = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

// create anotherElement according to React so that it can work in render method
const variable = 'var'
const anotherElem = React.createElement(
  reactElement.type,
  {class:reactElement.props.class, href:reactElement.props.href, target:reactElement.props.target},
  reactElement.innerHTML,
  variable // after making tree react will add all the variable at the end of the object
)

// const anotherElem = React.createElement(
//   'button',
//   {class:'btn'},
//   'Click on me ',
//   variable // after making tree react will add all the variable at the end of the object
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   anotherElem
// )




ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

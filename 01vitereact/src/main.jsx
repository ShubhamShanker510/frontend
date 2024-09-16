import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }



const AnotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const ReactElement= createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'Click Me to Visit GOOGLE'
)



createRoot(document.getElementById('root')).render(

    <App/>
)

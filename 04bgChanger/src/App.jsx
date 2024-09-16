import {useState} from "react"

function App() {
  const [color,setColor]=useState('red')
  return (
   <div className="w-full h-screen duration-200" style={{ backgroundColor: color}} >
    <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 py-2 bg-white shadow-lg  > test</div>
   </div>
   
  )
}

export default App

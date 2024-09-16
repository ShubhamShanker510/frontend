import { useCallback, useEffect, useRef, useState } from "react";
// import './App.css'

function App() {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*(){}~+=_-";

    for (let index = 1; index <=length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPassword=useCallback(()=>{
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-800 justify-center">
      <h1 className="text-white text-center justify-center my-3">
        {" "}
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          readOnly
          placeholder="Password"
          ref={passRef}
        />
        <button
        onClick={copyPassword}
         className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLenght(e.target.value);
            }}
          />
          <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

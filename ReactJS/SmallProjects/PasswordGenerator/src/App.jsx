import { useCallback, useEffect, useState ,useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null) ; 

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  } , [password ,length ,charAllowed , numAllowed] )

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard =()=>{
    passwordRef.current?.select() ; 
    window.navigator.clipboard.writeText(password) ; 
  }

  return (
    <>
      <h1 className="text-4xl text-center p-6 text-white">
        Generate secure password
      </h1>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
          className="w-1/3 h-16 rounded-lg py-1 px-3 text-3xl"
        />
        <button onClick={copyPasswordToClipboard} className="bg-white h-16 w-16 rounded-lg ml-2 hover:bg-blue-200">
          <img src="/copy.png" alt="" className="p-2" />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <div className="bg-white w-[723px] h-[400px] flex-col rounded-lg ">
          <div className="text-4xl p-3 font-medium font-sans border-b-2 text-center">
            Customise your password
          </div>

          <div className="flex justify-evenly mt-10">
            <div className="mt-5 ml-5">
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="mx-2 px-6 py-2 border-2 rounded-md ">
                {length}
              </label>
            </div>

            <div>
              <div>
                <input
                  type="checkbox"
                  defaultChecked={numAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumAllowed((prev) => !prev);
                  }}
                />
                <label className="ml-2">numbers</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label className="ml-2">special characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

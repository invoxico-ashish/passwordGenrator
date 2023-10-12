import React, { useCallback, useEffect, useState, useRef } from "react";

function PasswordGen() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const passwodGenrator = useCallback(() => {
    let pass = "";
    let str = "fklihqruifgqetuifguhsuoghuoDJSEIOGXHUOEH9PQ8ETYG9M8XQTG";
    if (numberAllowed) str += "0123654789";
    if (charAllowed) str += "~!@#$%^&*()_+|{}[]?:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      console.log(pass);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwodGenrator();
  }, [length, numberAllowed, charAllowed, passwodGenrator]);
  return (
    <>
      <div className="mainGen">
        <div className="genrator">
          <div className="top">
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              readOnly
              placeholder="Password..."
              value={password}
              ref={passwordRef}
            />
            <button onClick={copyPassword} className="btn btn-dark">copy</button>
          </div>
          <div className="bottom">
            <div>
              <input
                type="range"
                id="points"
                name="points"
                min={6}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="">length: {length}</label>
            </div>

            <div>
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                className="form-check-input"
                defaultChecked={numberAllowed}
                onChange={(e) => setNumberAllowed(e.target.value)}
              />
              <label htmlFor="">number</label>
            </div>
            <div>
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                className="form-check-input"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="">charcter</label>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default PasswordGen;

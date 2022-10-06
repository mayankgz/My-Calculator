import React, { useState } from "react";
import Button from "./Button";

export default function CalculatorGrid() {

  const [text,setText]=useState("0");

  function clicked(event){
    console.log("call");
    if(text==="0"){
      setText(event.target.value);
    }
    else{
      setText(text+event.target.value);
    }
  }

  function clickedCA(){
    setText("0");
  }

  function clickedEqual(){
    setText("");
    setText(eval(text));
  }


  const buttons=[<Button classes="h-10 bg-slate-600 text-2xl" content="1" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="2" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="3" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="4" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="5" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="6" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="7" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="8" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="9" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="00" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-4xl" content="." function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="0" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-4xl" content="+" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-4xl" content="-" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-4xl" content="*" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="/" function={clicked}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="=" function={clickedEqual}/>,
  <Button classes="h-10 bg-slate-600 text-2xl" content="CA" function={clickedCA}/>]


  return (
    <>
      <div className="w-80 h-full bg-slate-400 rounded">
        <div className="m-2">
          <input value={text} 
            className="w-full rounded bg-white h-11"
            placeholder="  input"
            disabled
          ></input>
        </div>
        <div className="grid grid-cols-3 gap-2 m-2 text-center">
          {buttons.map(btn => (
            btn
          ))}
        </div>
      </div>
    </>
  );
}

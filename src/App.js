import { useState } from "react";


function App() {
  return (
    <div className="App">
   <TipCalculator />
    </div>
  );
}

function Label(){
  return <div>
    <h2>Tip Calculator</h2>
  </div>
}

function TipCalculator(){
const [bill, setBill] = useState("")
const [percentage1, SetPercentage1] = useState(0);
const [percentage2, SetPercentage2] = useState(0);

const tip = bill * ((percentage1 + percentage2) / 2  / 100);

function handleReset(){
  setBill('');
  SetPercentage1(0);
  SetPercentage2(0);
}

  return <div>
    <Label />
    <BillInput bill={bill} setBill={setBill}/>
    <SelectPercentage  percentage={percentage1} onSelect={SetPercentage1}>How Did you like our service?</SelectPercentage>
    <SelectPercentage percentage={percentage2} onSelect={SetPercentage2}>How did your friend like our service?</SelectPercentage>
   { bill > 0 && (
   <>
   <Output bill={bill} tip={tip}/>
    <Reset onReset={handleReset}/>
    </>
   )
  }

  </div>
}

function BillInput({bill,setBill}){
 return <div>
  <label> How Much Was The Bill? </label>
  <input type="text" placeholder="Bill Value" value={bill} onChange={(e)=> setBill(Number(e.target.value))} />
  </div>
}

function SelectPercentage({children,percentage,onSelect}){
  return <div>
    <label>{children}</label>
    <select
    value={percentage}
    onChange={(e)=>(onSelect(Number(e.target.value)))}>
      <option value={0}>Dissatisfied (0%)</option>
      <option value={5}>It was okay (5%)</option>
      <option value={10}>It was good (10%)</option>
      <option value={20}>Abseloutely amazing (20%)</option>
    </select>

  </div>
}

function Output({bill,tip}){
  return <div>
    <h3>You pay {bill + tip} (${bill} + ${tip}tip)</h3>
  </div>
}

function Reset({onReset}){
  return <div>
    <button type="button"  onClick={onReset}> Reset </button>
  </div>
}

export default App;


import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [inputList, setInputList] = useState([{ name: "", age: "" }])

  function changeInput(e, index) {
    let { name, value } = e.target;

    let list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }




  console.log(inputList);


function removeInput(index){

  let list = [...inputList]

  list.splice(index,1)

  setInputList(list)

}



  return (
    <div>
      {
        inputList.map((v, i) => {
          return (
            
              <div key={i} >
                <input
                  type="text"
                  name="name"
                  onChange={(e) => changeInput(e,i)}
                  value={v.name}
                />
                <input
                  type="number"
                  name="age"
                  onChange={(e) => changeInput(e,i)}
                  value={v.age}
                />
                <button onClick={()=>{  
                  removeInput(i)
                }}  >Remove</button>
              </div>
            
          )
        })
      }
     <button onClick={() => setInputList([...inputList, { name: "", age: "" }])}>
  Add More..
</button>
      <button onClick={(e)=>{
          e.preventDefault()
      console.log("Submit Data ",inputList);
      
      }}>Submit</button>

    </div>
  )
}

export default App

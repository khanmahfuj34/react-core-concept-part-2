import Counter  from './counter'
import './App.css'

function App() {
  function handleClick(){
    alert("I am Clicked")
  }
  const handelClick3=()=>{
    alert('clicked 3')
  }
  const handelAdd5 = (num) =>{
    const newNum = num +5;
    alert(newNum)
  }

  return (
    <>
      
      <h3>Vite + React</h3>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick2(){
        alert("Clicled 2")
      }}>Click me</button>
      <button onClick={handelClick3}>Clicked 3</button>
      <button onClick={()=>alert('click 4')}>Clicked 4</button>
      <button onClick={() => handelAdd5(10)}>Clicked5</button>
      
     
    </>
  )
}

export default App

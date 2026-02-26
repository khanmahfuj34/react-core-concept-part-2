import Counter  from './counter'
import Batsman from './batsman'
import Uses from './uses'
import './App.css'
import Friends from './friends'
import { Suspense } from 'react'
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/comments').then(res=>res.json());
const fetchFriends = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();
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
      <Suspense fallback={<h3>Loading...</h3>}>
        <Uses fetchUsers={fetchUsers}></Uses>
      </Suspense>
      <Suspense fallback={<h3>Friends are comming for Treate...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Counter></Counter>
      <Batsman></Batsman>
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

import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions'

function App() {
  const counter = useSelector((state )=> state.counterReducer)
  const isLogged = useSelector((state) => state.loggedReducer)
  const dispatch = useDispatch();

  function handleIncrement(){
    dispatch(increment(2))
  }

  function handleDecrease(){
    dispatch(decrement(2))
  }

  function handleLogIn() {
    dispatch(signIn())
  }

  console.log("Counter: ", counter, "isLogged: ", isLogged)
  return (
    <div>
      <h1>The Counter is: {counter}</h1>
      <button onClick={handleIncrement}>Increase Count</button>
      <button onClick={handleDecrease}>Decrease Count</button>
      <button onClick={handleLogIn}>Log In</button>
      {isLogged ? <p> This is valuable info only you can see </p> : ''}
    </div>
  )
}

export default App

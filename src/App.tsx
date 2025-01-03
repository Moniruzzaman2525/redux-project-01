import { Button } from "./components/ui/button"
import { decrement, increment } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"

function App() {

  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state) => state.counter)

 
  

  const handLeIncrement = (amount: number) => {
    dispatch(increment(amount))
  }
  const handLeDecrement = (amount: number) => {
    dispatch(decrement(amount))
  }

  return (
    <div>
      <h1>Counter with redux</h1>
      <Button onClick={()=> handLeIncrement(5)}>Increment</Button>
      <div>{count}</div>
      <button onClick={()=> handLeDecrement(5)}>Decrement</button>
    </div>
  )
}

export default App


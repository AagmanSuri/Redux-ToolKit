import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment,incrementByAmount } from './redux/counter';
function App() {
   const {value} = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {value}</h1>
      <button onClick={()=>{dispatch(increment())}}>increment</button>
      <button onClick={()=>{dispatch(decrement())}}>decrement</button>
      <button onClick={()=>{dispatch(incrementByAmount(10))}}>Add 10</button>
    </div>
  );
}

export default App;

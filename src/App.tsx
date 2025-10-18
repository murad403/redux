import { decreament, increament, increamentByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-semibold">Redux with React</h1>
      <div className="flex p-10 border border-slate-600 rounded-md gap-5 bg-gray-300">
        <button onClick={() =>dispatch(decreament())} className="bg-red-400 py-1 px-5 cursor-pointer rounded-md">Decrement</button>
        <p>{count}</p>
        <button onClick={() =>dispatch(increament())} className="bg-green-400 py-1 px-5 cursor-pointer rounded-md">Increament</button>
        <button onClick={() =>dispatch(increamentByValue(5))} className="bg-green-400 py-1 px-5 cursor-pointer rounded-md">Increament by 5</button>
      </div>
    </div>
  )
}

export default App


function App() {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-semibold">Redux with React</h1>
      <div className="flex p-10 border border-slate-600 rounded-md gap-5 bg-gray-300">
        <button className="bg-red-400 py-1 px-5 cursor-pointer rounded-md">Decrement</button>
        <p>0</p>
        <button className="bg-green-400 py-1 px-5 cursor-pointer rounded-md">Increament</button>
      </div>
    </div>
  )
}

export default App

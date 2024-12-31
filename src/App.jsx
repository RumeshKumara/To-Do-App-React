import Todo from "./components/Todo"

function App() {

  return (
    <>
    <div className="grid min-h-screen py-4 bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a]">
      <Todo/>
      <div className="fixed bottom-0 right-0 m-4 md:m-6 lg:m-8">
        <h3 className="text-slate-300"><span className="text-lg font-bold text-purple-500">#</span>Rumesh</h3>
      </div>
    </div>
    </>
  )
}

export default App

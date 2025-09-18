import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-4 animate-bounce">
        Hello React + Vite + Tailwind 🚀
      </h1>
      <p className="mb-6 text-lg text-gray-300">
        Website ini sudah siap dideploy ke Vercel!
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition"
      >
        Klik Saya ({count})
      </button>
    </div>
  )
}

export default App

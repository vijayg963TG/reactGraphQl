import logo from "./logo.svg"
// import { Counter } from "./features/counter/Counter"
import "./App.css"
import { Home } from "./pages/home"
import { Route, Routes } from "react-router-dom"
import { ShowDogs } from "./pages/dogs"

function App() {
  return (
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/dogs" element={<ShowDogs />} />
    </Routes>
  )
}

export default App

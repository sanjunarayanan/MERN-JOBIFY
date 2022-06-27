import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register, Dashboard } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

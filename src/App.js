import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<span>Home</span>} />
        <Route path="/character/:id" element={<span>Character</span>} />
      </Routes>
    </Router>
  )
}
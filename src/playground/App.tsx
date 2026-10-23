import { Route, Routes, Navigate } from 'react-router'
import PlaygroundLayout from './layouts/PlaygroundLayout'
import ComponentsPage from './pages/ComponentsPage'
import BadgesPage from './pages/BadgesPage'
import './playground.css'

function App() {
  return (
    <Routes>
      <Route element={<PlaygroundLayout />}>
        <Route path="/" element={<ComponentsPage />} />
      </Route>

      <Route path="/badges" element={<BadgesPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

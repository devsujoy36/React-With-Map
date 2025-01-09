import { Outlet } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
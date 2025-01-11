import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
const App = () => {
  return (
    <div className='max-w-screen-2xl md:mx-auto mx-10'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
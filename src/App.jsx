import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searchbar from './components/Searchbar'
import ParentDashboard from './components/ParentDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Searchbar/>
      <ParentDashboard/>

    </div>
  )
}

export default App

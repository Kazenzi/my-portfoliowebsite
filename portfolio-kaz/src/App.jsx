import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import { Contact } from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SideNav/>
      <Main/>
      <Work/>
      <Projects/>
      <Contact/>
      
      
    </div>
  )
}

export default App

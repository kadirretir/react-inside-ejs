import {createRoot} from 'react-dom/client'
import React from 'react'

const App = () => {
  return (
    <div><h1>MERHABA BEN REACT'TEN ULAŞIYORUM SİZE</h1></div>
  )
}

export default App


const getRoot = document.getElementById("root")
const root = createRoot(getRoot)
root.render(<App />)
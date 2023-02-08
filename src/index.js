import React from 'react'
import ReactDOM from 'react-dom/client'
import Stage1 from './components/Stage1'
import Stage2 from './components/Stage2'
import Stage3 from './components/Stage3'
import Stage4 from './components/Stage4'
import Create from './components/Create'
import Update from './components/Update'
import Hello from './components/Hello'
import './styles.css'

const App = () => {
  return (
    <div>
      <div className='container'>
        <Stage1 />
        <Stage2 />
        <Stage3 />
        <Stage4 />
      </div>
      <div className='container'>
        <Create />
        <Update />
      </div>
      <div className='greeting'>
        <Hello />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

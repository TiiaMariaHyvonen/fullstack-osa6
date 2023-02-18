import { createStore } from 'redux'
import counterReducer from './reducer'
import React from 'react'
import ReactDOM from 'react-dom/client'

const store = createStore(counterReducer)

const App = () => {
    return (
      <div>
        <div>
          {store.getState().good}
          {store.getState().ok}
          {store.getState().bad}
        </div>
      </div>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'))

  const renderApp = () => {
    root.render(<App />)
  }
  
  renderApp()
  store.subscribe(renderApp)
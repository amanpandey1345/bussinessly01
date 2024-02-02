import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbarr from './Components/Navbar.jsx'
import { Provider as ReduxProvider} from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider  store={store}>
    <Navbarr />
    <App />
    </ReduxProvider>
  </React.StrictMode>,
)

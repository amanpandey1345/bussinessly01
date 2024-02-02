import React from 'react'
import Home from './Components/Home'
import ArticlePage from './Components/ArticlePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articlepage' element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
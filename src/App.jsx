import React from 'react'
import Home from './Components/Home'
import ArticlePage from './Components/ArticlePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/articlepage' element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
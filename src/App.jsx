import React, { useEffect } from 'react'
import Home from './Components/Home'
import ArticlePage from './Components/ArticlePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero'
import { ProtectedRoute } from 'protected-route-react'
import { getUserApi } from './redux/Actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import Hearo from './Components/Hearo'

const App = () => {
  const dispatch = useDispatch();
  const { isAuth, User, isLoading, errorMessage } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserApi());
    console.log(isAuth);
  }, [dispatch]); 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={  <ProtectedRoute isAuthenticated={!isAuth} redirect={"/"}>
              <Hero/>  
            </ProtectedRoute>} />
          <Route path='/' element={
            <ProtectedRoute isAuthenticated={isAuth} >  
              <Hearo/>  
            </ProtectedRoute>
          } />
          <Route path='/articlepage' element={ <ProtectedRoute isAuthenticated={isAuth} >
          <ArticlePage />
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
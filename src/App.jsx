import React from 'react'

import Home from './Home'
import { Route,  Routes } from 'react-router-dom';
import Details from './Details';
import Create from './Create';
import Edit from './Edit';


const App = () => {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/create' element={<Create />} />
    <Route path='/Details/:id' element={<Details />} />
    <Route path="/edit/:id" element={<Edit />} />
  </Routes>
 
  </>
  )
}

export default App
